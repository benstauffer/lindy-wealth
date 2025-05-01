import React, { ReactNode } from 'react';

interface LeftRightSectionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  className?: string;
}

export function LeftRightSection({ 
  leftContent, 
  rightContent, 
  className = ''
}: LeftRightSectionProps) {
  return (
    <div className={`w-full max-w-2xl mx-auto py-16 ${className}`}>
      <div className="w-full mx-auto px-6">
        {/* Desktop layout */}
        <div className="hidden md:flex">
          {/* Left side */}
          <div className="w-2/5 pr-8 text-left">
            {leftContent}
          </div>
          
          {/* Right side */}
          <div className="w-3/5 text-left">
            {rightContent}
          </div>
        </div>
        
        {/* Mobile layout */}
        <div className="md:hidden space-y-8">
          <div className="text-left">
            {leftContent}
          </div>
          <div className="text-left">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
} 