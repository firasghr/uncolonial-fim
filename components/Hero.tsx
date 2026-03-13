import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      aria-label="Festival hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Festival background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center gap-6 md:gap-8">
        {/* Date badge */}
        <p className="text-brand-magenta text-xs md:text-sm font-bold tracking-[0.3em] uppercase border border-brand-magenta/50 px-4 py-1.5">
          August 2026 · Münster, Germany
        </p>

        {/* Main title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-none tracking-tightest text-brand-offwhite">
          <span className="text-brand-magenta">UN•</span>COLONIAL
          <br />
          <span className="text-brand-offwhite">FILM FESTIVAL</span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-xl lg:text-2xl text-brand-grey font-light max-w-2xl leading-relaxed">
          Five days of BiPoC-led cinema that refuses colonial frameworks.
          <br className="hidden md:block" />
          {" "}Münster, Germany.
        </p>

        {/* Statement */}
        <p className="text-brand-yellow text-lg md:text-2xl font-bold italic tracking-wide">
          &ldquo;Space claimed, not borrowed.&rdquo;
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a
            href="#submit"
            className="bg-brand-yellow text-black font-black text-sm md:text-base uppercase tracking-widest px-8 py-4 hover:bg-brand-magenta hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
          >
            SUBMIT YOUR FILM
          </a>
          <a
            href="#about"
            className="border border-white text-white font-bold text-sm md:text-base uppercase tracking-widest px-8 py-4 hover:border-brand-magenta hover:text-brand-magenta transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs uppercase tracking-widest text-brand-grey">Scroll</span>
        <div className="w-px h-8 bg-brand-grey animate-pulse" />
      </div>
    </section>
  );
}
