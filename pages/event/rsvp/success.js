import Link from "next/link";

export default function Rsvp() {

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
                      className="h-28 w-auto"
                      src="/images/logo.png"
                      alt="letsevent"
                    />
                  </div>
                  <h1 className="text-xl lg:text-4xl text-primary font-bold pt-10">
                    Thank you for confirming
                  </h1>{" "}
                  <h1 className="text-xs font-semibold text-gray-500">
                    Powered by{" "}
                    <Link
                      className="text-md lg:text-lg font-bold hover:underline cursor-pointer"
                      href="/"
                    >
                      LetsEvent
                    </Link>{" "}
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
