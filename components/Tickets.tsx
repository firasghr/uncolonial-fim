export default function Tickets() {
  const tiers = [
    {
      label: "Solidarity rate",
      note: "students, low income",
      price: "15 EUR",
      color: "text-brand-aqua",
      border: "border-brand-aqua/40",
    },
    {
      label: "Standard rate",
      note: "",
      price: "25 EUR",
      color: "text-brand-yellow",
      border: "border-brand-yellow/40",
    },
    {
      label: "Supporter rate",
      note: "",
      price: "30+ EUR",
      color: "text-brand-magenta",
      border: "border-brand-magenta/40",
    },
  ];

  return (
    <section
      id="tickets"
      className="bg-black py-20 md:py-32 border-t border-white/10"
      aria-labelledby="tickets-heading"
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-brand-magenta text-xs font-bold tracking-[0.3em] uppercase">
            Tickets
          </span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <h2
              id="tickets-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tightest text-brand-offwhite"
            >
              Five Days{" "}
              <span className="text-brand-magenta">in August 2026</span>
            </h2>

            <p className="text-brand-grey text-lg leading-relaxed">
              Exact dates and full schedule will be announced in June 2026 after film selections are finalized.
            </p>

            <div className="h-px bg-white/20" />

            {/* Festival pass */}
            <div>
              <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-4">
                Festival Pass (all 5 days)
              </p>
              <div className="flex flex-col gap-4">
                {tiers.map((tier) => (
                  <div
                    key={tier.label}
                    className={`border ${tier.border} p-4 flex items-center justify-between`}
                  >
                    <div>
                      <span className="text-brand-offwhite font-bold text-base">{tier.label}</span>
                      {tier.note && (
                        <span className="text-brand-grey text-sm ml-2">({tier.note})</span>
                      )}
                    </div>
                    <span className={`font-black text-xl ${tier.color}`}>{tier.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-brand-grey text-base">
              Choose what you can afford. No one turned away for lack of funds.
            </p>
          </div>

          {/* Right: CTA */}
          <div className="flex flex-col justify-start">
            <div className="border border-white/20 p-8 md:p-12 flex flex-col gap-6">
              <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest">
                Tickets Available From
              </p>
              <h3 className="text-3xl md:text-4xl font-black uppercase text-brand-offwhite leading-tight">
                May 01, 2026
              </h3>
              <div className="h-px bg-white/20" />
              <p className="text-brand-grey text-base leading-relaxed">
                TICKETS WILL BE AVAILABLE FROM MAY 01, 2026.
              </p>
              <div className="bg-white/5 border border-white/10 p-4">
                <p className="text-brand-grey text-sm">
                  Sign up for updates via our social channels to be notified when tickets are released.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-block border border-brand-yellow text-brand-yellow font-black uppercase tracking-widest text-sm px-8 py-4 text-center hover:bg-brand-yellow hover:text-black transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                STAY UPDATED →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
