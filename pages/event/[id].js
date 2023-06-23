import Layout from "../../components/Layout";
import { navigation, userNavigation } from "../../components/Navigation";
import { TrashIcon } from "@heroicons/react/24/outline";
import { databases } from "../../components/Appwrite";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { withAuth } from "../../components/Auth";

function Event({ event }) {
  const router = useRouter()
  const modifiedNavigation = navigation.map((item) => ({
    ...item,
    current: item.name.toLowerCase() === "events" ? true : false,
  }));

  const deleteEvent = async () => {
    try {
     await databases.deleteDocument(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_COLLECTION_EVENT_ID,
        event.$id
      ).then(()=>router.push("/event/my_events"))
    } catch (error) {}
  };

  return (
    <Layout navigation={modifiedNavigation} userNavigation={userNavigation}>
      <div className="py-6">
        <div className="p-4 sm:p-6 md:p-12">
          <div className="flex justify-between">
            <p className="text-xl xl:text-xl font-semibold pb-4">Edit Event</p>
            <div className="flex space-x-4 ">
              <button
               onClick={deleteEvent}
               className="text-red-800 border border-red-700 flex items-center rounded-lg px-4 hover:shadow-lg h-10 space-x-2"
              >
                <TrashIcon className="h-4 w-4" aria-hidden="true" />
                <p className="text-xs lg:text-sm font-bold">Delete Event</p>
              </button>
              <button
                href="/"
                className="bg-[#00695c] hover:bg-[#03786a] text-white flex items-center rounded-lg px-4 shadow-lg h-10"
              >
                <p className="text-xs lg:text-sm ">Save event</p>
              </button>
            </div>
          </div>
          <form>
            <div className="w-full rounded-lg shadow-md border p-10 my-10">
              <p className="text-xl font-bold">General</p>
              <p className="text-sm border-b border-gray-200 pt-2 pb-3">
                Information about the event
              </p>
              <div className="flex py-4 items-center">
                <label className="w-1/4 font-bold text-sm">Title</label>
                <input
                  className="rounded-lg border w-1/3 py-2 px-3"
                  defaultValue={event.name}
                />
              </div>{" "}
              <div className="flex py-4 items-center">
                <label className="w-1/4 font-bold text-sm">Description</label>
                <textarea
                  className="rounded-lg border w-1/3 py-2 px-3"
                  defaultValue={event.description}
                />
              </div>{" "}        
            </div>
            <div className="w-full rounded-lg shadow-md border p-10 my-10">
              <p className="text-xl font-bold">About the event</p>
              <p className="text-sm border-b border-gray-200 pt-2 pb-3">
                Information about the event
              </p>
              <div className="flex py-4 items-center">
                <label className="w-1/4 font-bold text-sm">Location</label>
                <input
                  className="rounded-lg border w-1/3 py-2 px-3"
                  defaultValue={event.location}
                />
              </div>{" "}
              <div className="flex py-4 items-center">
                <label className="w-1/4 font-bold text-sm">Date</label>
                <input
                  className="rounded-lg border w-1/3 py-2"
                  type="datetime-local"
                  defaultValue={event.datetime}
                />
              </div>{" "}
              <div className="flex py-4 items-center">
                <label className="w-1/4 font-bold text-sm">Time</label>
                <input
                  className="rounded-lg border w-1/3 py-2 px-3"
                  defaultValue={new Date(event.datetime).getTime()}
                />
              </div>{" "}
            </div>{" "}
            <div className="flex space-x-4 ">
              <button
               onClick={deleteEvent}
                className="text-red-800 border border-red-700 flex items-center rounded-lg px-4 hover:shadow-lg h-10 space-x-2"
              >
                <TrashIcon className="h-4 w-4" aria-hidden="true" />
                <p className="text-xs lg:text-sm font-bold">Delete Event</p>
              </button>
              <button
                href="/"
                className="bg-[#00695c] hover:bg-[#03786a] text-white flex items-center rounded-lg px-4 shadow-lg h-10"
              >
                <p className="text-xs lg:text-sm ">Save event</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(Event);


export async function getServerSideProps(context) {
  const { id } = context.query;
  var event = {};
  const promise = databases.getDocument(
    process.env.NEXT_PUBLIC_DB_ID,
    process.env.NEXT_PUBLIC_COLLECTION_EVENT_ID,
    id
  );

  await promise.then(
    function (response) {
      event = response;
    },
    function (error) {
      console.log(error); // Failure
    }
  );

  return { props: { event } };
}
