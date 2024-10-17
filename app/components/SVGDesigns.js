import React from 'react';

const designs = [
  // Design 1: Abstract shapes
  {
    key: 'abstract-shapes',
    svg: (
      <svg key="abstract-shapes" viewBox="0 0 200 100" className="w-full h-auto mb-8">
        <rect x="10" y="10" width="30" height="30" fill="#3B82F6" />
        <circle cx="70" cy="30" r="20" fill="#10B981" />
        <polygon points="120,10 140,40 100,40" fill="#6366F1" />
        <line x1="160" y1="10" x2="190" y2="40" stroke="#EF4444" strokeWidth="4" />
      </svg>
    )
  },
  // Design 2: Wavy lines
  {
    key: 'wavy-lines',
    svg: (
      <svg key="wavy-lines" viewBox="0 0 200 100" className="w-full h-auto mb-8">
        <path d="M10 50 Q 52.5 10, 95 50 T 180 50" stroke="#3B82F6" strokeWidth="4" fill="none" />
        <path d="M10 80 Q 52.5 40, 95 80 T 180 80" stroke="#10B981" strokeWidth="4" fill="none" />
      </svg>
    )
  },
  // Design 3: Concentric circles
  {
    key: 'concentric-circles',
    svg: (
      <svg key="concentric-circles" viewBox="0 0 200 100" className="w-full h-auto mb-8">
        <circle cx="100" cy="50" r="40" stroke="#3B82F6" strokeWidth="4" fill="none" />
        <circle cx="100" cy="50" r="30" stroke="#10B981" strokeWidth="4" fill="none" />
        <circle cx="100" cy="50" r="20" stroke="#6366F1" strokeWidth="4" fill="none" />
      </svg>
    )
  },
];

export function getRandomDesign() {
  const randomDesign = designs[Math.floor(Math.random() * designs.length)];
  return React.cloneElement(randomDesign.svg, { key: randomDesign.key });
}
