import { Header } from "@/components/Header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { TableOfContents } from "@/components/About/TableOfContents";
import { Introduction } from "@/components/About/Introduction";
import { Approach } from "@/components/About/Approach";
import { Closing } from "@/components/About/Closing";

export default function About() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mt-8">
            <Link
              href="/"
              className="group inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
            >
              <FaArrowLeft className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" />
              Back to home
            </Link>

            <div className="space-y-8 mt-12">
              <div>
                <TableOfContents />
              </div>
              
              <article id="intro">
                <Introduction />
              </article>
              
              <article id="approach">
                <Approach />
              </article>
              
              <article id="closing">
                <Closing />
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
