import Image from "next/image";
import Navbar from "../components/Navigation";
import Header from "../components/Header";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import HowItWorks from "../components/HowItWorks";
import Traction from "../components/Traction";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { team } from "../components/Data/team";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Problem />
      <Solution />
      <HowItWorks />
      <Traction />

      {/* The Team */}
      <section className="px-5 lg:px-20 xl:px-28 py-20 lg:py-32 bg-gray-50">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">
            The Team
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Built by People Who Understand the Problem
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="aspect-3/4 relative">
                <Image
                  fill
                  src={member.image}
                  alt={member.name}
                  className="object-cover object-center grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all ease-in-out duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-semibold text-white">
                  {member.name}
                </p>
                <p className="text-sm text-buttercup font-medium mt-1">
                  {member.position}
                </p>
                <p className="text-xs text-white/70 font-light mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
