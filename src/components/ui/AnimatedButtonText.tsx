'use client'

import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedButtonText = ({ text }: { text: string }) => {
  return (
    <span style={{ display: 'inline-grid', placeContent: 'center', overflow: 'hidden' }}>
      <motion.span
        style={{ gridColumn: 1, gridRow: 1 }}
        variants={{
          hover: { y: '-105%' },
          initial: { y: '0%' },
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
      <motion.span
        style={{ gridColumn: 1, gridRow: 1 }}
        variants={{
          hover: { y: '0%' },
          initial: { y: '105%' },
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  )
} 