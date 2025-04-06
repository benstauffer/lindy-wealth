import { WealthTable } from "./WealthTable";

export function Introduction() {

  return (
    <div className="space-y-8">
      <h2 id="intro" className="text-lg font-bold text-neutral-900">Lindy</h2>

      <div className="border border-neutral-200 rounded-sm p-8 space-y-4 shadow-inner bg-neutral-50">
        <div className="space-y-1">
          <h3 className="text-xl font-serif">Lindy</h3>
          <p className="text-lg text-neutral-600 font-serif">Pronunciation: /LIN-dee/</p>
        </div>

        <div className="space-y-2">
          <p className="font-serif text-lg">Noun</p>
          <div className="space-y-1">
            <p className="font-serif text-lg"><span className="font-medium">Definition:</span> A heuristic stating that the longer something—an idea, book, or technology—has existed, the longer it is likely to continue existing. In this sense, longevity becomes a signal of robustness, wisdom, and enduring value.</p>
          </div>
        </div>
      </div>

      <p>Today, the world is loud and fast.</p>

      <p>
        It's flooded with noise—crypto hype, misinformation, TikTok traders,
        apocalyptic predictions, and podcast know-it-alls. And in the middle of
        it all, people are left feeling unsure, overwhelmed, and stuck.
      </p>

      <p>Lindy Wealth exists to change that.</p>
      <p>
        I didn't build Lindy to sell you narratives, predictions, or trends. I
        built it to be a thoughtful alternative to them.
      </p>

      <p>
        Lindy is about managing wealth with clarity, patience, and care. I focus
        on what we can control and prepare wisely for what we can't.
      </p>

      <p>
        When your financial life is clear, everything else feels easier. You
        make better decisions. You worry less. You move through life with more
        purpose and less noise.
      </p>
      <p>
        My mission is to help you live your rich life by aligning true wealth and financial wealth.
      </p>
      <WealthTable />
      <p>
        That's what I do at Lindy Wealth. I help thoughtful individuals and
        families organize, protect, and manage their wealth through personalized
        planning, smart investing, and trusted long-term advice.
      </p>

      <p>
        If you're looking for a calm, clear path forward, I'd be honored to work
        with you.
      </p>

      <div className="mt-16 space-y-1">
        <p className="font-medium text-base">— Ben Stauffer CFP®</p>
        <p className="text-neutral-600 text-base">Founder, Lindy Wealth</p>
      </div>
    </div>
  );
}
