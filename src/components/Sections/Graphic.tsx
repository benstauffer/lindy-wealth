'use client'

import React from 'react'

export function Graphic() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#F8F7F4]">
        {/* Yellow strip at bottom */}
        
        {/* Mountain peaks */}

        
                  {/* Abstract shapes */}
          <div className="absolute bottom-0 left-0 w-1/2 h-40 bg-[#9893A5]"></div>
          <div className="absolute bottom-40 right-0 w-1/2 h-40 bg-[#17A7FF]"></div>
      </div>

      {/* Mobile Interface */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-80 h-[450px] overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-center px-4 py-3 bg-[#2A2C33]">
            <div className="text-white font-medium text-center">Your Financial Plan</div>
          </div>

          {/* Content list */}
          <div className="bg-[#2A2C33] h-full">
          <div className="p-4 space-y-3 bg-[#373941] rounded-t-xl h-full">
            {/* Financial Goals & Metrics */}
            {[
              { title: "Retire at 55", category: "$30K/month", priority: "On Track", color: "from-yellow-400 to-yellow-600" },
              { title: "New Home Purchase", category: "$3M by 2025", priority: "In Progress", color: "from-green-400 to-green-600" },
              { title: "College Funding", category: "Fully Funded", priority: "Complete", color: "from-blue-400 to-blue-600" },
              { title: "Emergency Fund", category: "$100K Target", priority: "High", color: "from-red-400 to-red-600" },
              { title: "Tax Optimization", category: "37% Bracket", priority: "Critical", color: "from-purple-400 to-purple-600" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 hover:bg-[#51555D] rounded-lg transition-colors">
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                </div>
                <div className="flex-1">
                  <div className="text-white text-sm font-medium">{item.title}</div>
                  <div className="text-gray-400 text-xs">{item.category}</div>
                </div>
                <div className="text-gray-400 text-xs">{item.priority}</div>
                <div className="text-gray-400">⋮</div>
              </div>
            ))}
          </div>

          {/* Bottom navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg"></div>
                <div>
                  <div className="text-white text-sm font-medium">Financial Plan</div>
                  <div className="text-gray-400 text-xs">Lindy Wealth</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-gray-400">📊</div>
                <div className="text-white text-lg">▶️</div>
                <div className="text-gray-400">📈</div>
                <div className="text-gray-400">📤</div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
