import { useRouter } from "next/router";
import Team from "../components/UI/Team";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div className="lg:flex pt-10 px-4 w-screen lg:h-screen h-fit lg:py-48 relative items-center justify-center flex-row-reverse lg:flex-row">
        <div className="absolute inset-x-0 top-0 z-0 lg:h-full h-96 object-cover w-screen bg-primary/40">
          <img
            src="/images/banner.jpg"           
            className="w-full object-cover"
          />
        </div>
        {/* <div className="absolute inset-x-0 top-0 lg:h-full h-96 object-cover w-screen  bg-black/40"></div>        */}
      </div>
      <div>
        <div className="lg:px-40 px-10 py-10">
          <div className="flex justify-around items-center border-b-2">
            <div className="flex flex-col lg:py-40 py-24 lg:w-1/2">
              <p className="text-xl lg:text-4xl font-black text-primary pb-2">
                Intuitive Event Creation
              </p>
              <p className="text-lg  lg:text-lg text-black/50 pt-4">
                LetsEvent App simplifies event creation with its intuitive
                interface. Organizers can easily input event details such as the
                event name, date, time, location, and description. With a
                user-friendly event creation process, organizing an event
                becomes a breeze.{" "}
              </p>
            </div>
            <img
              className="h-96 w-auto lg:block hidden"
              src="/images/about/1.png"
            />
          </div>{" "}
          <div className="flex justify-around items-center border-b-2">
            <img
              className="h-96 w-auto lg:block hidden"
              src="/images/about/2.png"
            />
            <div className="flex flex-col lg:py-40 py-24 lg:w-1/2">
              <p className="text-xl lg:text-4xl font-black text-primary pb-2">
                Seamless Guest Management
              </p>
              <p className="text-lg  lg:text-lg text-black/50 pt-4">
                LetsEvent App offers a comprehensive guest management system.
                Organizers can effortlessly invite attendees by sending email
                notifications. Organizers can also track invitation statuses and
                monitor RSVPs.
              </p>
            </div>
          </div>{" "}
          <div className="flex justify-around items-center border-b-2">
            <div className="flex flex-col lg:py-40 py-24 lg:w-1/2">
              <p className="text-xl lg:text-4xl font-black text-primary pb-2">
                Real-time RSVP Tracking
              </p>
              <p className="text-lg  lg:text-lg text-black/50 pt-4">
                LetsEvent App provides real-time RSVP tracking, empowering
                organizers with up-to-date attendance information. As attendees
                respond to event invitations, organizers can instantly view RSVP
                statuses, including confirmed, declined, or pending responses.
              </p>
            </div>
            <img
              className="h-96 w-auto lg:block hidden"
              src="/images/about/3.png"
            />
          </div>{" "}
          <div className="flex justify-around items-center border-b-2">
            <img
              className="h-96 w-auto lg:block hidden"
              src="/images/about/4.png"
            />
            <div className="flex flex-col lg:py-40 py-24 lg:w-1/2">
              <p className="text-xl lg:text-4xl font-black text-primary pb-2">
                Event Analytics and Insights
              </p>
              <p className="text-lg  lg:text-lg text-black/50 pt-4">
                LetsEvent App empowers organizers with comprehensive event
                analytics and insights. Through the app&lsquo;s event page,
                organizers can gain valuable information about attendee RSVP
                trends.
              </p>
            </div>
          </div>{" "}

          <Team/>
          <p className="text-center pt-10">
            Made with ❤️&nbsp; by&nbsp;
            <span className="hover:underline">
              <a href="https://kijedi.best">Wesley.</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
