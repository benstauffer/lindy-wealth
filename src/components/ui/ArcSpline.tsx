'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Vec = { x: number; y: number };
type Circle = { c: Vec; r: number; stroke?: string };

const TAU = Math.PI * 2;

function sub(a: Vec, b: Vec): Vec { return { x: a.x - b.x, y: a.y - b.y }; }
function add(a: Vec, b: Vec): Vec { return { x: a.x + b.x, y: a.y + b.y }; }
function mul(a: Vec, k: number): Vec { return { x: a.x * k, y: a.y * k }; }
function len(a: Vec): number { return Math.hypot(a.x, a.y); }
function ang(p: Vec): number { return Math.atan2(p.y, p.x); }
function pointOn(c: Circle, theta: number): Vec {
  return { x: c.c.x + c.r * Math.cos(theta), y: c.c.y + c.r * Math.sin(theta) };
}
function mod2pi(t: number): number {
  const m = (t % TAU + TAU) % TAU;
  return m;
}
function cwDelta(from: number, to: number): number {
  // positive magnitude rotating clockwise from "from" to "to"
  return mod2pi(from - to);
}
function ccwDelta(from: number, to: number): number {
  // positive magnitude rotating counter-clockwise from "from" to "to"
  return mod2pi(to - from);
}

/** External tangency point on circle i toward j */
function tangentPoint(i: Circle, j: Circle): Vec {
  const v = sub(j.c, i.c);
  const d = len(v);
  return add(i.c, mul(v, i.r / d));
}
function angleAt(circle: Circle, p: Vec): number {
  return ang(sub(p, circle.c));
}

type Segment = {
  circle: Circle;
  dir: 'CW' | 'CCW';
  from: number; // radians
  to: number;   // radians (same angle allowed)
  extraTurns?: number; // whole turns to include in addition to base delta
  length: number;      // set later (arc length)
};

