"use client";

import { useState } from "react";

interface SnapshotSection {
  title: string;
  items: string[];
}

interface SnapshotProps {
  heading: string;
  sections: SnapshotSection[];
}

export default function Snapshot({ heading, sections }: SnapshotProps) {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  return (
    <div className="mt-12 relative">
      {/* Futuristic background elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {heading}
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-900/50 backdrop-blur-md rounded-xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            onMouseEnter={() => setExpandedSection(idx)}
            onMouseLeave={() => setExpandedSection(null)}
          >
            {/* Animated highlight bar */}
            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-300 ${expandedSection === idx ? 'opacity-100' : 'opacity-30'}`}></div>
            
            <h3 className="text-xl font-bold mb-3 text-white flex items-center">
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${expandedSection === idx ? 'bg-blue-500 animate-pulse' : 'bg-gray-500'}`}></span>
              {section.title}
            </h3>
            
            <ul className="space-y-2 text-gray-300">
              {section.items.map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-blue-400 mr-2">•</span>
                  <span className={`transition-all ${expandedSection === idx ? 'text-white' : 'text-gray-400'}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Hover effect background */}
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 ${expandedSection === idx ? 'opacity-100' : ''} -z-10`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}