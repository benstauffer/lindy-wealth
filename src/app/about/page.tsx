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
            <div className="max-w-2xl mx-auto">
              <Link
                href="/"
                className="group inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200 sm:p-8"
              >
                <FaArrowLeft className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" />
                Back to home
              </Link>

              <article className="sm:p-8">
                <div className="mx-auto space-y-4 text-base leading-relaxed">
                  <Introduction />
                </div>
              </article>
              
              <div className="mx-auto text-base leading-relaxed space-y-4">
                <article className="bg-white sm:p-8">
                  <Approach />
                </article>
                
                <article className="bg-white sm:p-8">
                  <Pricing />
                </article>

                <article className="bg-white sm:p-8">
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
