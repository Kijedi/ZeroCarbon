"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
// import { account } from "../components/Appwrite";
import { FaGoogle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toastError = (message) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const auth = async (email, password) => {
    try {
      await account.createEmailSession(email, password);
      router.push("/dashboard");
    } catch {
      setLoading(false);
      toastError("Please check the email and/or passowrd");
    }
  };

  const getAccount = async () => {
    try {
      await account.get().then((response) => {
        router.push("/dashboard");
      });
    } catch {}
  };

//   useEffect(() => {
//     getAccount();
//   }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer limit={1} />
      <div className="flex flex-col w-screen h-screen items-center p-3 justify-center bg-[#37ad90] overflow-hidden">
        <div className="lg:w-3/12 w-full p-10 rounded-lg shadow-xl bg-white">
          <div className="">
            <div className="flex flex-col items-center">
             <Image src={'/images/logo2.png'} height={100} width={100}/>
            </div>
            <form
              className=" text-slate-700"
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                auth(email, password);
              }}
            >
              <div className="w-full  space-y-2 pt-10 rounded-md">
                <p>Email Address</p>
                <input
                  id="email"
                  type="email"
                  autoComplete="off"
                  className="form-input text-gray-800 rounded-sm p-2 w-full border text-sm "
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="w-full space-y-2  py-5 rounded-md">
                <div className="flex justify-between">
                  <p>Password</p>
                  <Link href="reset-password">
                    <p className="text-sm text-sky-600 font-semibold text-start  group-hover:underline">
                      Forgot Password?
                    </p>
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  autoComplete="off"
                  className="form-input text-gray-800 rounded-sm p-2 w-full border text-sm "
                  placeholder="Enter your email"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button
                    disabled={loading}
                    className="btn disabled:bg-gray-500 disabled:shadow text-white bg-[#37ad90] hover:bg-primary/90 w-full py-2 rounded-lg  shadow-md hover:shadow-lg transition-all ease-in-out duration-200"
                    type="submit"
                  >
                    {loading ? `Loading...` : `Sign In`}
                  </button>
                </div>
              </div>
            </form><button className="flex justify-center text-slate-700 items-center my-4  space-x-3 max-w-sm mx-auto border-2 bg-transparent border-primary w-full py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200">
              <FaGoogle className="h-4 w-5" />
              <p>Sign In with Google</p>
            </button>
            
          </div>
        </div>
        <div className="text-white text-sm text-center mt-6">
          Create an account?{" "}
          <Link
            href="/signup"
            className="hover:underline transition duration-150 ease-in-out font-bold"
          >
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
