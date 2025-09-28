'use client';

export default function FinancialServicesGrid() {
  const services = [
    {
      name: "Tax Planning",
      icon: "%",
      bgColor: "bg-blue-400",
      textColor: "text-white"
    },
    {
      name: "Owner's Pay Analysis", 
      icon: "👤",
      bgColor: "bg-orange-400",
      textColor: "text-white"
    },
    {
      name: "Cash Flow Planning",
      icon: "💧",
      bgColor: "bg-cyan-400", 
      textColor: "text-white"
    },
    {
      name: "Insurance Planning",
      icon: "☂",
      bgColor: "bg-red-400",
      textColor: "text-white"
    },
    {
      name: "Asset Protection",
      icon: "🛡",
      bgColor: "bg-green-400",
      textColor: "text-white"
    },
    {
      name: "Estate Planning",
      icon: "🏠",
      bgColor: "bg-purple-400",
      textColor: "text-white"
    },
    {
      name: "Debt Payoff Plan",
      icon: "⛓",
      bgColor: "bg-pink-400",
      textColor: "text-white"
    },
    {
      name: "Exit Planning",
      icon: "🚪",
      bgColor: "bg-indigo-400",
      textColor: "text-white"
    },
    {
      name: "Real Estate Analysis",
      icon: "🔍",
      bgColor: "bg-yellow-400",
      textColor: "text-black"
    },
    {
      name: "Credit Card Strategy",
      icon: "💳",
      bgColor: "bg-teal-400",
      textColor: "text-white"
    },
    {
      name: "Retirement Account Planning",
      icon: "🐷",
      bgColor: "bg-rose-400",
      textColor: "text-white"
    },
    {
      name: "Personal Financial Planning",
      icon: "📊",
      bgColor: "bg-emerald-400",
      textColor: "text-white"
    },
    {
      name: "Quarterly Review Meetings",
      icon: "📅",
      bgColor: "bg-violet-400",
      textColor: "text-white"
    },
    {
      name: "Check-ins as Needed",
      icon: "📱",
      bgColor: "bg-amber-400",
      textColor: "text-black"
    },
    {
      name: "Life Planning",
      icon: "🎯",
      bgColor: "bg-lime-400",
      textColor: "text-black"
    },
    {
      name: "College Savings",
      icon: "🎓",
      bgColor: "bg-sky-400",
      textColor: "text-white"
    },
    {
      name: "Risk Management",
      icon: "⚖",
      bgColor: "bg-orange-500",
      textColor: "text-white"
    },
    {
      name: "Investment Management",
      icon: "📈",
      bgColor: "bg-green-500",
      textColor: "text-white"
    },
    {
      name: "Company Benefit Planning",
      icon: "🏢",
      bgColor: "bg-blue-500",
      textColor: "text-white"
    },
    {
      name: "Tax-Advantaged Investing",
      icon: "📊",
      bgColor: "bg-purple-500",
      textColor: "text-white"
    },
    {
      name: "Equity Compensation Planning",
      icon: "📜",
      bgColor: "bg-red-500",
      textColor: "text-white"
    },
    {
      name: "Salary Review & Recommendations",
      icon: "💰",
      bgColor: "bg-emerald-500",
      textColor: "text-white"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} ${service.textColor} rounded-lg aspect-square flex flex-col items-center justify-center p-2 hover:scale-105 transition-transform cursor-pointer group relative`}
          >
            <div className="text-lg font-bold mb-1">
              {service.icon}
            </div>
            <div className="text-xs font-medium text-center leading-tight opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg p-1">
              {service.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}