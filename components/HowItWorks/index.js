const steps = [
  {
    number: "01",
    title: "REGISTER",
    description: "Farmer signs up and land is GPS-geotagged.",
  },
  {
    number: "02",
    title: "MEASURE",
    description: "Carbon sequestration is tracked via satellite and field data.",
  },
  {
    number: "03",
    title: "VERIFY",
    description: "Credits are validated using research-backed methodology.",
  },
  {
    number: "04",
    title: "TRADE",
    description: "Verified credits go to market; farmer gets paid transparently.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-5 lg:px-20 xl:px-28 py-20 lg:py-32 bg-gray-900 text-white"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-buttercup uppercase tracking-widest">
          How It Works
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          From Farm to Credit in Four Steps
        </h2>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Connector line on desktop */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-full w-full h-[1px] bg-gradient-to-r from-buttercup/60 to-transparent z-0" />
            )}
            <div className="relative z-10">
              <span className="text-5xl lg:text-6xl font-bold text-buttercup/20">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-bold tracking-wide text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-white/60 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
