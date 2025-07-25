'use client'

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalBookingProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function CalBooking({ className, style }: CalBookingProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":true,"layout":"month_view"});
    })();
  }, [])
  
  return (
    <Cal 
      namespace="30min"
      calLink="ben-stauffer-ysbawo/30min"
      style={{width:"100%",height:"100%",overflow:"scroll", ...style}}
      config={{"layout":"month_view"}}
      className={className}
    />
  );
} 