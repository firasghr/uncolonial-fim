const blocks = [
  {
    id: 1,
    title: "Land, Extraction, Memory",
    colorClass: "text-brand-magenta",
    borderClass: "border-brand-magenta",
    bgClass: "bg-brand-magenta",
    description:
      "How territory is stolen, poisoned, contested — and how communities resist and reclaim their connection to place.",
  },
  {
    id: 2,
    title: "Diaspora, Exile, Refusal",
    colorClass: "text-brand-yellow",
    borderClass: "border-brand-yellow",
    bgClass: "bg-brand-yellow",
    description:
      "Living between worlds — in grief, anger, ambivalence, survival — and the acts of resistance that displacement does not extinguish.",
  },
  {
    id: 3,
    title: "Form as Weapon",
    colorClass: "text-brand-aqua",
    borderClass: "border-brand-aqua",
    bgClass: "bg-brand-aqua",
    description:
      "Experimental, essay, and hybrid works that use form itself as an act of resistance. Aesthetics the mainstream circuit would never fund or canonise.",
  },
  {
    id: 4,
    title: "Futures / Otherwise",
    colorClass: "text-brand-green",
    borderClass: "border-brand-green",
    bgClass: "bg-brand-green",
    description:
      "Resistance not as a moment but as a continuity. The present and the possible held at the same time. Not optimism. Not closure. A different orientation.",
  },
];

export default function Program() {
  return (
    <section
      id="program"
      className="bg-black py-20 md:py-32"
      aria-labelledby="program-heading"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-brand-magenta text-xs font-bold tracking-[0.3em] uppercase">
            Program
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-4">
          <h2
            id="program-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tightest text-brand-offwhite"
          >
            Five Days.
            <br />
            <span className="text-brand-magenta">Four Thematic Blocks.</span>
          </h2>
          <p className="text-brand-grey text-base max-w-xs text-right hidden md:block">
            Early to mid-August 2026 · Münster, Germany
          </p>
        </div>

        <p className="text-brand-grey text-base mb-4">
          Films, dialogues, performances. In-person and hybrid.
        </p>

        <div className="h-px bg-white/20 mb-16" />

        {/* Thematic blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`border border-white/10 p-8 flex flex-col gap-4 hover:${block.borderClass} transition-colors duration-300`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-bold uppercase tracking-widest px-3 py-1 ${block.bgClass} text-black shrink-0`}
                >
                  Block {block.id}
                </span>
              </div>
              <h3
                className={`text-xl md:text-2xl font-black uppercase tracking-tightest ${block.colorClass}`}
              >
                {block.title}
              </h3>
              <p className="text-brand-grey text-base leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center border-t border-white/20 pt-12 flex flex-col gap-4 items-center">
          <p className="text-brand-grey text-base">
            No competitive awards. All selected films are equally valued.
          </p>
          <p className="text-brand-grey text-base">
            Full programme announced June 2026.
          </p>
          <a
            href="#submit"
            className="inline-block border border-brand-magenta text-brand-magenta font-bold uppercase tracking-widest text-sm px-8 py-3 hover:bg-brand-magenta hover:text-black transition-all duration-200"
          >
            Submit Your Film
          </a>
        </div>
      </div>
    </section>
  );
}
