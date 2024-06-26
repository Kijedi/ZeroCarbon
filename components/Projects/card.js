import Image from "next/image";
import Link from "next/link";

export function ProjectCard() {
  return (
    <>
      <Link
        href={"/project/EAYA"}
        className="border bg-gray-100 border-gray-100 rounded-md hover:bg-gray-50 p-6 my-8 cursor-pointer"
      >
        <div className="relative h-16 w-16 my-4">
          <Image src={"/images/ZeroCarbon2.png"} fill className="absolute" />
        </div>
        <h3 className="text-xl lg:text-2xl font-semibold tracking-wide">
          Eco-Agriculture Youth Alliance (EAYA)
        </h3>{" "}
        <h3 className="text-base py-3 font-medium text-gray-400 tracking-wide">
          Started: 2024
        </h3>
        <p className="text-gray-500 py-5 leading-7 tracking-wide">
          EAYA stands tall as a youth-driven movement, laser-focused on
          empowering the next generation and championing women in the realm of
          eco-Agriculture. Our vision pulsates with the empowerment of youth and
          women, envisaging a world where sustainable Agriculture thrives,
          ensuring food security for all.
        </p>
      </Link>{" "}
      <Link
        href={"/project/BMT"}
        className="border bg-gray-100 border-gray-100 rounded-md hover:bg-gray-50 p-6 my-8 cursor-pointer"
      >
        <div className="relative h-16 w-auto my-4">
          <Image src={"/images/logos/bmt.png"} height={100} width={100} className="absolute" />
        </div>
        <h3 className="text-xl lg:text-2xl font-semibold tracking-wide">
          Beyond My Tribe (BMT)
        </h3>{" "}
        <h3 className="text-base py-3 font-medium text-gray-400 tracking-wide">
          Started: 2022
        </h3>
        <p className="text-gray-500 py-5 leading-7 tracking-wide">
          Beyond My Tribe is a Kenyan initiative that focuses on promoting youth
          involvement and development. The organization strives to end
          tribalism, enhance grassroots development, and promote social
          integration. We believe that the key to achieving this goal is to
          encourage social values, relations, and institutions that prioritize
          equality, equity, and dignity for all.
        </p>
      </Link>
    </>
  );
}
