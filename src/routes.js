import Family from "./components/contents/family.jsx";
import Profile from "./components/contents/tabs/profile.jsx";
import Events from "./components/contents/tabs/events.jsx";
import Management from "./components/contents/tabs/management.jsx";


var routes = [
  {
    path: "/index",
    name: "Family",
    icon: "ni ni-satisfied text-primary",
    component: Family,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "Events",
    icon: "ni ni-square-pin text-red",
    component: Events,
    layout: "/admin"
  },
  {
    path: "/management",
    name: "Management",
    icon: "ni ni-bullet-list-67 text-green",
    component: Management,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  }
];

export default routes;
