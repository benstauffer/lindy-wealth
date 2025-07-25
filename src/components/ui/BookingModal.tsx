'use client'

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CalBooking from './CalBooking'

interface BookingModalProps {
  children: React.ReactNode;
  title?: string;
}

export function BookingModal({ children, title = "Schedule a Call" }: BookingModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-medium">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 p-6 pt-0">
          <CalBooking 
            style={{ 
              width: "100%", 
              height: "600px", 
              border: "none",
              borderRadius: "8px"
            }} 
          />
        </div>
      </DialogContent>
    </Dialog>
  )
} 