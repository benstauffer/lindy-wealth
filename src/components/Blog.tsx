'use client'

import { BlogCard } from '@/components/SubscribeCard'
import { FiArrowUpRight } from 'react-icons/fi'

export function BlogSection() {
  return (
    <section id="blog" className="w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg text-neutral-700 font-['Georgia']">
            Read my blog
          </h2>
          <p className="text-base text-neutral-700">
            Thoughts on wealth & life.
          </p>
        </div>

        <a 
          className="group inline-flex items-center text-sm font-medium bg-neutral-100 border border-neutral-300 hover:bg-neutral-300 hover:border-neutral-400 text-neutral-600 hover:text-neutral-900 px-4 py-2 rounded-lg transition-colors duration-200 shadow-inner"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Read blog
          <FiArrowUpRight className="ml-1 w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
      
      <div className="space-y-8 mt-4">
        <BlogCard />
      </div>
    </section>
  )
}
