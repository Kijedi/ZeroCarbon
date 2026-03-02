import Navbar from "../../components/Navigation";
import Traction from "../../components/Traction";
import Footer from "../../components/Footer";
import Image from "next/image";
import { team } from "../../components/Data/team";

export const metadata = {
  title: "For Investors — ZeroCarbon Africa",
  description:
    "Invest in Africa's carbon market infrastructure. $50B+ market opportunity, real-time verification technology, and a growing farmer network.",
  openGraph: {
    title: "Invest in ZeroCarbon Africa — Africa's Carbon Market Infrastructure",
    description:
      "The voluntary carbon market is projected to grow 5–50x by 2030. Africa captures less than 2%. ZeroCarbon is building the infrastructure to change that.",
    url: "https://zerocarbon.africa/investors",
    type: "website",
  },
};

const stats = [
  {
    value: "$2B+",
    label: "Current voluntary carbon market value, growing 5–50x by 2030",
  },
  {
    value: "300M",
    label: "Annual carbon credits targeted by ACMI for Africa by 2030",
  },
  {
    value: "$6B",
    label: "Revenue target for African communities through carbon markets",
  },
];

export default function InvestorsPage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="px-5 lg:px-20 xl:px-28 pt-24 pb-20 lg:pt-36 lg:pb-28">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          For Investors
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
          Why Now. Why Africa.{" "}
          <span className="text-primary">Why ZeroCarbon.</span>
        </h1>
        <p className="mt-8 text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
          The Africa Carbon Markets Initiative (ACMI), launched at COP27, has
          set a target to produce 300 million carbon credits annually by 2030
          and channel $6 billion in revenue to local communities. ZeroCarbon is
          building the infrastructure to make this possible — starting with the
          farmers who make it real.
        </p>
      </section>

      {/* Stats */}
      <section className="px-5 lg:px-20 xl:px-28 py-16 lg:py-24 bg-gray-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-5xl lg:text-6xl font-bold text-buttercup">
                {stat.value}
              </p>
              <p className="mt-4 text-white/60 font-light leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why ZeroCarbon */}
      <section className="px-5 lg:px-20 xl:px-28 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            Competitive Edge
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            What Sets ZeroCarbon Apart
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Real-Time Verification
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              GPS geotagging and satellite monitoring provide buyers with
              verifiable, high-integrity carbon credits — not estimates.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Farmer-First Contracts
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Standardized contracts protect farmers from exploitation,
              ensuring fair pricing and transparent earnings — unlike
              intermediary-heavy models.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              End-to-End Platform
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              From farmer registration to credit trading — one integrated
              platform vs. the fragmented, project-based approaches that
              dominate today.
            </p>
          </div>
        </div>
      </section>

      {/* Traction */}
      <div className="bg-gray-50">
        <Traction />
      </div>

      {/* Team */}
      <section className="px-5 lg:px-20 xl:px-28 py-20 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            The Team
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Built by People Who Understand the Problem
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                <Image
                  fill
                  src={member.image}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{member.name}</p>
                <p className="text-sm text-primary font-medium">
                  {member.position}
                </p>
                <p className="text-xs text-gray-500 font-light mt-1 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investor CTA */}
      <section className="mx-3 lg:mx-10 mb-10 rounded-3xl bg-primary text-white px-5 py-16 lg:px-20 lg:py-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
          Interested in Backing Africa&apos;s Carbon Infrastructure?
        </h2>
        <p className="mt-6 text-lg text-white/70 font-light leading-relaxed max-w-xl">
          We&apos;re looking for partners who share our vision of a fair,
          transparent carbon market that works for African farmers and global
          buyers alike.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:jammutsami@gmail.com?subject=ZeroCarbon%20Investment%20Inquiry"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Schedule an Investor Call
          </a>
          <a
            href="mailto:jammutsami@gmail.com"
            className="rounded-full bg-white/10 border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors duration-200"
          >
            Request Pitch Deck
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
