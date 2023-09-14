export default function About() {
  return (
    <div className="lg:p-60 p-24 ">
      <p className="font-medium text-gray-700 text-lg">About Us</p>
      <p className="font-normal text-black text-5xl pt-7">
        Our strength is collaboration
      </p>
      <p className="font-light text-xl text-gray-500 pt-7 -tracking-tighter">
        We believe that our strength lies in our collaborative approach, which
        puts our clients at the center of everything we do.
      </p>

      <p className="font-thin text-normal pt-7 text-gray-600">
        Studio was started by three friends who noticed that developer studios
        were charging clients double what an in-house team would cost. Since the
        beginning, we have been committed to doing things differently by
        charging triple instead.
        <br />
        <br />
        At Studio, we’re more than just colleagues — we’re a family. This means
        we pay very little and expect people to work late. We want our employees
        to bring their whole selves to work. In return, we just ask that they
        keep themselves there until at least 6:30pm.
      </p>
      <div className="flex gap-3">
      <div className="flex flex-col gap-y-2">
        <div className="bg-black h-5 w-[0.8px] "></div>
        <div className="bg-gray-300 h-10 w-[0.8px]"></div>
      </div>
      <div>
        <p className="text-3xl font-medium">52</p>
        <p className="text-3xl font-thin text-gray-700">Unemployed</p>
      </div>

      </div>
   
    </div>
  );
}