// ---- Component ----
export default function ArcSpline({
  width = 800,
  height = 800,
  speed = 180, // world units per second
  showGuidesDefault = true,
}: {
  width?: number;
  height?: number;
  speed?: number;
  showGuidesDefault?: boolean;
}) {
  const [showGuides, setShowGuides] = useState(showGuidesDefault);
  const rafRef = useRef<number | null>(null);
  const startTsRef = useRef<number | null>(null);
  const distRef = useRef(0); // distance along closed loop

  // ----- Define circles in world coords (as in the prompt) -----
  const circles = useMemo(() => {
    const Cs: Circle = { c: { x: 0, y: 0 }, r: 110, stroke: '#9CA3AF' };      // small (middle)
    const Ct: Circle = { c: { x: -90, y: -265.1414716713 }, r: 170, stroke: '#6B7280' }; // top
    const Cb: Circle = { c: { x: 130, y: 281.4249455894 }, r: 200, stroke: '#A3A3A3' };  // bottom
    return { Cs, Ct, Cb };
  }, []);

  // Tangency points (small–bottom and small–top)
  const tangency = useMemo(() => {
    const P_sb_s = tangentPoint(circles.Cs, circles.Cb);
    const P_sb_b = tangentPoint(circles.Cb, circles.Cs);
    const P_st_s = tangentPoint(circles.Cs, circles.Ct);
    const P_st_t = tangentPoint(circles.Ct, circles.Cs);

    const θ_sb_s = angleAt(circles.Cs, P_sb_s);
    const θ_sb_b = angleAt(circles.Cb, P_sb_b);
    const θ_st_s = angleAt(circles.Cs, P_st_s);
    const θ_st_t = angleAt(circles.Ct, P_st_t);

    return {
      P_sb_s, P_sb_b, P_st_s, P_st_t,
      θ_sb_s, θ_sb_b, θ_st_s, θ_st_t,
    };
  }, [circles]);

  // Build the loop: Bottom (CW) → Small (CCW) → Top (CW one full turn) → Small (CCW back) → Bottom (CW back)
  const plan = useMemo(() => {
    const startOnBottom = (210 * Math.PI) / 180; // nice visual start angle
    const segs: Omit<Segment, 'length'>[] = [
      { circle: circles.Cb, dir: 'CW',  from: startOnBottom, to: tangency.θ_sb_b },
      { circle: circles.Cs, dir: 'CCW', from: tangency.θ_sb_s, to: tangency.θ_st_s },
      // full revolution on the top circle, clockwise (same angle, but +1 extra turn)
      { circle: circles.Ct, dir: 'CW',  from: tangency.θ_st_t, to: tangency.θ_st_t, extraTurns: 1 },
      { circle: circles.Cs, dir: 'CCW', from: tangency.θ_st_s, to: tangency.θ_sb_s },
      { circle: circles.Cb, dir: 'CW',  from: tangency.θ_sb_b, to: startOnBottom },
    ];

    // compute arc lengths
    const withLengths: Segment[] = segs.map(s => {
      const base = s.dir === 'CW'
        ? cwDelta(s.from, s.to)
        : ccwDelta(s.from, s.to);
      const turns = (s.extraTurns ?? 0) * TAU;
      const delta = base + turns; // total angle magnitude in radians
      return { ...s, length: s.circle.r * delta };
    });

    const totalLength = withLengths.reduce((acc, s) => acc + s.length, 0);
    return { segs: withLengths, totalLength };
  }, [circles, tangency]);

  // Compute world bounds to fit the SVG viewBox nicely
  const viewBox = useMemo(() => {
    const all: { x: number; y: number; r: number }[] = [
      { ...circles.Cs.c, r: circles.Cs.r },
      { ...circles.Ct.c, r: circles.Ct.r },
      { ...circles.Cb.c, r: circles.Cb.r },
    ];
    const minX = Math.min(...all.map(p => p.x - p.r));
    const maxX = Math.max(...all.map(p => p.x + p.r));
    const minY = Math.min(...all.map(p => p.y - p.r));
    const maxY = Math.max(...all.map(p => p.y + p.r));
    // padding
    const pad = 40;
    return `${minX - pad} ${minY - pad} ${maxX - minX + 2 * pad} ${maxY - minY + 2 * pad}`;
  }, [circles]);

  // Animation state (current point)
  const [pos, setPos] = useState<Vec>(() => pointOn(circles.Cb, (210 * Math.PI) / 180));

  useEffect(() => {
    let last = 0;

    const tick = (ts: number) => {
      if (startTsRef.current == null) startTsRef.current = ts;
      if (!last) last = ts;
      const dt = (ts - last) / 1000; // seconds
      last = ts;

      // advance distance
      distRef.current = (distRef.current + speed * dt) % plan.totalLength;

      // find segment where current distance lies
      let d = distRef.current;
      let seg!: Segment;
      for (const s of plan.segs) {
        if (d <= s.length) { seg = s; break; }
        d -= s.length;
      }
      if (!seg) seg = plan.segs[plan.segs.length - 1];

      // local progress [0,1] within segment
      const u = d / seg.length;

      // angle along this segment
      const base = seg.dir === 'CW'
        ? cwDelta(seg.from, seg.to)
        : ccwDelta(seg.from, seg.to);
      const turns = (seg.extraTurns ?? 0) * TAU;
      const delta = base + turns;

      const theta = seg.dir === 'CW'
        ? seg.from - u * delta
        : seg.from + u * delta;

      setPos(pointOn(seg.circle, theta));

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTsRef.current = null;
    };
  }, [plan, speed]);

  // Render
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full max-w-[720px] aspect-square rounded-2xl bg-stone-50 shadow-sm ring-1 ring-stone-200">
        <svg
          width={width}
          height={height}
          viewBox={viewBox}
          className="h-full w-full"
        >
          {/* Guide circles */}
          {showGuides && (
            <>
              <circle
                cx={circles.Ct.c.x}
                cy={circles.Ct.c.y}
                r={circles.Ct.r}
                fill="none"
                stroke={circles.Ct.stroke}
                strokeWidth={6}
                opacity={0.6}
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx={circles.Cs.c.x}
                cy={circles.Cs.c.y}
                r={circles.Cs.r}
                fill="none"
                stroke={circles.Cs.stroke}
                strokeWidth={6}
                opacity={0.5}
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx={circles.Cb.c.x}
                cy={circles.Cb.c.y}
                r={circles.Cb.r}
                fill="none"
                stroke={circles.Cb.stroke}
                strokeWidth={8}
                opacity={0.5}
                vectorEffect="non-scaling-stroke"
              />
            </>
          )}

          {/* Moving dot */}
          <circle
            cx={pos.x}
            cy={pos.y}
            r={12}
            fill="#111827"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowGuides(s => !s)}
          className="rounded-xl border px-3 py-1 text-sm font-medium shadow-sm hover:bg-stone-100"
        >
          {showGuides ? 'Hide guides' : 'Show guides'}
        </button>
        <span className="text-sm text-stone-600">
          Speed: <code>{speed}</code> units/s (edit prop)
        </span>
      </div>
    </div>
  );
}