import Layout from "../../components/Layout";
import { navigation, userNavigation } from "../../components/Navigation";
import { EventCard } from "../../components/UI/EventCard";
import { PlusSmallIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { databases } from "../../components/Appwrite";
import Link from "next/link";
import { Query } from "appwrite";
import { account } from "../../components/Appwrite";
import { withAuth } from "../../components/Auth";

function MyEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nam, setNam] = useState("");
  const [name, setName] = useState("");
  const modifiedNavigation = navigation.map((item) => ({
    ...item,
    current: item.name.toLowerCase() === "events" ? true : false,
  }));

  const getEvents = async () => {
    await account.get().then((response) => {
      const promise = databases.listDocuments(
        process.env.NEXT_PUBLIC_DB_ID,
        process.env.NEXT_PUBLIC_COLLECTION_EVENT_ID,
        [Query.equal("owner", response.name)]
      );
      promise.then(
        function (response) {
          setEvents(response.documents);
          setLoading(false);
        },
        function (error) {
          setLoading(false);
        }
      );
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Layout navigation={modifiedNavigation} userNavigation={userNavigation}>
      <div className="py-6">
        <div className="p-4 sm:p-6 md:p-12">
          <div className="flex justify-between items-baseline">
            <p className="text-lg xl:text-3xl font-semibold pb-4">
              My Upcoming Events
            </p>
            <Link
              href="/event/create"
              className="bg-[#00695c] hover:bg-[#03786a] text-white flex items-center rounded-lg px-2 lg:px-4 shadow-lg py-2 "
            >
              <PlusSmallIcon
                className="lg:h-6 h-4 w-4 lg:w-6"
                aria-hidden="true"
              />
              <p className="text-xs lg:text-sm ">Add New Event</p>
            </Link>
          </div>
          {loading ? (
            <div className="flex flex-wrap items-start gap-5">
              {[...Array(4)].map((_,index) => (
                <div
                  className="rounded-lg shadow-md h-60 w-80 p-3 px-4 relative animate-pulse"
                  key={index}
                >
                  <div className="flex justify-between py-4">
                    <div className="rounded-lg bg-gray-100 h-8 w-20 "></div>
                    <div className="rounded-lg bg-gray-100 h-8 w-20 "></div>
                    <div className="rounded-lg bg-gray-100 h-8 w-20 "></div>
                  </div>
                  <div className="h-1/2 w-full bg-gray-100" />
                  <div className="bg-gray-100 h-8 w-20 absolute bottom-3 right-3  rounded-md justify-center items-center hover:bg-teal-900/10 cursor-pointer"></div>
                </div>
              ))}
            </div>
          ) : events.length != 0 ? (
            <div className="flex flex-wrap items-start gap-5">
              {events.map((event, index) => (
                <EventCard key={index}  event={event} />
              ))}
            </div>
          ) : (
            <p className="text-lg lg:text-lg text-gray-700">
              You don&lsquo;t have active events.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(MyEvents);
