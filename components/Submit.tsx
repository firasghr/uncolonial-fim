export default function Submit() {
  return (
    <section
      id="submit"
      className="bg-black py-20 md:py-32 border-t border-white/10"
      aria-labelledby="submit-heading"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-yellow text-xs font-bold tracking-[0.3em] uppercase">
            Submit Your Film
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: headline + description */}
          <div className="flex flex-col gap-8">
            <h2
              id="submit-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tightest text-brand-offwhite"
            >
              Submit your film
            </h2>

            <div className="h-px bg-white/20" />

            {/* Who can submit */}
            <div>
              <h3 className="text-brand-magenta text-sm font-bold uppercase tracking-widest mb-3">
                Who can submit
              </h3>
              <p className="text-brand-grey text-base leading-relaxed">
                BiPoC filmmakers only. Short films, maximum 30 minutes, completed after 2020. Any form — documentary, experimental, essay, animation, hybrid. All premiere statuses welcome. Any language.
              </p>
              <p className="text-brand-grey text-base leading-relaxed mt-3">
                We especially encourage work from the global majority, occupied territories and communities under siege, self-taught and community-based makers, and emerging filmmakers.
              </p>
            </div>

            <div className="h-px bg-white/20" />

            {/* Selection */}
            <div>
              <h3 className="text-brand-magenta text-sm font-bold uppercase tracking-widest mb-3">
                Selection
              </h3>
              <p className="text-brand-grey text-base leading-relaxed">
                A committee of BiPoC filmmakers and cultural practitioners selects films collectively. No hierarchy. Filmmakers notified by early May 2026.
              </p>
            </div>

            <div className="h-px bg-white/20" />

            {/* What selected filmmakers receive */}
            <div>
              <h3 className="text-brand-magenta text-sm font-bold uppercase tracking-widest mb-3">
                What selected filmmakers receive
              </h3>
              <ul className="flex flex-col gap-2" role="list">
                {[
                  "Official Selection laurels",
                  "Public screening and Q&A platform",
                  "Recognition in festival materials",
                  "Connection to a growing network building uncolonial infrastructure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-yellow text-xs mt-1.5 shrink-0" aria-hidden="true">●</span>
                    <span className="text-brand-grey text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-brand-grey text-sm leading-relaxed mt-4 border-l-2 border-white/20 pl-4">
                We cannot pay screening fees. We will not dress that up. What we offer is dignified presentation, serious engagement with your work, and programming alongside films that share your commitments.
              </p>
              <p className="text-brand-grey text-sm mt-3">
                You retain all rights to your work.
              </p>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="flex flex-col justify-start">
            <div className="border border-brand-yellow/40 p-8 md:p-12 flex flex-col gap-6 bg-brand-yellow/5">
              <div>
                <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-2">
                  Submissions Now Open
                </p>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-brand-offwhite leading-tight">
                  SUBMIT ON FILMFREEWAY
                </h3>
              </div>

              <div className="h-px bg-white/20" />

              <p className="text-brand-grey text-base">
                No submission fee. Deadline: Late April 2026.
              </p>

              <a
                href="https://filmfreeway.com/UncolonialFilmFestival?utm_campaign=Uncolonial+Film+Festival&utm_medium=External&utm_source=Submission+Button"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-yellow text-black font-black uppercase tracking-widest text-sm px-8 py-4 text-center hover:bg-brand-magenta hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                aria-label="Submit your film via FilmFreeway (opens in new tab)"
              >
                SUBMIT ON FILMFREEWAY →
              </a>

              <p className="text-brand-grey/50 text-xs">
                By submitting, you confirm you are a BiPoC filmmaker and the
                film is under 30 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
