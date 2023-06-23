import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { databases } from "../../../components/Appwrite";

export default function Rsvp({ attendee }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [event, setEvent] = useState({});

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const submit = async () => {
    setLoading(true)
    try {
      //update attendee
      databases.updateDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_COLLECTION_ATTENDEE_ID,
        attendee.$id,
        {
          rsvp: current,
        }
      );
      router.push("/event/rsvp/success");
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  const getEvent = async () => {
    setEvent(
      await databases.getDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_COLLECTION_EVENT_ID,
        attendee.eventID
      )
    );
  };

  useEffect(() => {
    try {
      getEvent();
    } catch (error) {
      console.log(error);
    }
  }, [attendee]);

  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <main className="grow">
          <section className="">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-5 md:pt-40 md:pb-16">
                <div className="flex flex-col max-w-3xl mx-auto text-center pb-12 items-center space-y-4">
                  <div>
                    <img
                      className="h-20 w-auto"
                      src="/images/logo.png"
                      alt="letsevent"
                    />
                  </div>
                  <h1 className="text-4xl text-primary font-bold">RSVP</h1>{" "}
                  <div className="space-y-2 md:pt-10">
                    <p className="pb-4 text-gray-700 text-xl">
                      {" "}
                      <span className="text-primary font-bold text-xl">
                        {attendee.name},
                      </span>
                      &nbsp; invites you for:
                    </p>
                    <p className="text-justify text-primary">
                      <span className="text-base text-buttercup font-semibold">
                        Event Name :
                      </span>{" "}
                      {event.name}
                    </p>{" "}
                    <p className="text-justify text-primary">
                      <span className="text-base text-buttercup font-semibold">
                        About the Event :
                      </span>{" "}
                      {event.description}
                    </p>{" "}
                    <p className="text-justify text-primary">
                      <span className="text-base text-buttercup font-semibold">
                        Location :
                      </span>{" "}
                      {event.location}
                    </p>
                    <p className="text-justify text-primary">
                      <span className="text-base text-buttercup font-semibold">
                        Date:
                      </span>{" "}
                      {event.date}
                    </p>{" "}
                    <p className="text-justify text-primary">
                      <span className="text-base text-buttercup font-semibold">
                        Time :
                      </span>{" "}
                      {event.time}
                    </p>
                    <h1 className="text-xs font-semibold text-gray-500 pt-3 uppercase">
                      Please select an option for your availability.
                    </h1>
                  </div>
                </div>
                <div className="flex max-w-sm mx-auto space-x-3">
                  <button
                    onClick={() => setCurrent(1)}
                    className={classNames(
                      current == 1
                        ? "bg-primary text-white hover:bg-primary/80"
                        : "text-gray-500 bg-transparent hover:bg-gray-100 border border-primary",
                      "flex justify-center font-bold items-center space-x-3 max-w-sm mx-auto   w-full py-2 rounded-lg text-xs  transition-all ease-in-out duration-200"
                    )}
                  >
                    <FaThumbsUp className="h-4 w-4" />
                    <p>YES</p>
                  </button>
                  <button
                    onClick={() => setCurrent(2)}
                    className={classNames(
                      current == 2
                        ? "bg-primary text-white hover:bg-primary/80"
                        : "text-gray-500 bg-transparent hover:bg-gray-100 border border-primary",
                      "flex justify-center font-bold items-center space-x-3 max-w-sm mx-auto   w-full py-2 rounded-lg text-xs  transition-all ease-in-out duration-200"
                    )}
                  >
                    {" "}
                    <FaThumbsDown className="h-4 w-4" />
                    <p>NO</p>
                  </button>
                  <button
                    onClick={() => setCurrent(3)}
                    className={classNames(
                      current == 3
                        ? "bg-primary text-white hover:bg-primary/80"
                        : "text-gray-500 bg-transparent hover:bg-gray-100 border border-primary",
                      "flex justify-center font-bold items-center space-x-3 lg:max-w-sm max-w-xs mx-auto text-xs  w-full py-2 rounded-lg transition-all ease-in-out duration-200"
                    )}
                  >
                    {" "}
                    <FaQuestion className="h-4 w-4" />
                    <p>MAYBE</p>
                  </button>
                </div>
                <div className="lg:max-w-sm max-w-xs mx-auto space-x-3 mt-10">
                  <button
                    disabled={loading}
                    onClick={submit}
                    className="btn disabled:bg-gray-500 disabled:shadow text-white bg-buttercup hover:bg-buttercup/90 w-full py-2 rounded-lg  shadow-md hover:shadow-lg transition-all ease-in-out duration-200"
                    type="submit"
                  >
                    {loading ? `LOADING...` : `SUBMIT`}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { rsvp } = context.query;
  var attendee = {};
  const promise = databases.getDocument(
    process.env.NEXT_PUBLIC_DB_ID,
    process.env.NEXT_PUBLIC_COLLECTION_ATTENDEE_ID,
    rsvp
  );

  await promise.then(
    function (response) {
      attendee = response;
    },
    function (error) {
    }
  );

  return { props: { attendee } };
}
