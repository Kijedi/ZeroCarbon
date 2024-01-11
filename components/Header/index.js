import Image from "next/image";

export default function Header() {
  return (
    <div className="p-10 lg:p-28 ">
      <div className="lg:flex gap-x-8">
        <h1 className="text-3xl lg:text-6xl text-black font-semibold flex-1">
          Empowering Africa: Zero Carbon, Infinite Possibilities.
        </h1>
        <div className="flex-1 pt-8 lg:pt-0">
          <h4 className="text-lg xl:text-2xl">
            A comprehensive platform to address the challenges in the untapped
            carbon trading market in AFRICA and the lack of
            regulatory frameworks.
          </h4>
          <button className="mt-10 rounded-lg shadow-lg px-10 py-2 bg-[#37ad90] text-white">
            Join Us Now
          </button>
        </div>
      </div>{" "}
      <div className="h-[300px] lg:h-[600px] w-full relative  flex items-center mt-16 lg:mt-28">
        <Image
          fill
          src={
            "https://images.pexels.com/photos/3041850/pexels-photo-3041850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          className="absolute h-full w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
