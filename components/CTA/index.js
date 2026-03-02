import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="contact"
      className="mx-3 lg:mx-10 my-10 rounded-3xl bg-gray-900 text-white px-5 py-16 lg:px-20 lg:py-24"
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Ready to Power Africa&apos;s Carbon Future?
        </h2>
        <p className="mt-6 text-lg text-white/70 font-light leading-relaxed">
          Whether you&apos;re an investor looking for high-impact climate tech,
          a buyer seeking verified African carbon credits, or a farmer ready to
          earn from your sustainable practices — we want to hear from you.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/investors"
          className="rounded-full bg-buttercup px-7 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-buttercup/90 transition-colors duration-200"
        >
          Schedule an Investor Call
        </Link>
        <a
          href="mailto:jammutsami@gmail.com?subject=Carbon%20Credits%20Inquiry"
          className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/20 transition-colors duration-200"
        >
          Request Carbon Credits
        </a>
        <Link
          href="/login"
          className="rounded-full bg-white/10 px-7 py-3.5 text-sm font-semibold text-white border border-white/20 hover:bg-white/20 transition-colors duration-200"
        >
          Join ZeroCarbon
        </Link>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <div>
            <p className="text-sm text-white/40 font-light">Email</p>
            <a
              href="mailto:jammutsami@gmail.com"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              jammutsami@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm text-white/40 font-light">Kenya Office</p>
            <p className="text-sm text-white/80">Riverside Square, Westlands</p>
          </div>
          <div>
            <p className="text-sm text-white/40 font-light">Ghana Office</p>
            <p className="text-sm text-white/80">Accra</p>
          </div>
        </div>
      </div>
    </section>
  );
}
