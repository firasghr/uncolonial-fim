import Image from "next/image";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/uncolonialfilmfestival",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/uncolonialfilmfestival",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@uncolonialfilmfestival",
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black border-t border-white/10"
      role="contentinfo"
    >
      {/* Main footer content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="UN•COLONIAL FILM FESTIVAL"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <p className="text-brand-magenta font-black text-sm uppercase tracking-tightest leading-none">
                  UN•COLONIAL
                </p>
                <p className="text-brand-offwhite font-bold text-sm uppercase tracking-widest leading-none mt-0.5">
                  FILM FESTIVAL
                </p>
              </div>
            </div>
            <p className="text-brand-grey text-sm leading-relaxed">
              Five days of BiPoC-led cinema that refuses colonial frameworks.
              Space claimed, not borrowed.
            </p>
            <p className="text-brand-grey text-xs">Münster, Germany · August 2026</p>

            <address className="not-italic flex flex-col gap-1 text-sm text-brand-grey">
              <span className="text-brand-offwhite font-bold text-xs uppercase tracking-widest mb-1">Address</span>
              <span>Uncolonial Film Festival</span>
              <span>C/O BiPoC Referat</span>
              <span>AStA Universität Münster</span>
              <span>Schlossplatz 1 (Room 203)</span>
              <span>48149 Münster, Germany</span>
            </address>
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer navigation">
            <h3 className="text-brand-offwhite text-xs font-bold uppercase tracking-widest mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2" role="list">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Submit Film", href: "#submit" },
                { label: "Program", href: "#program" },
                { label: "Tickets", href: "#tickets" },
                { label: "Get Involved", href: "#get-involved" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-brand-grey text-sm hover:text-brand-magenta transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-brand-offwhite text-xs font-bold uppercase tracking-widest mb-4">
                Get in Touch
              </h3>
              <a
                href="mailto:uncolonialfilmfestival@gmail.com"
                className="text-brand-yellow text-sm hover:text-brand-magenta transition-colors duration-150 break-all"
              >
                uncolonialfilmfestival@gmail.com
              </a>
              <p className="text-brand-grey text-sm mt-2">
                <a href="tel:+492518322282" className="hover:text-brand-magenta transition-colors duration-150">
                  +49 251 83 22282
                </a>
              </p>
            </div>

            {/* Contact categories */}
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "For filmmakers",
                  desc: "submissions, eligibility, accessibility, language support.",
                },
                {
                  label: "For press",
                  desc: "interviews, access, coverage.",
                },
                {
                  label: "For donors",
                  desc: "We are significantly donation-funded. No state or corporate money. If you want to support what we are building, write to us.",
                },
              ].map((cat) => (
                <div key={cat.label}>
                  <p className="text-brand-offwhite text-xs font-bold uppercase tracking-widest mb-0.5">
                    {cat.label}
                  </p>
                  <p className="text-brand-grey text-xs leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-brand-offwhite text-xs font-bold uppercase tracking-widest mb-4">
                Follow Us
              </h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-grey hover:text-brand-magenta transition-colors duration-150"
                    aria-label={`Follow us on ${social.label} (opens in new tab)`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <div className="mt-2 flex flex-col gap-0.5 text-xs text-brand-grey/70">
                <span>@uncolonialfilmfestival</span>
              </div>
            </div>

            <div>
              <h3 className="text-brand-offwhite text-xs font-bold uppercase tracking-widest mb-4">
                Submit
              </h3>
              <a
                href="https://filmfreeway.com/UncolonialFilmFestival?utm_campaign=Uncolonial+Film+Festival&utm_medium=External&utm_source=Submission+Button"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-yellow text-black text-xs font-black uppercase tracking-widest px-4 py-2 hover:bg-brand-magenta hover:text-white transition-all duration-150"
                aria-label="Submit film on FilmFreeway (opens in new tab)"
              >
                FilmFreeway →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* Statement */}
        <div className="mb-8">
          <p className="text-brand-grey text-sm leading-relaxed max-w-2xl">
            We exist because cinema has long been shaped by colonial power. We refuse that structure.
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-brand-grey text-xs">
              Organised by{" "}
              <span className="text-brand-offwhite font-bold">
                BiPoC Referat, AStA Universität Münster
              </span>
            </p>
            <p className="text-brand-grey/60 text-xs">
              Funded entirely through donations — no state or corporate influence.
            </p>
          </div>
          <p className="text-brand-grey/50 text-xs shrink-0">
            © 2026 UN•COLONIAL FILM FESTIVAL
          </p>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-magenta via-brand-yellow to-brand-aqua" />
    </footer>
  );
}
