import { CheckCircleIcon, ArrowPathIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const milestones = [
  {
    status: "completed",
    label: "MVP platform built and deployed at zerocarbon.africa",
  },
  {
    status: "completed",
    label: "Farmer registration and GPS geotagging system operational",
  },
  {
    status: "completed",
    label: "Research-backed carbon measurement methodology developed",
  },
  {
    status: "in_progress",
    label: "Pilot program with smallholder farmer cooperatives",
  },
  {
    status: "next",
    label: "Scale to 5,000+ farmers across 3 regions in Year 1",
  },
  {
    status: "next",
    label: "Generate first batch of verified carbon credits for market",
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircleIcon,
    color: "text-primary",
    bg: "bg-primary/10",
    line: "bg-primary",
    badge: "Completed",
    badgeColor: "bg-primary/10 text-primary",
  },
  in_progress: {
    icon: ArrowPathIcon,
    color: "text-buttercup",
    bg: "bg-buttercup/10",
    line: "bg-buttercup",
    badge: "In Progress",
    badgeColor: "bg-buttercup/10 text-buttercup",
  },
  next: {
    icon: ArrowRightCircleIcon,
    color: "text-gray-400",
    bg: "bg-gray-100",
    line: "bg-gray-200",
    badge: "Next",
    badgeColor: "bg-gray-100 text-gray-500",
  },
};

export default function Traction() {
  return (
    <section className="px-5 lg:px-20 xl:px-28 py-20 lg:py-32">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          Traction & Milestones
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Built, Live, and Growing
        </h2>
        <p className="mt-6 text-lg text-gray-600 font-light leading-relaxed">
          ZeroCarbon isn&apos;t a concept — it&apos;s a working platform.
          Here&apos;s what we&apos;ve achieved so far:
        </p>
      </div>

      <div className="mt-14 max-w-2xl">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const config = statusConfig[milestone.status];
              const Icon = config.icon;
              return (
                <div key={index} className="relative flex items-start gap-6">
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full ${config.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <Icon className={`w-5 h-5 ${config.color}`} />
                  </div>
                  <div className="flex-1 pt-1.5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${config.badgeColor}`}
                      >
                        {config.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-700 font-light leading-relaxed">
                      {milestone.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
