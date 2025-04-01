import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function ContactCard() {
  return (
    <section className="min-h-[90vh] flex items-start justify-center bg-white px-6 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col w-full max-w-4xl mx-auto">
        <div className="w-full bg-neutral-50 h-[300px] rounded-2xl overflow-hidden flex flex-col md:flex-row">

          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              We are a team that follows strong intuitions, rooted in principals and
              theory with an appetite to bend and challenge the status quo.
            </p>
            <div>
              <Button variant="default" className="gap-2 text-white bg-black hover:bg-gray-800">
                Email Us

              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
