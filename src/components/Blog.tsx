'use client'

import { BlogCard } from '@/components/BlogCard'

export function BlogSection() {
  return (
    <section id="blog" className="w-full">
      <h2 className="text-base font-semibold text-neutral-500">
        Read my blog
      </h2>
      <p className="text-base text-neutral-400 mt-1">
        Thoughts on wealth, life & tech.
      </p>
      
      <div className="space-y-8 mt-4">
        <BlogCard />
      </div>
    </section>
  )
}
