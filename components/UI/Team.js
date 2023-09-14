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
    position: "Environmentalist & Climate Change Champion",
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
        <p className="text-5xl text-green-500 text-center font-bold">
          Our Best Teams
        </p>
      </div>
      <div className="flex space-x-2 items-center justify-center">
        {team.map((tm, index) => (
          <div key={index}>
            <div className="flex-col flex items-center">
              <img src={tm.image} className="h-96 hover:scale-105 duration-500 ease-in-out" />
              <p className="uppercase text-lg text-teal-600 font-semibold">{tm.name}</p>
              <p className="text-sm text-gray-600 pt-0">{tm.position}</p>
            </div>           
          </div>
        ))}
      </div>
    </div>
  );
}
