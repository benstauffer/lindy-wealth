import { Header } from "@/components/Header";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { Introduction } from "@/components/Introduction";
import { Beliefs } from "@/components/Beliefs";
import { Process } from "@/components/Process";
import { Blog } from "@/components/Blog";
import { Bio } from "@/components/Bio";
import { ContactCard } from "@/components/ContactCard";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="mb-16 flex-grow">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 pt-32 lg:pt-24">
          <div className="mx-auto h-full flex flex-col">
            <Link
              href="/"
              className="group self-start inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200 bg-neutral-100 hover:bg-neutral-200 rounded-full px-4 py-2"
              >
              <FaArrowLeft className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" />
              Back to home
            </Link>

            <article id="intro" className="flex-grow space-y-8">
              <Bio />
              <Introduction />
              <div className="space-y-8">
                <Beliefs />
                <Process />
              </div>
              <div className="mt-12 space-y-4">
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
