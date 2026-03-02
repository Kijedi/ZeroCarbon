import {
  GlobeAltIcon,
  ShieldExclamationIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

const problems = [
  {
    title: "No Market Access",
    description: "Farmers sequester carbon but have no way to monetize it.",
    icon: GlobeAltIcon,
  },
  {
    title: "Exploitative Middlemen",
    description: "No standardized contracts or fair pricing protections.",
    icon: ShieldExclamationIcon,
  },
  {
    title: "No Verification",
    description: "Buyers lack confidence without real-time tracking data.",
    icon: EyeSlashIcon,
  },
];

export default function Problem() {
  return (
    <section className="px-5 lg:px-20 xl:px-28 py-20 lg:py-32 bg-gray-50">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          The Problem
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          A $50 Billion Market — With Africa Left Out
        </h2>
        <p className="mt-6 text-lg text-gray-600 font-light leading-relaxed">
          The voluntary carbon market is projected to grow 5–50x by 2030. Yet
          Africa, home to 60% of the world&apos;s arable land and millions of
          farmers already practicing sustainable agriculture, captures less than
          2% of global carbon credit revenue. The reason? No infrastructure
          connects these farmers to the market.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
              <problem.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {problem.title}
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
