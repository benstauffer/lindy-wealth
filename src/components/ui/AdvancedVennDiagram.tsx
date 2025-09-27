'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type Vec = { x: number; y: number };
type Circle = { c: Vec; r: number; stroke?: string };

const TAU = Math.PI * 2;

// ----- vec helpers -----
const sub = (a: Vec, b: Vec): Vec => ({ x: a.x - b.x, y: a.y - b.y });
const add = (a: Vec, b: Vec): Vec => ({ x: a.x + b.x, y: a.y + b.y });
const mul = (a: Vec, k: number): Vec => ({ x: a.x * k, y: a.y * k });
const len = (a: Vec): number => Math.hypot(a.x, a.y);
const ang = (p: Vec): number => Math.atan2(p.y, p.x);
const pointOn = (c: Circle, theta: number): Vec =>
  ({ x: c.c.x + c.r * Math.cos(theta), y: c.c.y + c.r * Math.sin(theta) });

const mod2pi = (t: number): number => (t % TAU + TAU) % TAU;
const cwDelta   = (from: number, to: number) => mod2pi(from - to);
const ccwDelta  = (from: number, to: number) => mod2pi(to - from);
const angleAt   = (circle: Circle, p: Vec): number => ang(sub(p, circle.c));

// Unwrap angles to avoid 0/2π jumps
function unwrap(circle: Circle, tRaw: number, lastMap: WeakMap<Circle, number>) {
  let t = mod2pi(tRaw);
  const prev = lastMap.get(circle);
  if (prev != null) {
    if (t - prev > Math.PI) t -= TAU;
    if (prev - t > Math.PI) t += TAU;
  }
  lastMap.set(circle, t);
  return t;
}

type Segment = {
  circle: Circle;
  dir: 'CW' | 'CCW';
  from: number; // radians
  to: number;   // radians
  extraTurns?: number; // whole extra revolutions
  length: number;      // arc length (computed)
};

type FinancialIcon = {
  id: string;
  emoji: string;
  label: string;
  initialPosition: Vec;
  finalPosition: Vec;
  category: 'life' | 'money' | 'advice' | 'outer';
};

