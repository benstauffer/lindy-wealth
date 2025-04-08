import React from 'react';

const principles = [
  { title: "Define your vision of a meaningful life", text: "Understand what matters most, then align your money accordingly." },
  { title: "Spend less than you earn", text: "Save and invest the difference." },
  { title: "Embrace simplicity, avoid complexity", text: "Less is more and usually more effective." },
  { title: "Prepare for uncertainty", text: "Maintain insurance and buffers—life is unpredictable." },
  { title: "Be patient, think long-term", text: "Patience compounds wealth and reduces emotional decisions." },
  { title: "Invest in quality assets", text: "Own durable, robust investments; ignore speculation, fads, and hype." },
  { title: "Avoid bad debt", text: "High interest rate debt limits opportunities." },
  { title: "Be aware of your psychology", text: "Understand your emotional biases and behavioral tendencies." },
  { title: "Focus on what you can control", text: "Fees, diversification, savings rate, and your behavior—not market fluctuations or predictions." },
];

export function Principals() {
  return (
    <div className="mt-12">
      <div className="border-2 rounded-sm p-4 md:p-8 space-y-6 shadow-inner border-red-500">
        <h2 id="principles" className="text-2xl md:text-2xl font-bold text-neutral-900 uppercase font-[georgia]">Principles</h2>
        <ol className="space-y-6 list-none pl-0">
          {principles.map((principle, index) => (
            <li key={index} className="flex items-start space-x-4">
              <span 
                className="deutsche-font text-4xl text-red-500 font-normal leading-none pt-1 flex-shrink-0"
                style={{ minWidth: '2rem', textAlign: 'right' }}
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-neutral-800">{principle.title}</h3>
                <p className="text-base text-neutral-600">{principle.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
