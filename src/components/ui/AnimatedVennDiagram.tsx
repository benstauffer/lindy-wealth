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

/** Circle–circle intersections (returns 0, 1, or 2 points) */
function circleIntersections(a: Circle, b: Circle): Vec[] {
  const v = sub(b.c, a.c);
  const d = len(v);
  if (d === 0) return []; // concentric
  // no real intersections:
  if (d > a.r + b.r || d < Math.abs(a.r - b.r)) return [];
  const aLen = (a.r*a.r - b.r*b.r + d*d) / (2*d);
  const h2   = a.r*a.r - aLen*aLen;
  const h    = Math.sqrt(Math.max(0, h2));
  const p2   = add(a.c, mul(v, aLen / d));
  // perpendicular to v
  const rx = -v.y * (h / d);
  const ry =  v.x * (h / d);
  return [{ x: p2.x + rx, y: p2.y + ry }, { x: p2.x - rx, y: p2.y - ry }];
}

type Segment = {
  circle: Circle;
  dir: 'CW' | 'CCW';
  from: number; // radians
  to: number;   // radians
  extraTurns?: number; // whole extra revolutions
  length: number;      // arc length (computed)
};

export default function AnimatedVennDiagram() {
  const rafRef = useRef<number | null>(null);
  const distRef = useRef(0);
  const trailRef = useRef<Array<{ pos: Vec; timestamp: number; circle: Circle; angle: number; unwrappedAngle: number }>>([]);
  const lastThetaPerCircle = useRef(new WeakMap<Circle, number>());
  const lastSegmentIndex = useRef(-1);

  // --- Venn diagram with middle circle touching the borders (horizontal layout)
  const circles = useMemo(() => {
    const radius = 140;
    const separation = radius * 1.1; // ~45% overlap between circles
    
    // Left and right circles with horizontal separation
    const Ct: Circle = { c: { x: -separation/2, y: 0 }, r: radius, stroke: '#6B7280' }; // (using Ct as Left for minimal edits)
    const Cb: Circle = { c: { x:  separation/2, y: 0 }, r: radius, stroke: '#A3A3A3' }; // (using Cb as Right for minimal edits)
    
    // Calculate middle circle to be internally tangent to both left and right circles
    const distanceToLeftBorder = Math.abs(-separation/2 + radius);
    const distanceToRightBorder = Math.abs(separation/2 - radius);
    const smallRadius = Math.min(distanceToLeftBorder, distanceToRightBorder);
    
    const Cs: Circle = { c: { x: 0, y: 0 }, r: smallRadius, stroke: '#9CA3AF' };
    
    return { Cs, Ct, Cb };
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

  // compute viewBox to fit nicely
  const viewBox = useMemo(() => {
    const all = [circles.Cs, circles.Ct, circles.Cb];
    const minX = Math.min(...all.map(c => c.c.x - c.r));
    const maxX = Math.max(...all.map(c => c.c.x + c.r));
    const minY = Math.min(...all.map(c => c.c.y - c.r));
    const maxY = Math.max(...all.map(c => c.c.y + c.r));
    const pad = 20;
    return `${minX - pad} ${minY - pad} ${maxX - minX + 2 * pad} ${maxY - minY + 2 * pad}`;
  }, [circles]);

  // anim state
  const [pos, setPos] = useState<Vec>(() => pointOn(circles.Cb, (235 * Math.PI) / 180));
  const [trails, setTrails] = useState<Array<{ pathData: string; age: number }>>([]);
  const [activeCircle, setActiveCircle] = useState<'top' | 'middle' | 'bottom' | null>(null);
  const activeCircleRef = useRef<'top' | 'middle' | 'bottom' | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    let pausedTime = 0;
    const speed = 50;
    
    const tick = (ts: number) => {
      // Check if page is visible
      if (document.visibilityState === 'hidden') {
        // Don't update last time when hidden, effectively pausing
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!last) last = ts;
      
      // If we were paused, adjust the last timestamp
      if (pausedTime > 0) {
        last = ts - pausedTime;
        pausedTime = 0;
      }
      
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

      // Determine which circle the dot is currently on and set active state
      const distToTop = len(sub(newPos, circles.Ct.c));
      const distToBottom = len(sub(newPos, circles.Cb.c));
      const distToMiddle = len(sub(newPos, circles.Cs.c));
      
      // Check if in circles with small tolerance
      const inTopCircle = distToTop <= circles.Ct.r + 5;
      const inBottomCircle = distToBottom <= circles.Cb.r + 5;
      const inMiddleCircle = distToMiddle <= circles.Cs.r + 5;
      
      let newActiveCircle: 'top' | 'middle' | 'bottom' | null = null;
      
      // Priority: 1) Middle circle, 2) Overlap regions, 3) Individual circles
      if (inMiddleCircle) {
        newActiveCircle = 'middle';
      } else if (inTopCircle && inBottomCircle) {
        // In the lens-shaped overlap between top and bottom
        newActiveCircle = 'middle';
      } else if (inTopCircle) {
        newActiveCircle = 'top';
      } else if (inBottomCircle) {
        newActiveCircle = 'bottom';
      }
      
      // Update active circle immediately without debouncing
      if (newActiveCircle !== activeCircleRef.current) {
        setActiveCircle(newActiveCircle);
        activeCircleRef.current = newActiveCircle;
      }

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

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Reset timing when page becomes visible again
        last = 0;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    rafRef.current = requestAnimationFrame(tick);
    
    return () => { 
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [plan]);

  return (
    <div className="flex justify-center relative">
      <div className="relative w-full h-[350px]">
        {/* Venn diagram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <svg width="580" height="380">
              <g transform="translate(290, 190)">
                {/* guide circles (overlapping like a Venn diagram) */}
                <circle cx={circles.Ct.c.x} cy={circles.Ct.c.y} r={circles.Ct.r}
                  fill="none" stroke="#e5e5e5" strokeWidth="2" />
                <circle cx={circles.Cs.c.x} cy={circles.Cs.c.y} r={circles.Cs.r}
                  fill="none" stroke="#e5e5e5" strokeWidth="2" />
                <circle cx={circles.Cb.c.x} cy={circles.Cb.c.y} r={circles.Cb.r}
                  fill="none" stroke="#e5e5e5" strokeWidth="2" />
              
                {/* Dotted connector lines to text labels */}
                <g>
                  {/* Left "Better for your life" text to detailed text - L-shaped connector */}
                  <g>
                    {/* Vertical line up from above "Better for your life" text */}
                    <line 
                      x1={circles.Ct.c.x - circles.Ct.r * 0.5}
                      y1={circles.Ct.c.y - 20}
                      x2={circles.Ct.c.x - circles.Ct.r * 0.5}
                      y2={circles.Ct.c.y - 80}
                      stroke="#d1d5db" 
                      strokeWidth="1" 
                      strokeDasharray="3,3"
                      opacity="0.7"
                    />
                    {/* Horizontal line left to detailed text */}
                    <line 
                      x1={circles.Ct.c.x - circles.Ct.r * 0.5} 
                      y1={circles.Ct.c.y - 80}
                      x2={circles.Ct.c.x - circles.Ct.r - 60}
                      y2={circles.Ct.c.y - 80}
                      stroke="#d1d5db" 
                      strokeWidth="1" 
                      strokeDasharray="3,3"
                      opacity="0.7"
                    />
                  </g>
                  
                  {/* Line from under "Great advice" text down to bottom text */}
                  <line 
                    x1={circles.Cs.c.x} 
                    y1={circles.Cs.c.y + 20}
                    x2={circles.Cs.c.x}
                    y2={circles.Cs.c.y + 175}
                    stroke="#d1d5db" 
                    strokeWidth="1" 
                    strokeDasharray="3,3"
                    opacity="0.7"
                  />
                  
                  {/* Right "Better for your money" text to detailed text - L-shaped connector */}
                  <g>
                    {/* Vertical line up from above "Better for your money" text */}
                    <line 
                      x1={circles.Cb.c.x + circles.Cb.r * 0.5}
                      y1={circles.Cb.c.y - 20}
                      x2={circles.Cb.c.x + circles.Cb.r * 0.5}
                      y2={circles.Cb.c.y - 80}
                      stroke="#d1d5db" 
                      strokeWidth="1" 
                      strokeDasharray="3,3"
                      opacity="0.7"
                    />
                    {/* Horizontal line right to detailed text */}
                    <line 
                      x1={circles.Cb.c.x + circles.Cb.r * 0.5} 
                      y1={circles.Cb.c.y - 80}
                      x2={circles.Cb.c.x + circles.Cb.r + 60}
                      y2={circles.Cb.c.y - 80}
                      stroke="#d1d5db" 
                      strokeWidth="1" 
                      strokeDasharray="3,3"
                      opacity="0.7"
                    />
                  </g>
                </g>

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
            
            {/* Text labels positioned absolutely outside SVG */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div 
                className="absolute flex flex-col items-center justify-center text-sm leading-tight text-black/70 select-none tracking-tight font-suisse"
                style={{
                  left: `${290 + circles.Ct.c.x - circles.Ct.r * 0.5 - 100}px`,
                  top: `${190 + circles.Ct.c.y - 35}px`,
                  width: '200px',
                  height: '70px'
                }}
              >
                <span>Better for</span>
                <span>your life</span>
              </div>
              <div 
                className="absolute flex flex-col items-center justify-center text-sm leading-tight text-black/70 select-none tracking-tight font-suisse"
                style={{
                  left: `${290 + circles.Cs.c.x - 75}px`,
                  top: `${190 + circles.Cs.c.y - 35}px`,
                  width: '150px',
                  height: '70px'
                }}
              >
                <span>Great</span>
                <span>advice</span>
              </div>
              <div 
                className="absolute flex flex-col items-center justify-center text-sm leading-tight text-black/70 select-none tracking-tight font-suisse"
                style={{
                  left: `${290 + circles.Cb.c.x + circles.Cb.r * 0.5 - 100}px`,
                  top: `${190 + circles.Cb.c.y - 35}px`,
                  width: '200px',
                  height: '70px'
                }}
              >
                <span>Better for</span>
                <span>your money</span>
              </div>
              
              {/* Life Improvements text connected to left L-shaped line */}
              <div 
                className="absolute text-sm leading-tight text-black/70 select-none tracking-tight font-suisse"
                style={{
                  left: `${290 + circles.Ct.c.x - circles.Ct.r - 240}px`,
                  top: `${190 + circles.Ct.c.y - 95}px`,
                  width: '180px'
                }}
              >
                <div className="font-medium text-black/80">Life Improvements</div>
                <div className="mt-1 space-y-0.5">
                  <div>- More time back</div>
                  <div>- Less financial stress</div>
                  <div>- Clear decision making</div>
                </div>
              </div>

              {/* Net Worth Optimization text connected to L-shaped line */}
              <div 
                className="absolute text-sm leading-tight text-black/70 select-none tracking-tight font-suisse"
                style={{
                  left: `${290 + circles.Cb.c.x + circles.Cb.r + 65}px`,
                  top: `${190 + circles.Cb.c.y - 95}px`,
                  width: '180px'
                }}
              >
                <div className="font-medium text-black/80">Net Worth Optimization</div>
                <div className="mt-1 space-y-0.5">
                  <div>- Entity selection</div>
                  <div>- Tax-smart investing</div>
                  <div>- Proper risk management</div>
                </div>
              </div>

              {/* Bottom text connected to middle circle */}
              <div 
                className="absolute flex flex-col items-center justify-center text-base leading-normal text-black/70 select-none tracking-tight font-suisse"
                style={{
                  left: `${290 + circles.Cs.c.x - 150}px`,
                  top: `${190 + circles.Cs.c.y + 180}px`,
                  width: '300px'
                }}
              >
                <span>Comprehensive financial guidance</span>
                <span>to make your life and</span>
                <span>money work better together.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}