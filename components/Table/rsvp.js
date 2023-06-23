export const status = (rsvp) => {
  switch (rsvp) {
    case 0:
      return (
        <span className="inline-flex rounded-lg bg-gray-500/10 text-gray-900  px-4 py-1 text-xs font-semibold leading-5">
          Pending
        </span>
      );
    case 1:
      return (
        <span className="inline-flex rounded-lg bg-green-700/10 text-primary px-4 py-1 text-xs font-semibold leading-5 ">
          Confirmed
        </span>
      );
    // …
    case 2:
      return (
        <span className="inline-flex rounded-lg  bg-red-500/10 text-red-500 px-4 py-1 text-xs font-semibold leading-5 ">
          Declined
        </span>
      );
    case 3:
      return (
        <span className="inline-flex rounded-lg bg-yellow-500/10 text-buttercup  px-4 py-1 text-xs font-semibold leading-5">
          Maybe
        </span>
      );

    default:
      return (
        <span className="inline-flex rounded-lg bg-green-100 px-4 py-1 text-xs font-semibold leading-5 text-green-800">
          {person.rsvp}
        </span>
      );
  }
};
