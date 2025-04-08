import { WealthTable } from "./WealthTable";
import { Principals } from "./Principals";

// Remove the SVG component
// function LogoSvg() { ... }

export function Introduction() {

  return (
    <div className="mt-8 md:mt-0">
      <h2 id="intro" className="text-2xl md:text-2xl  text-neutral-700 font-['Georgia'] mb-6 border-b border-neutral-200 pb-2 mt-20">Lindy</h2>

      <div className="border-2 rounded-sm p-4 md:p-8 space-y-2 shadow-inner border-red-500 mb-6">
        <div className="space-y-1">
          <p className="font-serif text-base md:text-lg">
            <span className="inline md:hidden">Lindy</span>
            <span className="hidden md:inline">
              {/* Use the direct @font-face CSS class */}
              {/* Try negative bottom margin to pull text up */}
              <span className="float-left mt-0 mr-1 hidden md:inline-block deutsche-font text-[5.5rem] leading-[1] -mb-3 text-red-500">
                L
              </span>
              indy {/* Text part for desktop */}
            </span>
            {' '}is a heuristic stating that the longer something—an idea, book, or technology—has existed, the longer it is likely to continue existing. In this sense, longevity becomes a signal of robustness, wisdom, and enduring value.
          </p>
          </div>

      </div>

      <p className="text-lg leading-relaxed mb-6 font-['Georgia'] text-neutral-800">
        Everything is loud and fast.
      </p>

      <p className="text-lg leading-relaxed mb-6 font-['Georgia'] text-neutral-800">
        This is what happens when information has no limit. Opinions, trends, fears, and desires reach us instantly—and every day brings a new wave of noise. And in the middle of it all? People are left feeling unsure, overwhelmed, and stuck.         The endless scroll leaves little room for clarity, meaning, or trust.

      </p>

      <p className="text-lg leading-relaxed mb-6 font-['Georgia'] text-neutral-800">
        Lindy Wealth offers a clear and thoughtful alternative.
      </p>

      <p className="text-lg leading-relaxed mb-6 font-['Georgia'] text-neutral-800">
        Grounded in the Lindy heuristic, my philosophy emphasizes robust, enduring financial principles. Together, we'll focus on what we can control, prepare wisely for what we can't, and build a financial plan designed to support your goals.
      </p>

      <p className="text-lg leading-relaxed mb-6 font-['Georgia'] text-neutral-800">
        When your financial life is clear, everything else feels easier. You make better decisions. You worry less. You move through life with more purpose—and less noise.
      </p>

      <p className="text-lg leading-relaxed mb-6 font-['Georgia'] text-neutral-800">
        At Lindy Wealth, we help thoughtful individuals and families organize and manage their wealth through personalized planning, smart investing, and trusted, long-term guidance.
      </p>

    </div>


  );
}
