'use client';

import { useMemo } from 'react';

type Vec = { x: number; y: number };
type Circle = { c: Vec; r: number };

export default function Logo() {
  // Simple two-circle Venn diagram without the middle circle
  const circles = useMemo(() => {
    const radius = 20;
    const separation = radius * 1.1; // ~45% overlap between circles
    
    // Top and bottom circles with vertical separation  
    const Ct: Circle = { c: { x: 0, y: -separation/2 }, r: radius };
    const Cb: Circle = { c: { x: 0, y: separation/2 }, r: radius };
    
    return { Ct, Cb };
  }, []);

  // compute viewBox to fit nicely
  const viewBox = useMemo(() => {
    const all = [circles.Ct, circles.Cb];
    const minX = Math.min(...all.map(c => c.c.x - c.r));
    const maxX = Math.max(...all.map(c => c.c.x + c.r));
    const minY = Math.min(...all.map(c => c.c.y - c.r));
    const maxY = Math.max(...all.map(c => c.c.y + c.r));
    const pad = 5;
    return `${minX - pad} ${minY - pad} ${maxX - minX + 2 * pad} ${maxY - minY + 2 * pad}`;
  }, [circles]);

  return (
    <div className="inline-flex items-center">
      <svg className="w-6 h-8 mr-2" viewBox={viewBox}>
        {/* Two overlapping circles */}
        <circle 
          cx={circles.Ct.c.x} 
          cy={circles.Ct.c.y} 
          r={circles.Ct.r}
          fill="none" 
          stroke="#f5f5f5" 
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke" 
        />
        <circle 
          cx={circles.Cb.c.x} 
          cy={circles.Cb.c.y} 
          r={circles.Cb.r}
          fill="none" 
          stroke="#f5f5f5" 
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke" 
        />
      </svg>
    </div>
  );
}