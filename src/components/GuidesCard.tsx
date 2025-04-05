'use client'

type GuideCardProps = {
  title: string;
  description: string;
}

export function GuidesCard({ title, description }: GuideCardProps) {
  return (
    <div 
      className="group relative rounded-2xl p-6 transition-all bg-white border border-neutral-100 shadow-[0_0_30px_rgba(0,0,0,0.08)] cursor-pointer"
    >
      <div className="flex flex-col h-full space-y-2">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-medium text-neutral-600 group-hover:text-[#FB651F] group-hover:underline transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-base text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  )
}
