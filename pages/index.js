import Image from "next/image";
import Navbar from "../components/Navigation";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { team } from "../components/Data/team";

export default function About() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Projects />
      <div className="p-5 lg:px-48 lg:pb-28">
        <p className="font-medium text-gray-700 text-base">About Us</p>
        <p className="font-medium text-black text-5xl py-8">
          Traceable, transparent, transformative
        </p>
        <p className="font-light text-lg text-gray-500 -tracking-tighter">
          We aim to unlock the potential of carbon trading markets in developing
          countries by creating a platform that empowers smallholder farmers by
          registering and tracking their contributions to carbon sequestration
          and decarbonization efforts, while ensuring fair compensation and
          transparent share earnings. This platform helps farmers participate in
          the carbon trading market and contributes to global climate change
          mitigation efforts.
        </p>
        <p className="font-normal tracking-wide leading-relaxed text-sm pt-10 text-gray-800">
          We bridge the gap between smallholder farmers and the global carbon
          market. We believe farmers deserve fair compensation for their role in
          combating climate change. Our innovative platform empowers them to
          participate in carbon trading with transparency and security.
        </p>
        <div className="flex gap-5 flex-wrap justify-between">
          <div className="flex gap-8 mt-10 w-1/3">
            <div className="flex flex-col gap-y-2">
              <div className="bg-black h-5 w-[1px] "></div>
              <div className="bg-gray-300 h-10 w-[1px]"></div>
            </div>
            <div>
              <p className="text-3xl font-medium">350</p>
              <p className="text-lg pt-2 font-thin text-gray-700">
                Smallholders Farmers Onboarded
              </p>
            </div>
          </div>
          <div className="flex gap-8 mt-10 w-1/3">
            <div className="flex flex-col gap-y-2">
              <div className="bg-black h-5 w-[1px] "></div>
              <div className="bg-gray-300 h-10 w-[1px]"></div>
            </div>
            <div>
              <p className="text-3xl font-medium">
                0.8 MtCO<sub>2</sub>e
              </p>
              <p className="text-lg pt-2 font-thin text-gray-700">
                Carbon Offseted
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-8 mt-10 w-1/3">
            <div className="flex flex-col gap-y-2">
              <div className="bg-black h-5 w-[1px] "></div>
              <div className="bg-gray-300 h-10 w-[1px]"></div>
            </div>
            <div>
              <p className="text-3xl font-medium">$0.1M</p>
              <p className="text-lg pt-2 font-thin text-gray-700">
                Farmers paid
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Start of Our Culture */}
      <div className="rounded-[60px] bg-black text-white  lg:pt-40 p-8 lg:p-48 ">
        <p className="font-medium  text-base">Our Values</p>
        <p className="font-medium text-4xl py-8">
          Empowerment. Transparency. Sustainability.
        </p>
        <p className="font-light text-lg text-gray-300">
          Building a better future requires a commitment to strong values. Here
          at Zero Carbon, ours focus on...
        </p>
        <div className="flex gap-5 flex-wrap justify-between">
          <div className="flex gap-8 mt-10 w-full lg:w-2/5">
            <div className="flex flex-col">
              <div className="bg-white h-5 w-[1px] "></div>
              <div className="bg-white/40 h-16 w-[0.8px]"></div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              <span className="text-white">Empowerment.</span> We believe in
              equipping smallholder farmers with the tools and knowledge to
              thrive in the carbon market.
            </p>
          </div>{" "}
          <div className="flex gap-8 mt-10 w-full lg:w-2/5">
            <div className="flex flex-col">
              <div className="bg-white h-5 w-[1px] "></div>
              <div className="bg-white/40 h-16 w-[0.8px]"></div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              <span className="text-white">Transparency.</span> We ensure fair
              compensation for farmers by providing a clear and traceable system
              for carbon credit generation and share earnings.
            </p>
          </div>{" "}
          <div className="flex gap-8 mt-10 w-full lg:w-2/5">
            <div className="flex flex-col">
              <div className="bg-white h-5 w-[1px] "></div>
              <div className="bg-white/40 h-16 w-[0.8px]"></div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              <span className="text-white">Sustainability.</span> We promote
              environmentally-friendly practices by rewarding farmers for their
              contributions to carbon sequestration. find out.
            </p>
          </div>
        </div>
      </div>
      {/* End of Our Culture */}

      {/* Start of our Team */}
      <div className="lg:pt-40 p-12 lg:p-48 ">
        <div className="flex gap-2">
          <div className="bg-black h-[1px] w-8" />
          <div className="bg-gray-200 h-[1.2px] w-full" />
        </div>
        <p className="font-medium py-10 text-gray-700 text-2xl">The Team</p>
        <div className="flex gap-10 flex-wrap">
          {team.map((member, index) => (
            <div
              key={index}
              className="group w-[330px] h-[400px]  aspect-h-1 aspect-w-1 rounded-3xl relative before:absolute before:bottom-0 before:h-52 before:inset-x-0 ease-in-out before:z-10 transition-all duration-700 overflow-hidden before:bg-gradient-to-t before:from-black before:to-transparent"
            >
              <Image
                fill
                src={member.image}
                alt="Front of men&#039;s Basic Tee in black."
                className=" w-full z-2 rounded-3xl object-cover object-center h-full grayscale hover:grayscale-0   scale-105 hover:scale-125 transition ease-in-out duration-300"
              />
              <div className="absolute bottom-8 left-8 text-white z-20">
                <p className="text-md lg:text-lg py-2 font-medium">
                  {member.name}
                </p>
                <p className="text-xs">{member.position}</p>
              </div>
            </div>
          ))}
          {/* <div className="group w-[330px] h-[400px]  aspect-h-1 aspect-w-1 rounded-3xl relative before:absolute before:bottom-0 before:h-52 before:inset-x-0 ease-in-out before:z-10 transition-all duration-700 overflow-hidden before:bg-gradient-to-t before:from-black before:to-transparent">
            <Image
              fill
              src={"/images/team/dp.jpg"}
              alt="Front of men&#039;s Basic Tee in black."
              className=" w-full z-2 rounded-3xl object-cover object-center h-full grayscale hover:grayscale-0   scale-105 hover:scale-125 transition ease-in-out duration-300"
            />
            <div className="absolute bottom-8 left-8 text-white z-20">
              <p className="text-md lg:text-lg py-2 font-medium">
                Wesley Kijedi
              </p>
              <p className="text-xs">Founder & CEO</p>
            </div>
          </div>{" "}
          <div className="group  w-[330px] h-[400px]  aspect-h-1 aspect-w-1 rounded-3xl relative before:absolute before:bottom-0 before:h-52 before:inset-x-0 ease-in-out before:z-10 transition-all duration-700 overflow-hidden before:bg-gradient-to-t before:from-black before:to-transparent">
            <Image
              fill
              src={"/images/team/amadi.png"}
              alt="Front of men&#039;s Basic Tee in black."
              className=" w-full z-2 rounded-3xl object-cover object-center h-full grayscale hover:grayscale-0   scale-105 hover:scale-125 transition ease-in-out duration-300"
            />
            <div className="absolute bottom-8 left-8 text-white z-20">
              <p className="text-md lg:text-lg py-2 font-medium">
                Amadi Lawrence
              </p>
              <p className="text-xs">Founder & CEO</p>
            </div>
          </div> */}
        </div>
      </div>
      {/* End of our Team */}
      {/* Start of Contact */}
      <div className="px-5 py-12 m-2 lg:p-20 lg:m-10 bg-black text-white rounded-3xl">
        <p className="text-3xl">Tell us about your project</p>
        <button className="bg-white shadow-2xl shadow-white/70 rounded-full text-black px-4 py-2 text-xs font-semibold my-4">
          Say Hi!
        </button>
        <p className="text-md pt-10">Our Offices</p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-1">
            <p className="text-sm pt-10">Kenya</p>
            <p className="text-xs  text-gray-400">
              Riverside Square, Westlands
            </p>
            <p className="text-xs  text-gray-400">kenya@zerocarbon.africa</p>
          </div>{" "}
          <div className="flex flex-col gap-y-1">
            <p className="text-sm pt-10">Ghana</p>
            <p className="text-xs  text-gray-400">Accra</p>
            <p className="text-xs  text-gray-400">ghana@zerocarbon.africa</p>
          </div>
        </div>
      </div>
      {/* End of Contact */}
      {/* Start of Newsletter */}
      <Footer />
      {/* End of Footer */}
    </div>
  );
}
