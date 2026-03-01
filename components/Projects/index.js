import { ProjectCard } from "./card";

export default function Projects() {
  return (
    <div className="p-5 lg:px-48 lg:pb-28">
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
      </div>
    </div>
  );
}
