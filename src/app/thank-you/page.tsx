import { Header } from "@/components/Header";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ThankYou() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto mt-8">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl font-semibold text-center">
                  Thank you!
                </h1>

                <p className="text-xl text-neutral-600 text-center">
                  Just sent it over! Check your inbox shortly.
                </p>
                <div className="flex justify-center">
                  <a
                    className="group inline-flex items-center px-4 py-2 text-sm font-medium shadow-inner text-black bg-neutral-100 border border-neutral-300 hover:bg-neutral-300 hover:border-neutral-400 rounded-lg transition-colors duration-200"
                    href="/"
                  >
                    Back to home
                    <FaArrowRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="aspect-square border border-neutral-200 items-center justify-center"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
