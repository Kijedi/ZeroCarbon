import Navbar from "../../components/Navigation";
import Image from "next/image";
export default function Project1() {
  return (
    <>
      <Navbar />
      <div className="p-10 lg:px-48 lg:py-20">
        <div className="text-center w-full">
          <p className="font-medium py-4 lg:py-8 tracking-widest">Project</p>
          <h3 className="text-xl lg:text-5xl font-medium tracking-wide">
            Eco-Agriculture Youth Alliance (EAYA)
          </h3>{" "}
          <p className="text-gray-500 leading-7 lg:text-lg tracking-wide lg:px-64 py-10">
            EAYA stands tall as a youth-driven movement, laser-focused on
            empowering the next generation and championing women in the realm of
            eco-Agriculture. Our vision pulsates with the empowerment of youth
            and women, envisaging a world where sustainable Agriculture thrives,
            ensuring food security for all.
          </p>
          <div className="h-[300px] lg:h-[600px] w-full relative  flex items-center mt-8 lg:mt-10">
            <Image
              fill
              src={"/images/projects/EAYA.jpeg"}
              className="absolute h-full w-full object-cover grayscale brightness-75 contrast-125 rounded-2xl"
            />
          </div>
        </div>
        <div className="lg:px-48 py-20">
          <h3 className="text-xl lg:text-2xl font-semibold tracking-wide">
            Mission
          </h3>{" "}
          <p className="text-gray-500 leading-7 lg:text-lg tracking-wide py-10 text-justify">
            We aim to ignite the potential within youth and women, propelling
            them to the forefront of sustainable Agriculture. Picture this:
            fostering eco-friendly practices that not only amplify livelihoods
            but also preserve and safeguard our precious planet.
          </p>{" "}
        </div>
        <div className="lg:px-48">
          <h3 className="text-xl lg:text-2xl font-semibold tracking-wide">
            Team
          </h3>{" "}
          <div className="lg:flex items-center gap-10 mt-20">
            <div className="w-72 h-96 relative border rounded-xl">
              <Image
                src={"/images/team/odero.jpeg"}
                fill
                className="object-cover grayscale rounded-xl"
              />
            </div>
            <div className="lg:w-1/2 pt-4">
              <p className="font-semibold text-lg">Dennis Odero</p>
              <p className="font-semibold text-gray-400 pb-4">
                Executive Director
              </p>
              <p className="text-gray-500 text-sm leading-6 tracking-wide text-justify">
                Dennis Odero recognizes the critical role of the youth in
                building a resilient, sustainable and prosperous agricultural
                sector in Africa and around the world. This passion has driven
                Dennis to start Eco-Agriculture Youth Alliance (EAYA) of which
                he is now the Executive Director. The teams’ in 47 counties work
                to raise awareness about Climate Smart Agriculture among young
                men and women, educating them for the benefits of sustainable
                approaches in increasing agricultural yields and resilience in
                the rural communities. He served as President Egerton University
                Students Association. He was instrumental in setting up
                Sustainable Development Goals Innovation Hubs that are in over
                100 secondary schools in Kenya.
              </p>
            </div>
          </div>{" "}
          <div className="lg:flex gap-10 mt-20">
            <div className="w-72 h-96 relative border rounded-xl">
              <Image
                src={"/images/team/paul.jpeg"}
                fill
                className="object-cover grayscale rounded-xl"
              />
            </div>
            <div className="lg:w-1/2 pt-4">
              <p className="font-semibold text-lg">Paul Brian</p>
              <p className="font-semibold text-gray-400 pb-4">
                Technical and Strategy Manager
              </p>
              <p className="text-gray-500 text-sm leading-6 tracking-wide text-justify">
                I'm Paul Brian—an author, cybersecurity enthusiast, and advocate
                for technology governance, deeply involved in Eco-Agriculture.
                Through my written works in technology governance and
                cybersecurity, I aim to bridge the gap between secure digital
                practices and sustainable agricultural methodologies. As a
                public speaker and life coach, I leverage my diverse expertise
                to empower individuals in both cybersecurity and
                Eco-Agriculture. My mission is to not only fortify digital
                landscapes but also cultivate a greener, more sustainable future
                through eco-friendly agricultural practices. I'm dedicated to
                sharing insights that merge the realms of cybersecurity and
                Eco-Agriculture, fostering a more secure and environmentally
                conscious world.
              </p>
            </div>
          </div>
          <div className="lg:flex gap-10 mt-20">
            <div className="w-72 h-96 relative border ">
              <Image
                src={"/images/team/cleophas.jpeg"}
                fill
                className="object-cover grayscale rounded-xl"
              />
            </div>
            <div className="lg:w-1/2 pt-4">
              <p className="font-semibold text-lg">Cleophas Khasakhala</p>
              <p className="font-semibold text-gray-400 pb-4">
                Executive Director
              </p>
              <p className="text-gray-500 text-sm leading-6 tracking-wide text-justify">
                I am Cleophas Khasakhala a passionate and experienced
                Agricultural specialist. Committed to driving continuous
                improvements in agricultural productivity and building
                resilience in climate change risks with improved Agricultural
                Technologies, Innovations and Management Practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
