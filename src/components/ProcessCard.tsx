'use client'

type ProcessStep = {
  name: string;
  color: string;
  description: string;
}

const processData: ProcessStep[] = [
  {
    name: "1 - Discovery",
    color: "#f9fafb",
    description: "We talk about your values & goals.",
  },
  {
    name: "2 - Strategy",
    color: "#f9fafb",
    description: "We develop a comprehensive financial plan & roadmap for your unique situation.",
  },
  {
    name: "3 - Implement & Manage",
    color: "#f9fafb",
    description: "We execute the strategy & continuously adapt as your life evolves.",
  }
]

export function ProcessSection() {
  return (
    <div className="flex flex-col space-y-2 bg-neutral-50 rounded-2xl p-2 shadow-[0_0_30px_rgba(0,0,0,0.08)] border border-neutral-200">
      <div className="px-6 pt-2 pb-2 text-sm font-medium text-neutral-500">
        Process
      </div>
      {processData.map((step, index) => (
        <div 
          key={index}
          className="group relative rounded-2xl p-6 transition-all duration-300 bg-white border border-neutral-100"
        >
          <div className="flex flex-col h-full space-y-2">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-medium text-neutral-600">
                {step.name}
              </h3>
            </div>
            
            <p className="text-base text-neutral-600">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
} 