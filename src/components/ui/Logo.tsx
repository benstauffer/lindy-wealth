'use client';

import { useMemo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

type Vec = { x: number; y: number };
type Circle = { c: Vec; r: number };

export default function Logo() {
  const { theme } = useTheme();
  
  // Simple two-circle Venn diagram without the middle circle (horizontal layout)
  const circles = useMemo(() => {
    const radius = 20;
    const separation = radius * 1.0; // 50% overlap between circles
    
    // Left and right circles with horizontal separation (same radius for both)
    const Ct: Circle = { c: { x: -separation/2, y: 0 }, r: radius };
    const Cb: Circle = { c: { x: separation/2, y: 0 }, r: radius };
    
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
      <svg className="w-7 h-6 mr-0.5" viewBox={viewBox}>
        {/* Two overlapping circles */}
        <circle 
          cx={circles.Ct.c.x} 
          cy={circles.Ct.c.y} 
          r={circles.Ct.r}
          fill="none" 
          stroke="#999999"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke" 
        />
        <circle 
          cx={circles.Cb.c.x} 
          cy={circles.Cb.c.y} 
          r={circles.Cb.r}
          fill="none" 
          stroke="#999999"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke" 
        />
      </svg>
      <span className="text-base text-[#999999] tracking-tight">Lindy Wealth</span>
    </div>
  );
}