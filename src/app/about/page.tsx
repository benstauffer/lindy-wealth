import { Header } from "@/components/Header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Image from "next/image";
import { TableOfContents } from "@/components/About/TableOfContents";
import { Introduction } from "@/components/About/Introduction";
import { Approach } from "@/components/About/Approach";
import { Pricing } from "@/components/About/Pricing";
import { Closing } from "@/components/About/Closing";

export default function About() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative">
            <div className="hidden lg:block lg:fixed lg:left-[calc(50vw-35rem)] lg:z-10 lg:top-32">
              <TableOfContents />
            </div>
            <div className="max-w-2xl mx-auto mt-8">
              <Link
                href="/"
                className="group inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                <FaArrowLeft className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" />
                Back to home
              </Link>

              <article className="mt-12 bg-white shadow-[0_0_30px_rgba(0,0,0,0.08)] rounded-lg sm:p-16">
                <div className="mx-auto space-y-8 text-base leading-relaxed">
                  <Introduction />
                </div>
              </article>
              
              <div className="mx-auto text-base leading-relaxed space-y-16 mt-16">
                <article className="bg-white shadow-[0_0_30px_rgba(0,0,0,0.08)] rounded-lg sm:p-16">
                  <Approach />
                </article>
                
                <article className="bg-white shadow-[0_0_30px_rgba(0,0,0,0.08)] rounded-lg sm:p-16">
                  <Pricing />
                </article>

                <article className="bg-white shadow-[0_0_30px_rgba(0,0,0,0.08)] rounded-lg sm:p-16">
                  <Closing />
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
