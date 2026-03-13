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
            About the Festival
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-8">
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tightest text-brand-offwhite"
            >
              We center short films by BiPoC filmmakers{" "}
              <span className="text-brand-magenta">confronting empire.</span>
            </h2>

            <div className="h-px bg-white/20" />

            <p className="text-brand-grey text-lg leading-relaxed">
              We refuse trauma as spectacle, NGO narratives, representation
              without power. We build infrastructure.
            </p>

            <p className="text-brand-grey text-base leading-relaxed">
              Five days: films, dialogues, performances. A space where BiPoC
              filmmakers and audiences come together to challenge the systems
              that limit our stories.
            </p>

            <div className="h-px bg-white/20" />

            {/* Key facts */}
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <dt className="text-brand-magenta text-xs font-bold tracking-widest uppercase mb-1">
                  Location
                </dt>
                <dd className="text-brand-offwhite font-bold text-lg">
                  Münster, Germany
                </dd>
              </div>
              <div>
                <dt className="text-brand-magenta text-xs font-bold tracking-widest uppercase mb-1">
                  Date
                </dt>
                <dd className="text-brand-offwhite font-bold text-lg">
                  August 2026
                </dd>
              </div>
              <div>
                <dt className="text-brand-magenta text-xs font-bold tracking-widest uppercase mb-1">
                  Admission
                </dt>
                <dd className="text-brand-offwhite font-bold text-lg">Free</dd>
              </div>
            </dl>

            <div className="h-px bg-white/20" />

            {/* Submissions info */}
            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-brand-yellow text-sm font-bold uppercase tracking-widest mb-2">
                Submissions Open
              </p>
              <p className="text-brand-grey text-base">
                Via FilmFreeway · No submission fee · Deadline: Late April 2026
              </p>
            </div>

            {/* Organiser badge */}
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-brand-magenta shrink-0" />
              <div>
                <p className="text-brand-grey text-xs uppercase tracking-widest mb-0.5">
                  Organised by
                </p>
                <p className="text-brand-offwhite font-bold">
                  BiPoC Referat, AStA Universität Münster
                </p>
                <p className="text-brand-grey text-sm mt-0.5">
                  Funded entirely through donations — no state or corporate
                  influence.
                </p>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/images/about-img.jpg"
                alt="Festival community gathering"
                fill
                className="object-cover object-center"
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
