import { PencilSquareIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { databases } from "../Appwrite";
import { Query } from "appwrite";
export const EventCard = ({ event }) => {
 
  const [confirmed, setConfirmed] = useState(0);
  const [pending, setPending] = useState(0);
  const [declined, setDeclined] = useState(0);
  const [maybe, setMaybe] = useState(0);
  const getStats = async () => {
    try {
      await databases
        .listDocuments(process.env.NEXT_PUBLIC_DB_ID, process.env.NEXT_PUBLIC_COLLECTION_ATTENDEE_ID, [
          Query.equal("eventID", event.$id),
          Query.equal("rsvp", 1),
        ])
        .then((response) => setConfirmed(response.total));

      await databases
        .listDocuments(process.env.NEXT_PUBLIC_DB_ID, process.env.NEXT_PUBLIC_COLLECTION_ATTENDEE_ID, [
          Query.equal("eventID", event.$id),
          Query.equal("rsvp", 2),
        ])
        .then((response) => setDeclined(response.total));

      await databases
        .listDocuments(process.env.NEXT_PUBLIC_DB_ID, process.env.NEXT_PUBLIC_COLLECTION_ATTENDEE_ID, [
          Query.equal("eventID", event.$id),
          Query.equal("rsvp", 3),
        ])
        .then((response) => setMaybe(response.total));

      await databases
        .listDocuments(process.env.NEXT_PUBLIC_DB_ID, process.env.NEXT_PUBLIC_COLLECTION_ATTENDEE_ID, [
          Query.equal("eventID", event.$id),
          Query.equal("rsvp", 0),
        ])
        .then((response) => setPending(response.total));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  return (    
      <div className="rounded-lg shadow-lg h-auto lg:w-80 w-full py-8 px-4  lg:mx-0 relative">
        <div className="flex justify-between py-4">
          <div className="rounded-lg bg-green-700/10 text-primary text-xs px-3 py-1 font-semibold">
            {confirmed} RSVP
          </div>
          <div className="rounded-lg bg-yellow-500/10 text-buttercup text-xs px-3 py-1 font-semibold">
            {maybe} Maybe
          </div>
          <div className="rounded-lg bg-red-500/10 text-red-500 text-xs px-3 py-1 font-semibold">
            {declined} Declined
          </div>
        </div>
        <p className="font-bold pt-10 text-xl">{event.name}</p>
        <p className="font-semibold text-gray-400 text-xs">{event.datetime}</p>
        <div className="flex space-x-1  py-5">
          <CheckBadgeIcon className="h-4 w-4 text-primary" />
          <p className="font-semibold text-gray-400 text-xs">
            {declined + confirmed + maybe + pending} Invites sent
          </p>
        </div>
        <div className="absolute bottom-3 right-3 flex space-x-2 ">
          <Link
            href={`/event/attendees/${event.$id}`}
            className="flex space-x-2 text-sm font-medium border px-3 py-1 rounded-md justify-center items-center hover:bg-teal-900/10 cursor-pointer group"
          >
            <UserGroupIcon className="h-4 w-4 text-gray-500" />
            <p className="text-gray-800 hidden	group-hover:block">View Attendees</p>
          </Link>
          <Link
            href={`/event/${event.$id}`}
            className="flex space-x-2 text-sm font-medium border px-3 py-1 rounded-md justify-center items-center hover:bg-teal-900/10 cursor-pointer group"
          >
            <PencilSquareIcon className="h-4 w-4 text-gray-500" />
            <p className="text-gray-800 hidden	group-hover:block">Edit</p>
          </Link>
        </div>
      </div>
  
  );
};
