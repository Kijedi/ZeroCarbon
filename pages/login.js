import React, {  useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { account } from "../components/Appwrite";
import { FaGoogle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

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
      router.push("/event/my_events");
    } catch {
      setLoading(false);
      toastError("Please check the email and/or passowrd");
    }
  };

  const getAccount = async () => {
    try{
      await account.get().then((response) => {
        router.push("/event/my_events");
      });
    }
    catch(error){
    }
  
  };

  useEffect(() => {
    getAccount();
  });

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
          <section className="">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="flex flex-col max-w-3xl mx-auto text-center pb-12 md:pb-20 items-center space-y-4">
                  <div>
                    <img
                      className="h-20 w-auto"
                      src="/images/logo.png"
                      alt="letsevent"
                    />
                  </div>
                  <h1 className="text-4xl text-primary font-bold">Login</h1>{" "}
                  <h1 className="text-sm text-gray-500 pt-1">
                    Hey enter your details to sign into your account
                  </h1>
                </div>
                {/* Form */}
                <div className="max-w-sm mx-auto">
                  <form
                    action="#"
                    method="POST"
                    className="space-y-7"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setLoading(true);
                      auth(email, password);
                    }}
                  >
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full flex border-2 px-3 py-1 items-center rounded-md">
                        <UserIcon className="h-5 w-5 text-gray-500" />
                        <input
                          id="email"
                          type="email"
                          className="form-input w-full text-gray-800 rounded-sm border-0 focus:ring-0"
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
                          className="form-input w-full text-gray-800 rounded-sm border-0 focus:ring-0"
                          placeholder="Enter your password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
                        <Link href="reset-password">
                          <p className="text-sm text-slate-800 font-semibold text-start  group-hover:underline">
                            Having trouble signing in?
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full px-3">
                        <button
                          disabled={loading}
                          className="btn disabled:bg-gray-500 disabled:shadow text-white bg-primary hover:bg-primary/90 w-full py-2 rounded-lg  shadow-md hover:shadow-lg transition-all ease-in-out duration-200"
                          type="submit"
                        >
                          {loading ? `Loading...` : `Sign In`}
                        </button>
                      </div>
                    </div>
                  </form>
                  <button className="flex justify-center items-center my-10  space-x-3 max-w-sm mx-auto border-2 text-primary bg-transparent border-primary w-full py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200">
                    <FaGoogle className="h-4 w-5" />
                    <p>Sign In with Google</p>
                  </button>
                  <div className="text-gray-600 text-center mt-6">
                    Don’t you have an account?{" "}
                    <Link
                      href="/signup"
                      className="text-buttercup hover:underline transition duration-150 ease-in-out font-bold"
                    >
                      Sign up
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

export default SignIn;
