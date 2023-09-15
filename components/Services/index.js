import Image from "next/image";
import { useRouter } from "next/router";

const services = [
  {
    name: "Advocacy",
    img: "/images/bg1.jpg",
    description:
      "LetsEvent App simplifies event creation with its intuitive interface. Organizers can easily input event details such as theevent name, date, time, location, and description. ",
  },
  {
    name: "Advocacy",
    img: "/images/bg2.jpg",
    description:
      "LetsEvent App simplifies event creation with its intuitive interface. Organizers can easily input event details such as theevent name, date, time, location, and description. ",
  },
  {
    name: "Advocacy",
    img: "/images/bg3.jpg",
    description:
      "LetsEvent App simplifies event creation with its intuitive interface. Organizers can easily input event details such as theevent name, date, time, location, and description. ",
  },
  {
    name: "Advocacy",
    img: "/images/bg4.jpg",
    description:
      "LetsEvent App simplifies event creation with its intuitive interface. Organizers can easily input event details such as theevent name, date, time, location, and description. ",
  },
];

export default function Services() {
  const router = useRouter();
  return (
    <div className="flex space-x-20 justify-center lg:py-44  lg:pl-40 py-10">
      <div className="w-1/6">
        <h1 className="text-8xl uppercase">What we do</h1>
      </div>
      <div className="w-1/2 space-x-2 flex">
        {services.map((service, index) => (
          <div className="relative w-20 h-96 group hover:w-1/3 ease-in-out transition-all duration-300 before:absolute before:h-28 before:w-full before:bottom-0  before:backdrop:bg-gradient-to-b before:from-black/90 before:to-black/90">
            <Image src={service.img} fill className="rounded-lg object-cover" />
            <div className="absolute  group-hover:bottom-3  bottom-12 -left-3 group-hover:px-5  ease-in-out transition-all duration-300">
              <p className="text-white rotate-90 group-hover:rotate-0 text-xl  font-bold  ease-in-out transition-all duration-300">
                {service.name}
              </p>
              <p className="text-gray-200 text-xs hidden group-hover:block  ease-in-out transition-all duration-300">
                {service.description}
              </p>

            </div>
          </div>
        ))}
        <div></div>
      </div>
    </div>
  );
}
