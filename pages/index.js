import Image from "next/image";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navigation";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function About() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Projects />
      <div className="p-10 lg:px-48 lg:pb-28">
        <p className="font-medium text-gray-700 text-base">About Us</p>
        <p className="font-medium text-black text-5xl py-8">
          Our strength is collaboration
        </p>
        <p className="font-light text-lg text-gray-500 -tracking-tighter">
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>

        <p className="font-normal tracking-wide leading-relaxed text-sm pt-10 text-gray-800">
          Studio was started by three friends who noticed that developer studios
          were charging clients double what an in-house team would cost. Since
          the beginning, we have been committed to doing things differently by
          charging triple instead.
          <br />
          <br />
          At Studio, we’re more than just colleagues — we’re a family. This
          means we pay very little and expect people to work late. We want our
          employees to bring their whole selves to work. In return, we just ask
          that they keep themselves there until at least 6:30pm.
        </p>
        <div className="flex gap-5 flex-wrap justify-between">
          <div className="flex gap-8 mt-10 w-1/3">
            <div className="flex flex-col gap-y-2">
              <div className="bg-black h-5 w-[1px] "></div>
              <div className="bg-gray-300 h-10 w-[1px]"></div>
            </div>
            <div>
              <p className="text-3xl font-medium">35</p>
              <p className="text-lg pt-2 font-thin text-gray-700">
                Underpaid employees
              </p>
            </div>
          </div>
          <div className="flex gap-8 mt-10 w-1/3">
            <div className="flex flex-col gap-y-2">
              <div className="bg-black h-5 w-[1px] "></div>
              <div className="bg-gray-300 h-10 w-[1px]"></div>
            </div>
            <div>
              <p className="text-3xl font-medium">52</p>
              <p className="text-lg pt-2 font-thin text-gray-700">
                Placated clients
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-8 mt-10 w-1/3">
            <div className="flex flex-col gap-y-2">
              <div className="bg-black h-5 w-[1px] "></div>
              <div className="bg-gray-300 h-10 w-[1px]"></div>
            </div>
            <div>
              <p className="text-3xl font-medium">$100M</p>
              <p className="text-lg pt-2 font-thin text-gray-700">
                Invoices billed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Start of Our Culture */}
      <div className="rounded-[60px] bg-black text-white lg:pt-40 p-14 lg:p-48 ">
        <p className="font-medium  text-base">Our Culture</p>
        <p className="font-medium text-4xl py-8">
          Balance your passion with your passion for life.
        </p>
        <p className="font-light text-lg text-gray-300">
          We are a group of like-minded people who share the same core values.
        </p>
        <div className="flex gap-5 flex-wrap justify-between">
          <div className="flex gap-8 mt-10 w-2/5">
            <div className="flex flex-col">
              <div className="bg-white h-5 w-[1px] "></div>
              <div className="bg-white/40 h-16 w-[0.8px]"></div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              <span className="text-white">Loyalty.</span> Our team has been
              with us since the beginning because none of them are allowed to
              have LinkedIn profiles.
            </p>
          </div>{" "}
          <div className="flex gap-8 mt-10 w-2/5">
            <div className="flex flex-col">
              <div className="bg-white h-5 w-[1px] "></div>
              <div className="bg-white/40 h-16 w-[0.8px]"></div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              <span className="text-white">Trust.</span> We don’t care when our
              team works just as long as they are working every waking second.
            </p>
          </div>{" "}
          <div className="flex gap-8 mt-10 w-2/5">
            <div className="flex flex-col">
              <div className="bg-white h-5 w-[1px] "></div>
              <div className="bg-white/40 h-16 w-[0.8px]"></div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-light">
              <span className="text-white">Compassion.</span> You never know
              what someone is going through at home and we make sure to never
              find out.
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
          <div className="group w-[330px] h-[400px]  aspect-h-1 aspect-w-1 rounded-3xl relative before:absolute before:bottom-0 before:h-52 before:inset-x-0 ease-in-out before:z-10 transition-all duration-700 overflow-hidden before:bg-gradient-to-t before:from-black before:to-transparent">
            <Image
              fill
              src={
                "/images/team/dp.jpg"  }
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
              src={ "/images/team/amadi.png"   }
              alt="Front of men&#039;s Basic Tee in black."
              className=" w-full z-2 rounded-3xl object-cover object-center h-full grayscale hover:grayscale-0   scale-105 hover:scale-125 transition ease-in-out duration-300"
            />
            <div className="absolute bottom-8 left-8 text-white z-20">
              <p className="text-md lg:text-lg py-2 font-medium">
                Amadi Lawrence
              </p>
              <p className="text-xs">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of our Team */}
      {/* Start of Contact */}
      <div className="p-16 m-10 lg:m-48 bg-black text-white rounded-3xl">
        <p className="text-3xl">Tell us about your project</p>
        <button className="bg-white shadow-2xl shadow-white/70 rounded-full text-black px-4 py-2 text-xs font-semibold my-4">
          Say Hi!
        </button>
        <p className="text-md pt-10">Our Offices</p>
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-1">
            <p className="text-sm pt-10">Kenya</p>
            <p className="text-xs  text-gray-400">Riverside Square, Westlands</p>
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
      <div className="lg:pt-40 p-10 lg:p-48 ">
        <p className="font-medium py-4 text-gray-700 text-md">
          Sign up for our newsletter
        </p>
        <p className="font-light  text-gray-600 text-sm max-w-md">
          Subscribe to get the latest design news, articles, resources and
          inspiration.
        </p>

        <div className="flex border w-fit p-1 rounded-xl my-8 border-gray-300 gap-x-8">
          <input
            className="form-input border-0 focus:outline-0 focus:border-0 outline-0 focus:ring-0 placeholder:text-gray-400 placeholder:text-sm"
            type="email"
            placeholder="Email address"
          />
          <button className="h-12 w-12 bg-black text-white p-4 rounded-xl">
            <ArrowSmallRightIcon className="text-white" />
          </button>
        </div>
      </div>
      {/* End of Newsletter */}

      {/* Start of Footer */}
      <div className="mx-10 lg:mx-48 ">
        <div className="flex justify-between border-t py-4 lg:py-10 items-center">
          <Image width={100} height={100} src={"/images/logo.png"} />
          <p className="text-xs md:text-sm">
            © Zero Carbon Africa 2023. All Rights Reserved
          </p>
        </div>
      </div>
      {/* End of Footer */}
    </div>
  );
}
