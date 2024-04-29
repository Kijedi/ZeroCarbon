import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
export default function Footer() {
  return (
    <>
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
    </>
  );
}
