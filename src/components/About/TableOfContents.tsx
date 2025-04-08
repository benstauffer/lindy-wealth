'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
}

export function TableOfContents() {
  const tocItems: TOCItem[] = [
    { id: 'intro', text: 'Introduction' },
    { id: 'approach', text: 'Services & Pricing' },
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
    <nav>
      <div className="border rounded-sm p-8 space-y-2 shadow-inner bg-neutral-50 border-neutral-200">
        <div className="gap-2">
          <div className="w-full">
            <h3 className="text-2xl font-bold text-neutral-900 uppercase font-[georgia] mb-4">Contents</h3>
            <table className="w-full border-separate border-spacing-y-2">
              <tbody>
                {tocItems.map((item, index) => (
                  <tr key={item.id}>
                    <td className="w-8 pr-3 text-right font-medium text-base text-neutral-400 align-top">
                      {index + 1}.
                    </td>
                    <td className="text-left align-top">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-base hover:underline text-neutral-900 transition-colors duration-200 text-left"
                      >
                        {item.text}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </nav>
  );
} 