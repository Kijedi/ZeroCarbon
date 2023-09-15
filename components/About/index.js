import Image from "next/image";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <div className="flex space-x-20 justify-center lg:py-44 bg-slate-100 lg:px-40 px-10 py-10">
      <div className="w-1/4">
        <div className="w-full relative h-96">
          <Image src={"/images/bg2.jpg"} fill className="rounded-t-[90px] object-cover shadow-2xl rounded-bl-[90px]" />
        </div>
      </div>
      <div className="w-1/2 space-y-6 py-10">
        <h1 className="text-5xl font-black text-gray-400">
          About <span className="text-green-600">Zero Carbon</span>
        </h1>
        <p className="text-xl text-gray-600 font-medium text-justify">
          ZeroCarbon is a comprehensive platform that enables smallholder
          farmers in developing countries to participate in the carbon trading
          market and benefit from their sustainable practices. ZeroCarbon
          addresses these challenges and unlocks this potential by providing a
          registration and geotagging system, real-time tracking and transparent
          share earnings, fair compensation and standardized contracts,
          data-driven insights and transparency for buyers and investors, and
          contributions to global climate change mitigation efforts.
        </p>
        <button className="ring-green-700 ring-1 rounded-full px-4 py-2">
          Read more
        </button>
      </div>
    </div>
  );
}
