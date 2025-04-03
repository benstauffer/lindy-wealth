'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Component to handle individual word animation
function AnimatedWord({
  word,
  progress,
  index,
  total,
}: {
  word: string
  progress: any
  index: number
  total: number
}) {
  // This controls how far apart each word animates
  // Decrease 1.1 to make words animate closer together
  // Increase it to space them out more
  const threshold = index / (total * 1.1)
  
  // This controls how quickly each word fades in
  // [threshold, threshold + 0.05] - increase 0.05 to make the fade longer
  // [0, 1] - these are the opacity values (start at 0, end at 1)
  const opacity = useTransform(progress, [threshold, threshold + 0.05], [0, 1])

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  )
}

// Component to split text into animated words
function AnimatedParagraph({ 
  text, 
  className = "",
  progress,
  startIndex,
  totalWords
}: { 
  text: string
  className?: string
  progress: any
  startIndex: number
  totalWords: number
}) {
  const words = text.split(" ")

  return (
    <p className={className}>
      {words.map((word, i) => (
        <AnimatedWord 
          key={i} 
          word={word} 
          progress={progress} 
          index={startIndex + i} 
          total={totalWords} 
        />
      ))}
    </p>
  )
}

export function Text() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 70%"]
  })

  const texts = [
    "You've put time, care, and thought into building a meaningful life.",
    "You deserve a partner who treats it with the same respect.",
  ]

  // Calculate total words and starting indices
  const totalWords = texts.reduce((sum, text) => sum + text.split(" ").length, 0)
  let currentIndex = 0
  
  return (
    <section className="w-full bg-neutral-50 rounded-3xl p-8">
      <div ref={containerRef} className="w-full text-left space-y-8">
        {texts.map((text, i) => {
          const startIndex = currentIndex
          currentIndex += text.split(" ").length
          return (
            <AnimatedParagraph 
              key={i}
              text={text}
              className="text-xl md:text-2xl font-medium leading-tight"
              progress={scrollYProgress}
              startIndex={startIndex}
              totalWords={totalWords}
            />
          )
        })}
      </div>
    </section>
  )
}
