import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Festival screening" },
  { src: "/images/gallery-2.jpg", alt: "Audience at Q&A" },
  { src: "/images/gallery-3.jpg", alt: "Film still" },
  { src: "/images/gallery-4.jpg", alt: "Community gathering" },
  { src: "/images/film-1.jpg", alt: "Film programme" },
  { src: "/images/film-2.jpg", alt: "Festival atmosphere" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-black py-20 md:py-32 border-t border-white/10"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-magenta text-xs font-bold tracking-[0.3em] uppercase">
            Gallery
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <h2
          id="gallery-heading"
          className="sr-only"
        >
          Festival Gallery
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-magenta/0 group-hover:bg-brand-magenta/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
