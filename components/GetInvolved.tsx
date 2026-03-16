export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="bg-black py-20 md:py-32 border-t border-white/10"
      aria-labelledby="get-involved-heading"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-magenta text-xs font-bold tracking-[0.3em] uppercase">
            Get Involved
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <h2
          id="get-involved-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tightest text-brand-offwhite mb-6"
        >
          This festival exists because{" "}
          <span className="text-brand-magenta">people show up.</span>
        </h2>

        <p className="text-brand-grey text-lg leading-relaxed mb-16 max-w-2xl">
          We run on voluntary labour and donations. No state funding. No corporate support. What we have is each other and the work.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Volunteer */}
          <div className="flex flex-col gap-6 border border-white/10 p-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-brand-magenta shrink-0" />
              <h3 className="text-brand-magenta text-xl font-black uppercase tracking-widest">
                Volunteer
              </h3>
            </div>

            <p className="text-brand-grey text-base leading-relaxed">
              We are looking for people who want to build this with us — not just attend it. Volunteers are part of the festival&rsquo;s infrastructure.
            </p>

            <div>
              <p className="text-brand-offwhite text-sm font-bold uppercase tracking-widest mb-3">
                We need people for:
              </p>
              <ul className="flex flex-col gap-2" role="list">
                {[
                  "Event logistics — setting up, running the day, keeping things moving",
                  "Venue and technical setup — equipment, screening, sound",
                  "Welcoming and hosting guests — receiving filmmakers, speakers, and audiences",
                  "Subtitling and translation — making the programme accessible across languages",
                  "Social media and communications — documenting and sharing what we build",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-magenta text-xs mt-1.5 shrink-0" aria-hidden="true">—</span>
                    <span className="text-brand-grey text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-brand-grey text-sm leading-relaxed">
              You bring your capacity, we build together. There is no hierarchy between volunteers and organisers.
            </p>
            <p className="text-brand-grey text-sm leading-relaxed">
              If you need to document your contribution for university credit or internship requirements, we are happy to provide confirmation of your work. Write to us and we will find a way.
            </p>

            <div className="h-px bg-white/20" />

            <div>
              <p className="text-brand-offwhite text-sm font-bold uppercase tracking-widest mb-2">
                Who can volunteer
              </p>
              <p className="text-brand-grey text-sm leading-relaxed">
                BiPoC people are prioritised. Allies who are genuinely committed to anticolonial politics and can follow BiPoC leadership are also welcome.
              </p>
            </div>

            <div className="h-px bg-white/20" />

            <div>
              <p className="text-brand-grey text-sm mb-1">Interested? Write to us:</p>
              <a
                href="mailto:uncolonialfilmfestival@gmail.com"
                className="text-brand-yellow text-sm font-bold hover:text-brand-magenta transition-colors duration-150"
              >
                uncolonialfilmfestival@gmail.com
              </a>
              <p className="text-brand-grey/60 text-xs mt-1">
                Subject line: Volunteer — Uncolonial Film Festival
              </p>
            </div>
          </div>

          {/* Donate */}
          <div className="flex flex-col gap-6 border border-white/10 p-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-brand-yellow shrink-0" />
              <h3 className="text-brand-yellow text-xl font-black uppercase tracking-widest">
                Donate
              </h3>
            </div>

            <p className="text-brand-grey text-base leading-relaxed">
              We are transparent about money because transparency is a political commitment.
            </p>

            <div>
              <p className="text-brand-offwhite text-sm font-bold uppercase tracking-widest mb-3">
                Everything we collect goes directly toward:
              </p>
              <ul className="flex flex-col gap-2" role="list">
                {[
                  "Solidarity contributions to artists and guests",
                  "Accessibility — translation, captioning, childcare",
                  "Technical and venue costs",
                  "Building infrastructure that outlasts this edition",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-yellow text-xs mt-1.5 shrink-0" aria-hidden="true">—</span>
                    <span className="text-brand-grey text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-brand-grey text-sm leading-relaxed">
              We will publish a full financial report after the festival. You will be able to see exactly where every euro went.
            </p>

            <div className="h-px bg-white/20" />

            <div className="flex flex-col gap-4">
              <p className="text-brand-offwhite text-sm font-bold uppercase tracking-widest">
                How to donate
              </p>

              <a
                href="https://paypal.me/MHossain95"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-yellow text-black font-black uppercase tracking-widest text-sm px-6 py-3 text-center hover:bg-brand-magenta hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                Send via PayPal →
              </a>

              <div className="bg-white/5 border border-white/10 p-4">
                <p className="text-brand-grey text-sm mb-1">For bank transfer, write to:</p>
                <a
                  href="mailto:asta.bipoc@uni-muenster.de"
                  className="text-brand-yellow text-sm font-bold hover:text-brand-magenta transition-colors duration-150"
                >
                  asta.bipoc@uni-muenster.de
                </a>
                <p className="text-brand-grey/60 text-xs mt-1">
                  Subject line: Donation — Uncolonial Film Festival
                </p>
              </div>
            </div>

            <p className="text-brand-grey text-sm leading-relaxed border-l-2 border-white/20 pl-4">
              No amount is too small. No donation buys influence over what we programme or how we work. That is not a courtesy — it is a condition.
            </p>

            <p className="text-brand-grey text-sm leading-relaxed">
              Space claimed, not borrowed. But claiming space costs something. Thank you for helping us pay for it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
