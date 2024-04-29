import Image from "next/image";
import { useRouter } from "next/router";
import { ProjectCard } from "./card";

export default function Projects() {
  const router = useRouter();
  return (
    <div className="p-10 lg:px-48 lg:pb-28">
      <p className="font-medium text-gray-700 text-base">Our Projects</p>
      <p className="font-medium text-black text-3xl lg:text-5xl lg:w-1/2 py-8">
        Growing a Greener Future
      </p>
      <p className="font-light lg:w-3/4 lg:text-lg text-gray-500 -tracking-tighter">
        See the Impact in Action: Our commitment to empowering farmers and
        protecting the planet translates into real-world projects. Explore some
        of our current initiatives making a difference on the ground.
      </p>
      <div className="grid lg:grid-cols-3 gap-4 lg:gap-12">
        <ProjectCard />
        {/* <ProjectCard />
        <ProjectCard /> */}
      </div>
    </div>
  );

  // return (
  //   <div className="flex space-x-20 justify-center lg:py-44 bg-slate-100 lg:px-40 px-10 py-10">
  //     <div className="w-1/4">
  //       <div className="w-full relative h-96">
  //         <Image src={"/images/bg2.jpg"} fill className="rounded-t-[90px] object-cover shadow-2xl rounded-bl-[90px]" />
  //       </div>
  //     </div>
  //     <div className="w-1/2 space-y-6 py-10">
  //       <h1 className="text-5xl font-black text-gray-400">
  //         About <span className="text-green-600">Zero Carbon</span>
  //       </h1>
  //       <p className="text-xl text-gray-600 font-medium text-justify">
  //         ZeroCarbon is a comprehensive platform that enables smallholder
  //         farmers in developing countries to participate in the carbon trading
  //         market and benefit from their sustainable practices. ZeroCarbon
  //         addresses these challenges and unlocks this potential by providing a
  //         registration and geotagging system, real-time tracking and transparent
  //         share earnings, fair compensation and standardized contracts,
  //         data-driven insights and transparency for buyers and investors, and
  //         contributions to global climate change mitigation efforts.
  //       </p>
  //       <button className="ring-green-700 ring-1 rounded-full px-4 py-2">
  //         Read more
  //       </button>
  //     </div>
  //   </div>
  // )
}
