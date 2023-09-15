import { useRouter } from "next/router";
import Team from "../components/UI/Team";
import About from "../components/About";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <img src="/images/banner.jpg" className="w-full object-cover" />
      <div className="">
        <About/>
        <Team />
        <p className="text-center pt-10">
          Made with ❤️&nbsp; by&nbsp;
          <span className="hover:underline">
            <a href="https://kijedi.best">Wesley.</a>
          </span>
        </p>
      </div>
    </>
  );
}
