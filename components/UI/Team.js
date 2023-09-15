const team = [
  {
    name: "Wesley Kijedi",
    image: "/images/team/wes.png",
    position: "Software Engineer",
  },
  {
    name: "Gladwell Njeri",
    image: "/images/team/gladwell.png",
    position: "Community Development Officer",
  },
  {
    name: "Judy Wangare",
    image: "/images/team/judy.png",
    position: "Climate Change Champion",
  },
  {
    name: "Solomon Rabin",
    image: "/images/team/solo.png",
    position: "Agricultural Extension Officer",
  },
];

export default function Team() {
  return (
    <div className="my-28">
      <div className="pb-20">
        <p className="text-2xl lg:text-5xl text-green-600 text-center font-bold">
          Our Best Teams
        </p>
      </div>
      <div className="flex gap-y-8 items-center justify-center w-full flex-wrap">
        {team.map((tm, index) => (
            <div key={index} className="flex-col flex items-center justify-center w-1/2 lg:w-1/6">
              <img src={tm.image} className="hover:scale-105  duration-500 ease-in-out" />
              <p className="uppercase text-sm lg:text-lg text-teal-600 font-bold">{tm.name}</p>
              <p className="lg:text-sm text-xs text-gray-600 pt-0">{tm.position}</p>
            </div>           
        ))}
      </div>
    </div>
  );
}
