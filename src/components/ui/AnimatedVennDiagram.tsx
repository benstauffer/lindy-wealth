'use client';

import { useMemo } from 'react';

type Vec = { x: number; y: number };
type Circle = { c: Vec; r: number; stroke?: string };

export default function AnimatedVennDiagram() {
  // --- Venn diagram with two circles (horizontal layout)
  const circles = useMemo(() => {
    const radius = 50;
    const separation = radius * 1.1; // ~45% overlap between circles
    
    // Left and right circles with horizontal separation
    const Ct: Circle = { c: { x: -separation/2, y: 0 }, r: radius, stroke: '#000000' };
    const Cb: Circle = { c: { x:  separation/2, y: 0 }, r: radius, stroke: '#000000' };
    
    return { Ct, Cb };
  }, []);

  return (
    <div className="flex justify-center relative">
      <div className="relative w-full h-[150px]">
        {/* Venn diagram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <svg 
              width="200" 
              height="120" 
              viewBox="0 0 250 150"
              className="sm:w-[250px] sm:h-[150px]"
            >
              <g transform="translate(125, 75)">
                {/* Background fills */}
                <circle cx={circles.Ct.c.x} cy={circles.Ct.c.y} r={circles.Ct.r}
                  fill="#f9fafb" stroke="none" />
                <circle cx={circles.Cb.c.x} cy={circles.Cb.c.y} r={circles.Cb.r}
                  fill="#f9fafb" stroke="none" />
                
                {/* guide circles (overlapping like a Venn diagram) */}
                <circle cx={circles.Ct.c.x} cy={circles.Ct.c.y} r={circles.Ct.r}
                  fill="none" stroke="#000000" strokeWidth="4" />
                <circle cx={circles.Cb.c.x} cy={circles.Cb.c.y} r={circles.Cb.r}
                  fill="none" stroke="#000000" strokeWidth="4" />
              
                {/* Dotted connector lines to text labels */}
                <g>
                  {/* Left line to "Better for your life" */}
                  <line 
                    x1={circles.Ct.c.x - circles.Ct.r + 40}
                    y1={circles.Ct.c.y}
                    x2={circles.Ct.c.x - circles.Ct.r - 40}
                    y2={circles.Ct.c.y}
                    stroke="#999999" 
                    strokeWidth="2" 
                    strokeDasharray="4,4"
                    opacity="1"
                  />
                  
                  {/* Right line to "Better for your money" */}
                  <line 
                    x1={circles.Cb.c.x + circles.Cb.r - 40}
                    y1={circles.Cb.c.y}
                    x2={circles.Cb.c.x + circles.Cb.r + 40}
                    y2={circles.Cb.c.y}
                    stroke="#999999" 
                    strokeWidth="2" 
                    strokeDasharray="4,4"
                    opacity="1"
                  />
                  
                  {/* Down line to "Great advice" */}
                  <line 
                    x1={0}
                    y1={10}
                    x2={0}
                    y2={80}
                    stroke="#999999" 
                    strokeWidth="2" 
                    strokeDasharray="4,4"
                    opacity="1"
                  />
                </g>
              </g>
            </svg>
            
            {/* Text labels positioned using percentage-based positioning for responsive scaling */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {/* Better for your life - left side */}
              <div 
                className="absolute flex flex-col items-center justify-center text-sm sm:text-base leading-tight text-white select-none tracking-tight font-suisse"
                style={{
                  left: '-15%',
                  top: '50%',
                  width: '100px',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <span>Better for</span>
                <span>your life</span>
              </div>

              {/* Better for your money - right side */}
              <div 
                className="absolute flex flex-col items-center justify-center text-sm sm:text-base leading-tight text-white select-none tracking-tight font-suisse"
                style={{
                  left: '115%',
                  top: '50%',
                  width: '100px',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <span>Better for</span>
                <span>your money</span>
              </div>

              {/* Great advice - bottom center */}
              <div 
                className="absolute flex flex-col items-center justify-center text-sm sm:text-base leading-tight text-white select-none tracking-tight font-suisse"
                style={{
                  left: '50%',
                  top: '120%',
                  width: '60px',
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <span>Great</span>
                <span>advice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}