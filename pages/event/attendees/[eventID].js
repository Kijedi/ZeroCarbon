import Layout from "../../../components/Layout";
import { navigation, userNavigation } from "../../../components/Navigation";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { databases, client } from "../../../components/Appwrite";
import { useEffect, useState } from "react";
import { Query } from "appwrite";
import { status } from "../../../components/Table/rsvp";
import { Avatars } from "appwrite";
import { withAuth } from "../../../components/Auth";

function Attendees({ attendees }) {
  const modifiedNavigation = navigation.map((item) => ({
    ...item,
    current: item.name.toLowerCase() === "attendees" ? true : false,
  }));

  const [name, setName] = useState("")
  const eventName = async () => setName(await databases.getDocument(
    process.env.NEXT_PUBLIC_DB_ID,
    process.env.NEXT_PUBLIC_COLLECTION_EVENT_ID,
    attendees[0].eventID
  ))

useEffect(()=>{
  eventName()
},[name])
  return (
    <Layout navigation={modifiedNavigation} userNavigation={userNavigation}>
      <div className="p-4 sm:p-6 md:p-12">
        <div className="flex justify-between">
          <p className="text-xl xl:text-xl font-semibold pb-4">Attendees</p>
          <button
            href="/"
            className="bg-[#00695c] hover:bg-[#03786a] text-white flex items-center rounded-lg px-4 shadow-lg h-10"
          >
            <p className="text-xs lg:text-sm ">Add Attendee</p>
          </button>
        </div>
        <p className="text-xl xl:text-xl font-semibold pb-4 text-gray-500">Event: <span className="text-primary">{name.name}</span></p>

        <div className="flex justify-between my-5">
          <div className="flex items-center space-x-3">
            <p>Show</p>
            <select name="entries" id="entries" className="rounded-md text-xs">
              <option value="10" className="text-sm py-1">
                10 Entries
              </option>
              <option value="20" className="text-sm py-1">
                20 Entries
              </option>
              <option value="30" className="text-sm py-1">
                30 Entries
              </option>
            </select>
          </div>
          <div>
            <input
              type="text"
              className="px-3 py-1 border rounded-md border-primary"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-primary/10 text-white">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 "
                      >
                        <div className="flex space-x-4 items-center">
                          <p>Name</p>
                          <ArrowsUpDownIcon className="h-4 w-4 text-gray-700 hover:text-buttercup" />
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 flex-row"
                      >
                        <div className="flex space-x-4 items-center">
                          <p>Email</p>
                          <ArrowsUpDownIcon className="h-4 w-4 text-gray-700 hover:text-buttercup" />
                        </div>
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        <div className="flex space-x-4 items-center">
                          <p>RSVP</p>
                          <ArrowsUpDownIcon className="h-4 w-4 text-gray-700 hover:text-buttercup" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {attendees.map((person) => (
                      <tr key={person.$id}>
                        <td className="whitespace-nowrap py-4 px-3 text-sm ">
                          <div className="flex items-center">
                            <div className="h-8 w-8 flex-shrink-0">
                              <img
                                className="h-8 w-8 rounded-full"
                                src={
                                  new Avatars(client).getInitials(person.name)
                                    .href
                                }
                                alt=""
                              />
                            </div>
                            <div className="ml-4 text-xs font-medium text-gray-900">
                              {person.name}
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                          {person.email}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-xs">
                          {status(person.rsvp)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default withAuth(Attendees);

// }
export async function getServerSideProps(context) {
  const { eventID } = context.query;

  var attendees = [];
  await databases
    .listDocuments(process.env.NEXT_PUBLIC_DB_ID, process.env.NEXT_PUBLIC_COLLECTION_ATTENDEE_ID, [
      Query.equal("eventID", eventID),
    ])
    .then(
      function (response) {
        attendees = response.documents;
        console.log(attendees);
      },
      function (error) {
        console.log(error); // Failure
      }
    );

  return { props: { attendees } };
}
