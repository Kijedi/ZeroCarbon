import { Client, Account, Databases, Functions } from "appwrite";


export const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_PROJECT_URL)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);

export const sendMail = async (attendee, event) => {
  const guest = {
    email: attendee.email,
    name: attendee.name,
    attendeeID: attendee.$id,
    eventName: event.name,
    eventOwner: event.owner,
  };
  await functions.createExecution(
    process.env.NEXT_PUBLIC_FUNCTION_MAIL_ID,
    JSON.stringify(guest)
  );
};
