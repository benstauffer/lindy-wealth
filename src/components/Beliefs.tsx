import React from 'react';

const beliefs = [
  {
    id: 0,
    text: 'Your money should reflect what\'s important to you',
  },
  {
    id: 1,
    text: 'Simplicity > Complexity',
  },
  {
    id: 2,
    text: 'Embrace Lindy ideas. Robust, enduring financial principles can help provide clarity and confidence',
  },
  {
    id: 3,
    text: 'Redundancy is protection against life\'s uncertainties. Avoid bed debt, have proper insurance, and build buffers',
  },
  {
    id: 4,
    text: 'A good financial plan aligns a meaningful life with optimized finances',
  },
];

export function Beliefs() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg text-neutral-900">Beliefs</h2>
      <ul className="space-y-4">
        {beliefs.map((belief) => (
          <li key={belief.id} className="flex items-baseline space-x-3 text-base text-neutral-700">
            <span className="text-[#9CBE8E] pl-2">→</span>
            <span className="flex-1" dangerouslySetInnerHTML={{ __html: belief.text }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
