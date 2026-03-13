import Image from "next/image";

const tracks = [
  {
    id: 1,
    title: "Confronting Empire",
    color: "magenta" as const,
    colorClass: "text-brand-magenta",
    borderClass: "border-brand-magenta",
    bgClass: "bg-brand-magenta",
    description:
      "Short films that challenge colonial structures, expose neo-colonial power, and imagine alternative futures beyond imperial logic.",
    films: [
      {
        title: "Borders of Memory",
        director: "Amara Diallo",
        country: "Senegal / Germany",
        year: 2025,
        duration: "18 min",
        image: "/images/film-1.jpg",
      },
      {
        title: "The Weight of Flags",
        director: "Selin Çelik",
        country: "Turkey / Netherlands",
        year: 2025,
        duration: "22 min",
        image: "/images/film-2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Reclaiming Narratives",
    color: "yellow" as const,
    colorClass: "text-brand-yellow",
    borderClass: "border-brand-yellow",
    bgClass: "bg-brand-yellow",
    description:
      "Community stories and lived experiences told on their own terms — centring joy, resistance, and collective memory.",
    films: [
      {
        title: "My Grandmother's Language",
        director: "Priya Venkatesh",
        country: "India / UK",
        year: 2025,
        duration: "14 min",
        image: "/images/film-3.jpg",
      },
      {
        title: "Salt and Soil",
        director: "Kwame Asante",
        country: "Ghana / Canada",
        year: 2025,
        duration: "26 min",
        image: "/images/film-4.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Building Futures",
    color: "aqua" as const,
    colorClass: "text-brand-aqua",
    borderClass: "border-brand-aqua",
    bgClass: "bg-brand-aqua",
    description:
      "Speculative, hopeful, and visionary films imagining life beyond colonial frameworks — new worlds, new kinships, new possibilities.",
    films: [
      {
        title: "After the Archive",
        director: "Leila Mostafa",
        country: "Egypt / France",
        year: 2025,
        duration: "20 min",
        image: "/images/gallery-1.jpg",
      },
      {
        title: "What We Plant",
        director: "Jun Tanaka",
        country: "Japan / Brazil",
        year: 2025,
        duration: "17 min",
        image: "/images/gallery-2.jpg",
      },
    ],
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

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <h2
            id="program-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tightest text-brand-offwhite"
          >
            Five Days,
            <br />
            <span className="text-brand-magenta">Three Tracks.</span>
          </h2>
          <p className="text-brand-grey text-base max-w-xs text-right hidden md:block">
            August 2026 · Münster, Germany
          </p>
        </div>

        {/* Tracks */}
        <div className="flex flex-col gap-20">
          {tracks.map((track) => (
            <div key={track.id}>
              {/* Track header */}
              <div className="flex items-center gap-4 mb-8">
                <span
                  className={`text-xs font-bold tracking-widest uppercase px-3 py-1 ${track.bgClass} text-black`}
                >
                  Track {track.id}
                </span>
                <h3
                  className={`text-2xl md:text-3xl font-black uppercase tracking-tightest ${track.colorClass}`}
                >
                  {track.title}
                </h3>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <p className="text-brand-grey text-base mb-8 max-w-2xl">
                {track.description}
              </p>

              {/* Film cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {track.films.map((film) => (
                  <article
                    key={film.title}
                    className={`group relative overflow-hidden border border-white/10 hover:${track.borderClass} transition-all duration-300 cursor-pointer`}
                  >
                    {/* Film image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={film.image}
                        alt={`Still from ${film.title} by ${film.director}`}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                      {/* Track badge */}
                      <span
                        className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-2 py-1 ${track.bgClass} text-black`}
                      >
                        {track.title}
                      </span>
                    </div>

                    {/* Film info */}
                    <div className="p-4 bg-black/80">
                      <h4 className="text-brand-offwhite font-bold text-lg leading-tight mb-1">
                        {film.title}
                      </h4>
                      <p className="text-brand-grey text-sm mb-2">
                        Dir. {film.director}
                      </p>
                      <div className="flex items-center justify-between text-xs text-brand-grey/70">
                        <span>{film.country}</span>
                        <span>
                          {film.year} · {film.duration}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full program note */}
        <div className="mt-16 text-center border-t border-white/20 pt-12">
          <p className="text-brand-grey text-base mb-4">
            Full program announced Spring 2026.
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
