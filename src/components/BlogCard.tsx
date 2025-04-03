'use client'

export function BlogCard() {
  return (
    <div className="flex flex-col space-y-6 bg-white rounded-3xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.08)]">
      <h3 className="text-base font-medium text-neutral-500">
        You can subscribe below to get access to <span className="font-semibold text-neutral-900">Ben's Letter</span>
      </h3>
      
      <div className="flex gap-2 ">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 text-lg bg-white rounded-xl border border-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900"
        />
        <button className="px-6 py-3 text-lg font-medium bg-white border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white rounded-xl transition-colors duration-200">
          Subscribe
        </button>
      </div>

      <p className="text-base text-neutral-500">
        free wealth insights
      </p>
    </div>
  )
}
