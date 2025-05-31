import { FiArrowRight } from "react-icons/fi";
import Link from 'next/link';

interface LearnMoreProps {
  href: string;
  text?: string;
  className?: string;
  width?: string;
  bgColor?: string;
  textColor?: string;
  circleColor?: string;
  arrowColor?: string;
  hoverBgColor?: string;
  hoverCircleColor?: string;
  hoverArrowColor?: string;
}

export function LearnMore({ 
  href, 
  text = "Learn More", 
  className = "",
  width = "w-40",
  bgColor = "bg-white",
  textColor = "text-neutral-800",
  circleColor = "bg-orange-600",
  arrowColor = "text-white",
  hoverBgColor = "hover:bg-gray-100",
  hoverCircleColor = "group-hover:bg-black",
  hoverArrowColor = "group-hover:text-white"
}: LearnMoreProps) {
  return (
    <Link
      href={href}
      className={`group flex items-center whitespace-nowrap rounded-full pl-2 pr-4 py-1.5 text-base font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${width} ${bgColor} ${textColor} ${hoverBgColor} ${className}`}
    >
      <span className={`flex-shrink-0 flex items-center justify-center rounded-full h-9 w-9 transition-all duration-300 ease-in-out group-hover:w-10 ${circleColor} ${hoverCircleColor}`}>
        <FiArrowRight className={`h-4 w-4 transition-colors duration-300 ease-in-out ${arrowColor} ${hoverArrowColor}`} />
      </span>
      <span className="pl-2.5 truncate">{text}</span>
    </Link>
  );
}
