'use client'

import { BlogCard } from '@/components/BlogCard'
import { FiArrowRight } from 'react-icons/fi'

export function BlogSection() {
  return (
    <section id="blog" className="w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg text-neutral-700 font-['Georgia']">
            Read my blog
          </h2>
          <p className="text-base text-neutral-700">
            Thoughts on financial planning
          </p>
        </div>

        <a 
          className="group inline-flex items-center px-4 py-2 text-sm font-medium  text-neutral-600 hover:text-neutral-900 bg-white shadow-sm border border-neutral-200 hover:bg-neutral-50  hover:border-neutral-300 rounded-lg transition-colors duration-200"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Read blog
          <FiArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
      
      <div className="space-y-8 mt-4">
        <BlogCard />
      </div>
    </section>
  )
}
