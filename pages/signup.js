import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  LockClosedIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { account } from "../components/Appwrite";
import { FaGoogle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
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

    const createAccount = async () => {
      try {
        await account.create("unique()", email, password, name);
        await account.createEmailSession(email, password);
        router.push("/event/my_events");
      } catch (error) {
        setLoading(false);
        console.log(error);
        error.code == 409
          ? toastError("User already exists!")
          : toastError("Something went wrong. Try again!");
      }
  };

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
      {/* Same as */}
      <ToastContainer limit={1} />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
          <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="flex flex-col max-w-3xl mx-auto text-center items-center space-y-4">
                  <div>
                    <img
                      className="h-20 w-auto"
                      src="/images/logo.png"
                      alt="letsevent"
                    />
                  </div>
                  <h1 className="text-4xl text-primary font-bold">
                    Create an account
                  </h1>{" "}
                  <h1 className="text-sm text-gray-500">
                    Hey enter your details to sign into your account
                  </h1>
                </div>
                <button className="flex justify-center items-center my-10  space-x-3 max-w-sm mx-auto border-2 text-primary bg-transparent border-primary w-full py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200">
                  <FaGoogle className="h-4 w-5" />
                  <p>Sign Up with Google</p>
                </button> 

                <div className="max-w-sm mx-auto">
                  <p className="text-center py-3 text-xs text-black/40">
                    Or Sign up with email
                  </p>
                  <form
                    action="#"
                    method="POST"
                    className="space-y-7"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setLoading(true);
                      createAccount();
                    }}
                  >
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full flex border-2 px-3 py-1 items-center rounded-md bg-transparent">
                        <UserCircleIcon className="h-5 w-5 text-gray-500" />
                        <input
                          id="name"
                          type="text"
                          className="form-input w-full text-primary font-semibold rounded-sm border-0 bg-transparent focus:ring-0"
                          placeholder="Enter your name"
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>{" "}
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full flex border-2 px-3 py-1 items-center rounded-md">
                        <UserIcon className="h-5 w-5 text-gray-500" />
                        <input
                          id="email"
                          type="email"
                          className="form-input w-full text-primary font-semibold rounded-sm border-0 bg-transparent focus:ring-0"
                          placeholder="Enter your email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full flex border-2 px-3 py-1 items-center rounded-md">
                        <LockClosedIcon className="h-5 w-5 text-gray-500" />
                        <input
                          id="password"
                          type="password"
                          className="form-input w-full text-primary font-semibold rounded-sm border-0 bg-transparent focus:ring-0"
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn disabled:bg-gray-500 disabled:shadow text-white bg-primary hover:bg-primary/90 w-full py-2 rounded-lg  shadow-md hover:shadow-lg transition-all ease-in-out duration-200"
                        >
                          {" "}
                          {loading ? `Loading...` : `Sign Up`}
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 text-center mt-3">
                      By creating an account, you agree to the{" "}
                      <a className="underline" href="#0">
                        terms & conditions
                      </a>
                      , and our{" "}
                      <a className="underline" href="#0">
                        privacy policy
                      </a>
                      .
                    </div>
                  </form>

                  <div className="text-gray-600 text-center mt-6">
                    Already using LetsEvent?{" "}
                    <Link
                      href="/login"
                      className="text-buttercup hover:underline transition duration-150 ease-in-out font-bold"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default SignUp;
