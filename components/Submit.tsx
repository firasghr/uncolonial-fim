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
              Your film
              <br />
              belongs{" "}
              <span className="text-brand-yellow">here.</span>
            </h2>

            <p className="text-brand-grey text-lg leading-relaxed">
              We accept short films by BiPoC filmmakers worldwide. No
              submission fee. No compromise on your vision.
            </p>

            <div className="h-px bg-white/20" />

            {/* Criteria */}
            <ul className="flex flex-col gap-4" role="list" aria-label="Submission criteria">
              {[
                {
                  label: "Who can submit",
                  value: "BiPoC filmmakers worldwide",
                  icon: "●",
                  color: "text-brand-magenta",
                },
                {
                  label: "Submission fee",
                  value: "Free — always",
                  icon: "●",
                  color: "text-brand-yellow",
                },
                {
                  label: "Format",
                  value: "Short films (under 30 minutes)",
                  icon: "●",
                  color: "text-brand-aqua",
                },
                {
                  label: "Deadline",
                  value: "Late April 2026",
                  icon: "●",
                  color: "text-brand-green",
                },
                {
                  label: "Platform",
                  value: "Via FilmFreeway",
                  icon: "●",
                  color: "text-brand-red",
                },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className={`${item.color} text-xs mt-1.5 shrink-0`} aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <span className="text-brand-grey text-xs uppercase tracking-widest block mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-brand-offwhite font-bold">
                      {item.value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA card */}
          <div className="flex flex-col justify-center">
            <div className="border border-brand-yellow/40 p-8 md:p-12 flex flex-col gap-6 bg-brand-yellow/5">
              <div>
                <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-2">
                  Submissions Now Open
                </p>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-brand-offwhite leading-tight">
                  Submit via FilmFreeway
                </h3>
              </div>

              <div className="h-px bg-white/20" />

              <p className="text-brand-grey text-base">
                Submissions are completely free. We believe financial barriers
                should never stand between a filmmaker and their audience.
              </p>

              <p className="text-brand-grey text-base">
                <span className="text-brand-yellow font-bold">Deadline:</span>{" "}
                Late April 2026
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
