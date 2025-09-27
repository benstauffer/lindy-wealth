'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

const MarketStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMarketsOpen, setIsMarketsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now);
      
      // Check if markets are open (9:30 AM - 4:00 PM ET, Monday-Friday)
      const easternTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
      const day = easternTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
      const hour = easternTime.getHours();
      const minute = easternTime.getMinutes();
      const totalMinutes = hour * 60 + minute;
      
      const isWeekday = day >= 1 && day <= 5;
      const isMarketHours = totalMinutes >= 570 && totalMinutes < 960; // 9:30 AM to 4:00 PM
      
      setIsMarketsOpen(isWeekday && isMarketHours);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      month: "short",
      day: "numeric"
    });
  };

  return (
    <div className="text-sm text-[#999999] font-suisse">
      <div>{formatTime(currentTime)}, Markets {isMarketsOpen ? "Open" : "Closed"}</div>
    </div>
  );
};

export function HeaderSection() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="flex items-center justify-center px-6 py-4 pointer-events-auto relative">
        <Link href="/">
          <Logo />
        </Link>
        <div className="absolute right-6 hidden sm:block">
          <MarketStatus />
        </div>
      </div>
    </div>
  )
}