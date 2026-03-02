import {
  MapPinIcon,
  SignalIcon,
  BanknotesIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

const pillars = [
  {
    title: "Register & Geotag",
    description:
      "Every farmer gets a digital identity linked to GPS-verified land coordinates.",
    icon: MapPinIcon,
  },
  {
    title: "Track & Verify",
    description:
      "Real-time monitoring of sequestration activities using satellite and field data.",
    icon: SignalIcon,
  },
  {
    title: "Protect & Pay",
    description:
      "Standardized contracts ensure fair pricing and transparent earnings for every farmer.",
    icon: BanknotesIcon,
  },
  {
    title: "Trade & Scale",
    description:
      "Verified credits are listed for global buyers, creating a liquid marketplace.",
    icon: ArrowsRightLeftIcon,
  },
];

export default function Solution() {
  return (
    <section className="px-5 lg:px-20 xl:px-28 py-20 lg:py-32">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          The Solution
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          The Platform That Bridges the Gap
        </h2>
        <p className="mt-6 text-lg text-gray-600 font-light leading-relaxed">
          ZeroCarbon is a digital infrastructure layer that registers, verifies,
          and compensates smallholder farmers for their carbon sequestration —
          while giving global buyers verified, high-integrity carbon credits
          they can trust.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="group flex gap-6 items-start bg-gray-50 rounded-2xl p-8 hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <pillar.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
