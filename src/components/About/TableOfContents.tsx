'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
}

export function TableOfContents() {
  const tocItems: TOCItem[] = [
    { id: 'intro', text: 'Introduction' },
    { id: 'approach', text: 'Services & Approach' },
    { id: 'pricing', text: 'Pricing' },
    { id: 'closing', text: 'Working Together' }
  ];

  const [activeId, setActiveId] = useState<string>('intro');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    let prevYPosition = window.pageYOffset;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Get current scroll direction
          const currentYPosition = window.pageYOffset;
          const isScrollingDown = currentYPosition > prevYPosition;
          prevYPosition = currentYPosition;

          if (entry.isIntersecting) {
            // If scrolling down, set active when element enters viewport from top
            // If scrolling up, set active when element enters viewport from bottom
            if ((isScrollingDown && entry.boundingClientRect.top < window.innerHeight / 2) ||
                (!isScrollingDown && entry.boundingClientRect.bottom > window.innerHeight / 2)) {
              setActiveId(entry.target.id);
            }
          }
        });
      },
      { 
        rootMargin: '-20% 0px -35% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1] 
      }
    );

    tocItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Update active section on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for header

      // Find the section that is currently in view
      const currentSection = tocItems.find(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveId(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="w-40">
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 sticky top-32">
        <ul className="space-y-1">
          {tocItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-xs w-full text-left px-2 py-1 rounded transition-colors duration-200 ${
                  activeId === item.id
                    ? 'text-neutral-900 bg-neutral-100'
                    : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 