export default function AdvancedVennDiagram() {
  const rafRef = useRef<number | null>(null);
  const distRef = useRef(0);
  const trailRef = useRef<Array<{ pos: Vec; timestamp: number; circle: Circle; angle: number; unwrappedAngle: number }>>([]);
  const lastThetaPerCircle = useRef(new WeakMap<Circle, number>());
  const lastSegmentIndex = useRef(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [iconsAnimated, setIconsAnimated] = useState(false);

  // --- Venn diagram with middle circle touching the borders (horizontal layout)
  const circles = useMemo(() => {
    const radius = 160;
    const separation = radius * 1.1; // ~45% overlap between circles
    
    // Left and right circles with horizontal separation
    const Ct: Circle = { c: { x: -separation/2, y: 0 }, r: radius, stroke: '#6B7280' }; // Left
    const Cb: Circle = { c: { x:  separation/2, y: 0 }, r: radius, stroke: '#A3A3A3' }; // Right
    
    // Calculate middle circle to be internally tangent to both left and right circles
    const distanceToLeftBorder = Math.abs(-separation/2 + radius);
    const distanceToRightBorder = Math.abs(separation/2 - radius);
    const smallRadius = Math.min(distanceToLeftBorder, distanceToRightBorder);
    
    const Cs: Circle = { c: { x: 0, y: 0 }, r: smallRadius, stroke: '#9CA3AF' };
    
    return { Cs, Ct, Cb };
  }, []);

  // Financial planning cards with initial and final positions
  const financialIcons: FinancialIcon[] = useMemo(() => {
    return [
      // Left circle (Better for your life)
      {
        id: 'retirement',
        emoji: '',
        label: 'Early Retirement',
        initialPosition: { x: -400, y: -200 },
        finalPosition: { x: -280, y: -80 },
        category: 'life'
      },
      {
        id: 'time-freedom',
        emoji: '',
        label: 'Time Freedom',
        initialPosition: { x: -450, y: 100 },
        finalPosition: { x: -280, y: 80 },
        category: 'life'
      },
      {
        id: 'peace-mind',
        emoji: '',
        label: 'Peace of Mind',
        initialPosition: { x: -350, y: 250 },
        finalPosition: { x: -200, y: 150 },
        category: 'life'
      },
      {
        id: 'homeownership',
        emoji: '',
        label: 'Dream Home',
        initialPosition: { x: -200, y: -300 },
        finalPosition: { x: -150, y: -200 },
        category: 'life'
      },
      
      // Right circle (Better for your money)
      {
        id: 'tax-strategy',
        emoji: '',
        label: 'Tax Strategy',
        initialPosition: { x: 400, y: -150 },
        finalPosition: { x: 280, y: -80 },
        category: 'money'
      },
      {
        id: 'investment-growth',
        emoji: '',
        label: 'Investment Growth',
        initialPosition: { x: 450, y: 80 },
        finalPosition: { x: 280, y: 80 },
        category: 'money'
      },
      {
        id: 'passive-income',
        emoji: '',
        label: 'Passive Income',
        initialPosition: { x: 350, y: 220 },
        finalPosition: { x: 200, y: 150 },
        category: 'money'
      },
      {
        id: 'emergency-fund',
        emoji: '',
        label: 'Emergency Fund',
        initialPosition: { x: 300, y: -280 },
        finalPosition: { x: 150, y: -200 },
        category: 'money'
      },
      
      // Center overlap (Great advice)
      {
        id: 'financial-plan',
        emoji: '',
        label: 'Financial Plan',
        initialPosition: { x: 0, y: -350 },
        finalPosition: { x: 0, y: -120 },
        category: 'advice'
      },
      {
        id: 'wealth-security',
        emoji: '',
        label: 'Wealth Security',
        initialPosition: { x: 0, y: 350 },
        finalPosition: { x: 0, y: 120 },
        category: 'advice'
      },
      
      // Outer positions
      {
        id: 'business-structure',
        emoji: '',
        label: 'Business Structure',
        initialPosition: { x: -500, y: 0 },
        finalPosition: { x: -350, y: 0 },
        category: 'outer'
      },
      {
        id: 'cash-flow',
        emoji: '',
        label: 'Cash Flow',
        initialPosition: { x: 500, y: 0 },
        finalPosition: { x: 350, y: 0 },
        category: 'outer'
      }
    ];
  }, []);

  // Since small circle is contained within the overlap, use tangent points for connections (horizontal)
  const pts = useMemo(() => {
    // Calculate proper tangent points between circles (flipped middle circle sides)
    // Small circle to right circle (Cb): leftmost point of small circle (flipped)
    const P_sb_s = { x: circles.Cs.c.x - circles.Cs.r, y: circles.Cs.c.y };
    // Corresponding point on right circle (Cb): leftmost point that aligns
    const P_sb_b = { x: circles.Cb.c.x - circles.Cb.r, y: circles.Cb.c.y };
    
    // Small circle to left circle (Ct): rightmost point of small circle (flipped)
    const P_st_s = { x: circles.Cs.c.x + circles.Cs.r, y: circles.Cs.c.y };
    // Corresponding point on left circle (Ct): rightmost point that aligns
    const P_st_t = { x: circles.Ct.c.x + circles.Ct.r, y: circles.Ct.c.y };

    const θ_sb_s = angleAt(circles.Cs, P_sb_s);
    const θ_sb_b = angleAt(circles.Cb, P_sb_b);
    const θ_st_s = angleAt(circles.Cs, P_st_s);
    const θ_st_t = angleAt(circles.Ct, P_st_t);

    return { P_sb_s, P_sb_b, P_st_s, P_st_t, θ_sb_s, θ_sb_b, θ_st_s, θ_st_t };
  }, [circles]);

  // Build loop (mapped): Right (CW) → Small (CW) → Left (CW, 1 full turn) → Small (CW back) → Right (CW back)
  const plan = useMemo(() => {
    const startOnBottom = (235 * Math.PI) / 180; // start angle on right circle (Cb)
    const segsBase: Omit<Segment, 'length'>[] = [
      { circle: circles.Cb, dir: 'CW',  from: startOnBottom, to: pts.θ_sb_b },
      { circle: circles.Cs, dir: 'CW', from: pts.θ_sb_s,    to: pts.θ_st_s },
      { circle: circles.Ct, dir: 'CW',  from: pts.θ_st_t,    to: pts.θ_st_t, extraTurns: 1 },
      { circle: circles.Cs, dir: 'CW', from: pts.θ_st_s,    to: pts.θ_sb_s },
      { circle: circles.Cb, dir: 'CW',  from: pts.θ_sb_b,    to: startOnBottom },
    ];

    const withLengths: Segment[] = segsBase.map(s => {
      const base = s.dir === 'CW' ? cwDelta(s.from, s.to) : ccwDelta(s.from, s.to);
      const delta = base + (s.extraTurns ?? 0) * TAU;
      return { ...s, length: s.circle.r * delta };
    });

    const totalLength = withLengths.reduce((acc, s) => acc + s.length, 0);
    return { segs: withLengths, totalLength };
  }, [circles, pts]);

  // anim state
  const [pos, setPos] = useState<Vec>(() => pointOn(circles.Cb, (235 * Math.PI) / 180));
  const [trails, setTrails] = useState<Array<{ pathData: string; age: number }>>([]);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !iconsAnimated) {
          setIsVisible(true);
          // Delay icon animation slightly after visibility
          setTimeout(() => {
            setIconsAnimated(true);
          }, 300);
        }
      },
      {
        threshold: 0.6, // Trigger when 60% visible
        rootMargin: '-50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [iconsAnimated]);

  // Function to insert exact tangency points for both circles at transitions
  const pushTangencyAnchors = (
    fromSegIdx: number,
    toSegIdx: number,
    ts: number
  ) => {
    const fromSeg = plan.segs[fromSegIdx];
    const toSeg = plan.segs[toSegIdx];
    if (!fromSeg || !toSeg) return;

    // choose the correct angle pair for this junction, using precomputed θ's
    let angleFrom: number | null = null;
    let angleTo: number | null = null;

    if (fromSeg.circle === circles.Cb && toSeg.circle === circles.Cs) {
      angleFrom = pts.θ_sb_b; angleTo = pts.θ_sb_s;
    } else if (fromSeg.circle === circles.Cs && toSeg.circle === circles.Cb) {
      angleFrom = pts.θ_sb_s; angleTo = pts.θ_sb_b;
    } else if (fromSeg.circle === circles.Ct && toSeg.circle === circles.Cs) {
      angleFrom = pts.θ_st_t; angleTo = pts.θ_st_s;
    } else if (fromSeg.circle === circles.Cs && toSeg.circle === circles.Ct) {
      angleFrom = pts.θ_st_s; angleTo = pts.θ_st_t;
    }
    if (angleFrom == null || angleTo == null) return;

    // push end anchor on the "from" circle (same timestamp)
    const pF = pointOn(fromSeg.circle, angleFrom);
    trailRef.current.push({
      pos: pF,
      timestamp: ts,
      circle: fromSeg.circle,
      angle: angleFrom,
      unwrappedAngle: unwrap(fromSeg.circle, angleFrom, lastThetaPerCircle.current),
    });

    // push start anchor on the "to" circle (same timestamp)
    const pT = pointOn(toSeg.circle, angleTo);
    trailRef.current.push({
      pos: pT,
      timestamp: ts,
      circle: toSeg.circle,
      angle: angleTo,
      unwrappedAngle: unwrap(toSeg.circle, angleTo, lastThetaPerCircle.current),
    });
  };

  useEffect(() => {
    let last = 0;
    const speed = 50;
    const tick = (ts: number) => {
      if (!last) last = ts;
      const dt = (ts - last) / 1000;
      last = ts;

      distRef.current = (distRef.current + speed * dt) % plan.totalLength;

      // pick segment for current distance
      let d = distRef.current;
      let seg = plan.segs[0];
      for (const s of plan.segs) {
        if (d <= s.length) { seg = s; break; }
        d -= s.length;
      }
      const u = d / seg.length;

      const base = seg.dir === 'CW' ? cwDelta(seg.from, seg.to) : ccwDelta(seg.from, seg.to);
      const delta = base + (seg.extraTurns ?? 0) * TAU;
      const theta = seg.dir === 'CW' ? seg.from - u * delta : seg.from + u * delta;

      const newPos = pointOn(seg.circle, theta);
      setPos(newPos);

      // Detect segment transitions and insert tangency anchors
      const currentSegmentIndex = plan.segs.findIndex(s => s === seg);
      if (lastSegmentIndex.current !== -1 && lastSegmentIndex.current !== currentSegmentIndex) {
        pushTangencyAnchors(lastSegmentIndex.current, currentSegmentIndex, ts);
      }
      lastSegmentIndex.current = currentSegmentIndex;

      // Unwrap the angle for this circle
      const unwrappedAngle = unwrap(seg.circle, theta, lastThetaPerCircle.current);

      // Add to trail
      trailRef.current.push({
        pos: newPos,
        timestamp: ts,
        circle: seg.circle,
        angle: theta,
        unwrappedAngle: unwrappedAngle
      });

      // Remove old trail points (older than 8 seconds for much longer trail)
      const cutoff = ts - 8000;
      trailRef.current = trailRef.current.filter(t => t.timestamp > cutoff);

      // Build continuous trail segments connecting all consecutive points
      const trailSegments: Array<{ pathData: string; age: number }> = [];
      const trail = trailRef.current;
      
      for (let i = 0; i < trail.length - 1; i++) {
        const a = trail[i];
        const b = trail[i + 1];
        
        const age = ts - a.timestamp;
        
        if (a.circle === b.circle) {
          // Points on same circle - use arc
          const du = b.unwrappedAngle - a.unwrappedAngle;
          if (Math.abs(du) < 0.01) {
            // Points are too close, use straight line
            const pathData = `M ${a.pos.x} ${a.pos.y} L ${b.pos.x} ${b.pos.y}`;
            trailSegments.push({ pathData, age });
          } else {
            // Use arc for clockwise movement
            const sweep = 1;
            const pathData = `M ${a.pos.x} ${a.pos.y} A ${a.circle.r} ${a.circle.r} 0 0 ${sweep} ${b.pos.x} ${b.pos.y}`;
            trailSegments.push({ pathData, age });
          }
        } else {
          // Points on different circles - use straight line for seamless transition
          const pathData = `M ${a.pos.x} ${a.pos.y} L ${b.pos.x} ${b.pos.y}`;
          trailSegments.push({ pathData, age });
        }
      }
      
      setTrails(trailSegments);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [plan]);

  return (
    <div ref={containerRef} className="flex justify-center relative">
      <div className="relative">
        <svg width="800" height="600" className="overflow-visible">
          <g transform="translate(400, 300)">
            {/* guide circles (overlapping like a Venn diagram) */}
            <circle cx={circles.Ct.c.x} cy={circles.Ct.c.y} r={circles.Ct.r}
              fill="none" stroke="#737373" strokeWidth="2" />
            <circle cx={circles.Cs.c.x} cy={circles.Cs.c.y} r={circles.Cs.r}
              fill="none" stroke="#737373" strokeWidth="2" />
            <circle cx={circles.Cb.c.x} cy={circles.Cb.c.y} r={circles.Cb.r}
              fill="none" stroke="#737373" strokeWidth="2" />
            
            {/* Circle labels */}
            <foreignObject x={circles.Ct.c.x - circles.Ct.r * 0.5 - 100} y={circles.Ct.c.y - 35} width="200" height="70">
              <div className="flex flex-col items-center justify-center h-full text-sm text-black dark:text-white pointer-events-none select-none tracking-tight font-suisse">
                <span>Better for</span>
                <span>your life</span>
              </div>
            </foreignObject>
            <foreignObject x={circles.Cs.c.x - 75} y={circles.Cs.c.y - 35} width="150" height="70">
              <div className="flex flex-col items-center justify-center h-full text-sm text-black dark:text-white pointer-events-none select-none tracking-tight font-suisse">
                <span>Great</span>
                <span>advice</span>
              </div>
            </foreignObject>
            <foreignObject x={circles.Cb.c.x + circles.Cb.r * 0.5 - 100} y={circles.Cb.c.y - 35} width="200" height="70">
              <div className="flex flex-col items-center justify-center h-full text-sm text-black dark:text-white pointer-events-none select-none tracking-tight font-suisse">
                <span>Better for</span>
                <span>your money</span>
              </div>
            </foreignObject>
          
            {/* trail segments with round caps for seamless connection */}
            {trails.map((trail, i) => {
              const { pathData, age } = trail;
              const fadeRatio = Math.max(0, 1 - (age / 8000));
              
              return (
                <path
                  key={i}
                  d={pathData}
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={fadeRatio}
                />
              );
            })}
          </g>
        </svg>

        {/* Financial Icons */}
        {financialIcons.map((icon, index) => {
          const currentPos = iconsAnimated ? icon.finalPosition : icon.initialPosition;
          const delay = index * 150; // Staggered animation delay
          
          // Professional colors and text-based icons
          const getIconStyle = (id: string) => {
            switch (id) {
              case 'retirement':
                return { bg: 'bg-slate-700', text: 'RET' };
              case 'time-freedom':
                return { bg: 'bg-blue-700', text: 'TIME' };
              case 'peace-mind':
                return { bg: 'bg-emerald-700', text: 'PEACE' };
              case 'homeownership':
                return { bg: 'bg-purple-700', text: 'HOME' };
              case 'tax-strategy':
                return { bg: 'bg-red-700', text: 'TAX' };
              case 'investment-growth':
                return { bg: 'bg-green-700', text: 'GROW' };
              case 'passive-income':
                return { bg: 'bg-amber-700', text: 'INCOME' };
              case 'emergency-fund':
                return { bg: 'bg-indigo-700', text: 'FUND' };
              case 'financial-plan':
                return { bg: 'bg-rose-700', text: 'PLAN' };
              case 'wealth-security':
                return { bg: 'bg-teal-700', text: 'SECURE' };
              case 'business-structure':
                return { bg: 'bg-violet-700', text: 'BIZ' };
              case 'cash-flow':
                return { bg: 'bg-cyan-700', text: 'CASH' };
              default:
                return { bg: 'bg-gray-700', text: 'PLAN' };
            }
          };

          const iconStyle = getIconStyle(icon.id);
          
          return (
            <div
              key={icon.id}
              className={`absolute pointer-events-none transition-all duration-1000 ease-out ${
                iconsAnimated ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${400 + currentPos.x}px`,
                top: `${300 + currentPos.y}px`,
                transform: 'translate(-50%, -50%)',
                transitionDelay: `${delay}ms`
              }}
            >
              <div className="flex flex-col items-center space-y-1">
                <div className={`w-12 h-12 ${iconStyle.bg} rounded-xl flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">
                    {iconStyle.text}
                  </span>
                </div>
                <div className="text-xs text-center text-black/70 font-medium max-w-16 leading-tight">
                  {icon.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}