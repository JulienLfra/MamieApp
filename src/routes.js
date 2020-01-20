import Family from "./components/contents/family.jsx";
import Profile from "./components/contents/tabs/profile.jsx";
import Events from "./components/contents/tabs/events.jsx";
import Management from "./components/contents/tabs/management.jsx";
import ManagementEditFamily from "./components/contents/tabs/managementEditFamily.jsx";
import EventsAddEvent from "./components/contents/tabs/eventsAddEvent.jsx";
import EventsEditEvent from "./components/contents/tabs/eventsEditEvent.jsx";

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
  },
  {
    path: "/management-edit-family/:family_id",
    name: "Edit Family",
    icon: "ni ni-rocket text-yellow",
    component: ManagementEditFamily,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/events-add-event",
    name: "Add Event",
    icon: "ni ni-rocket text-yellow",
    component: EventsAddEvent,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/events-edit-event",
    name: "Edit Event",
    icon: "ni ni-rocket text-yellow",
    component: EventsEditEvent,
    layout: "/admin",
    invisible: true
  }
];

export default routes;
