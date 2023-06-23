import Layout from "../../components/Layout";
import { navigation, userNavigation } from "../../components/Navigation";
import { TrashIcon } from "@heroicons/react/24/outline";
import { databases } from "../../components/Appwrite";
import { PlusCircleIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { ID } from "appwrite";
import { useRouter } from "next/router";
import { account } from "../../components/Appwrite";
import { withAuth } from "../../components/Auth";
import { sendMail } from "../../components/Appwrite";

function CreateEvent() {
  const modifiedNavigation = navigation.map((item) => ({
    ...item,
    current: item.name.toLowerCase() === "events" ? true : false,
  }));

  const [attendees, setAttendees] = useState([
    {
      eventID: "Hey",
      name: "",
      email: "",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const [event, setEvent] = useState({
    name: "",
    description: "",
    location: "",
    date: "",
    time: "",
    owner: " ",
  });

  const getUser = async () =>
    await account
      .get()
      .then((response) => setEvent({ ...event, owner: response.name }));

  const router = useRouter();

  const saveEvent = async () => {
    getUser();
    setLoading(true);
    try {
      await databases
        .createDocument(
          process.env.NEXT_PUBLIC_DB_ID,
          process.env.NEXT_PUBLIC_COLLECTION_EVENT_ID,
          ID.unique(),
          event
        )
        .then((response) => {
          saveAttendees(response);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const saveAttendees = (event) => {
    try {
      attendees.forEach(async (attendee) => {
        attendee.eventID = event.$id;
       await databases
          .createDocument(
            process.env.NEXT_PUBLIC_DB_ID,
            "64839310cd50517e16ee",
            ID.unique(),
            attendee
          )
          .then(async (response) => {
           await sendMail(response, event);
          });
      });
      router.push("/event/my_events");
    } catch {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Layout navigation={modifiedNavigation} userNavigation={userNavigation}>
        <div className="py-6">
          <div className="p-4 sm:p-6 md:p-12">
            <div className="flex justify-between">
              <p className="text-xl xl:text-2xl font-bold pb-2 text-primary">
                Create Event
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                saveEvent();
              }}
            >
              <div className="w-full rounded-lg shadow-md border p-10 my-10">
                <p className="text-base lg:text-xl font-bold">General</p>
                <p className="lg:text-sm text-xs border-b border-gray-200 pt-2 pb-3">
                  Information about the event
                </p>
                <div className="flex py-4 items-center">
                  <label className="w-1/4 font-bold text-xs lg:text-sm">Event Title</label>
                  <input
                    className="rounded-lg border border-black w-3/4 lg:w-1/3 py-2 px-3 lg:text-sm text-xs"
                    onChange={(e) =>
                      setEvent({ ...event, name: e.target.value })
                    }
                    required
                  />
                </div>{" "}
                <div className="flex py-4 items-center">
                  <label className="w-1/4 font-bold text-xs lg:text-sm">
                    Event Description
                  </label>
                  <textarea
                    className="rounded-lg border  w-3/4 lg:w-1/3 py-2 px-3 lg:text-sm text-xs"
                    onChange={(e) =>
                      setEvent({ ...event, description: e.target.value })
                    }
                  />
                </div>{" "}
              </div>
              <div className="w-full rounded-lg shadow-md border p-10 my-10">
                <p className="text-base lg:text-xl font-bold">About the event</p>
                <p className="text-xs lg:text-sm border-b border-gray-200 pt-2 pb-3">
                  Information about the event
                </p>
                <div className="flex py-4 items-center">
                  <label className="w-1/4 font-bold text-xs lg:text-sm">Location</label>
                  <input
                    className="rounded-lg border border-gray-600 w-3/4 lg:w-1/3 py-2 px-3 lg:text-sm text-xs"
                    onChange={(e) =>
                      setEvent({ ...event, location: e.target.value })
                    }
                    required
                  />
                </div>{" "}
                <div className="flex py-4 items-center">
                  <label className="w-1/4 font-bold  text-xs lg:text-sm">
                    Date {event.date}
                  </label>
                  <input
                    className="rounded-lg border  w-3/4 lg:w-1/3 py-2 lg:text-sm text-xs"
                    type="date"
                    onChange={(e) =>
                      setEvent({ ...event, date: e.target.value })
                    }
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>{" "}
                <div className="flex py-4 items-center">
                  <label className="w-1/4 font-bold  text-xs lg:text-sm">Time</label>
                  <input
                    type="time"
                    className="rounded-lg border  w-3/4 lg:w-1/3 py-2 px-3 lg:text-sm text-xs"
                    onChange={(e) =>
                      setEvent({ ...event, time: e.target.value })
                    }
                    required
                  />
                </div>{" "}
              </div>{" "}
              <div className="w-full rounded-lg shadow-md border p-10 my-10">
                <p className="text-base lg:text-xl  font-bold">Event attendees</p>
                <p className="text-xs lg:text-sm border-b border-gray-200 pt-2 pb-3">
                  People who&lsquo;ll attend this event.
                </p>
                {attendees.map((attendee, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start mt-3 space-x-2 lg:space-x-4 lg:text-sm text-xs"
                  >
                    <div className="flex flex-col lg:w-1/4 w-1/2">
                      <input
                        type="text"
                        className="form-input px-4 py-2 my-2 rounded-lg lg:text-sm text-xs"
                        placeholder="Enter name..."
                        onChange={(e) => {
                          attendee.name = e.target.value;
                          setAttendees([...attendees]);
                        }}
                        required
                      />
                    </div>{" "}
                    <div className="flex flex-col lg:w-1/4 w-1/2">
                      <input
                        type="email"
                        className="form-input px-4 py-2 my-2 rounded-lg lg:text-sm text-xs"
                        placeholder="Enter email address..."
                        onChange={(e) => {
                          attendee.email = e.target.value;
                          setAttendees([...attendees]);
                        }}
                        required
                      />
                    </div>
                    <TrashIcon
                      className="lg:h-7 lg:w-7 h-5 w-5 text-red-600 hover:text-red-400 hover:scale-90"
                      onClick={() => {
                        setAttendees(attendees.filter((_, i) => i !== index));
                      }}
                    />
                  </div>
                ))}
                <PlusCircleIcon
                  onClick={() =>
                    setAttendees([
                      ...attendees,
                      {
                        eventID: "Hey",
                        name: "",
                        email: "",
                      },
                    ])
                  }
                  className="h-8 w-8 text-primary  hover:scale-105 transition-all ease-in-out"
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="text-white border disabled:bg-gray-500 disabled:shadow bg-buttercup flex items-center rounded-lg px-4 hover:shadow-lg h-10 space-x-2"
              >
                <RocketLaunchIcon className="h-4 w-4" aria-hidden="true" />
                <p className="text-xs lg:text-sm font-bold">
                  {loading ? `Saving...` : `Create Event`}
                </p>
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default withAuth(CreateEvent);
