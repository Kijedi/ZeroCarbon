import {
    CalendarIcon,  
    HomeIcon,
    UserIcon,
  } from "@heroicons/react/24/outline";

export const navigation = [  
  {
    name: "Events",
    icon: HomeIcon,
    current: false,
    children: [
      { name: "My Events", href: "/event/my_events" },
      { name: "Create An Event", href: "/event/create" },
    ],
  },
    // { name: "Attendees", icon: CalendarIcon, current: false, href: "/attendees" },
    { name: "Profile", icon: UserIcon, current: false, href: "/profile" },
  ];

  export const userNavigation = [
    { name: "Your Profile", href: "/profile" },
    { name: "Sign out", href: "#" },
  ];