'use client'

import { motion, MotionValue } from 'framer-motion'

interface MissionSectionProps {
  missionContentOpacity: MotionValue<number>
}

export function MissionSection({ missionContentOpacity }: MissionSectionProps) {
  return (
    <motion.div 
      className="text-xl sm:text-2xl md:text-[32px] lg:text-[42px] leading-[1.1] font-['Georgia'] tracking-[-0.02em] mt-2 absolute"
      style={{ opacity: missionContentOpacity }}
    >
      <p></p>
    </motion.div>
  )
} 