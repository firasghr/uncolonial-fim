import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-20 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-magenta text-xs font-bold tracking-[0.3em] uppercase">
            About
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div className="flex flex-col gap-8">
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tightest text-brand-offwhite"
            >
              Uncolonial is a position,{" "}
              <span className="text-brand-magenta">not a theme.</span>
            </h2>

            <div className="h-px bg-white/20" />

            <p className="text-brand-grey text-lg leading-relaxed">
              The colonial gaze still controls cinema — which stories get funded, whose aesthetics count as &ldquo;world cinema,&rdquo; who enters the archive. We refuse that structure.
            </p>

            <p className="text-brand-grey text-base leading-relaxed">
              We refuse imperial narratives. Extractive storytelling. Institutional gatekeeping. The demand that we make ourselves digestible. Representation without redistribution of power.
            </p>

            <div className="h-px bg-white/20" />

            {/* Why Münster */}
            <div>
              <h3 className="text-brand-yellow text-sm font-bold uppercase tracking-widest mb-3">
                Why Münster
              </h3>
              <p className="text-brand-grey text-base leading-relaxed">
                Münster is not an innocent backdrop. The city is entangled with German colonial projects that asserted cultural and political supremacy in Africa, Asia and elsewhere, and those histories still shape its streets, institutions and memory. We are claiming space here — not somewhere else, not in more comfortable language.
              </p>
            </div>

            <div className="h-px bg-white/20" />

            {/* Who we are */}
            <div>
              <h3 className="text-brand-yellow text-sm font-bold uppercase tracking-widest mb-3">
                Who we are
              </h3>
              <p className="text-brand-grey text-base leading-relaxed">
                The BiPoC Referat is the autonomous Black, Indigenous, and People of Color student department at the University of Münster. We run on voluntary labour and limited resources. We are building anyway because we cannot wait for permission.
              </p>
            </div>

            <div className="h-px bg-white/20" />

            {/* Our commitments */}
            <div>
              <h3 className="text-brand-yellow text-sm font-bold uppercase tracking-widest mb-4">
                Our commitments
              </h3>
              <ul className="flex flex-col gap-2" role="list">
                {[
                  "Transparency.",
                  "Accessibility: translation, captioning, and childcare built in from the start.",
                  "Collective process: selection is collaborative, not hierarchical.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-magenta text-xs mt-1.5 shrink-0" aria-hidden="true">●</span>
                    <span className="text-brand-grey text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/un-colonial-logo-black-1.png"
                alt="UN•COLONIAL logo in black"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Magenta border accent */}
              <div className="absolute inset-0 ring-1 ring-brand-magenta/30" />
            </div>
            {/* Offset accent block */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-brand-magenta/40 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
