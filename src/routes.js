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
    name: "Famille",
    icon: "ni ni-satisfied text-primary",
    component: Family,
    layout: "/admin"
  },
  {
    path: "/events",
    name: "Evénement",
    icon: "ni ni-square-pin text-red",
    component: Events,
    layout: "/admin"
  },
  {
    path: "/management",
    name: "Gestion",
    icon: "ni ni-bullet-list-67 text-green",
    component: Management,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Profil",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/management-edit-family/:family_id",
    component: ManagementEditFamily,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/events-add-event",
    component: EventsAddEvent,
    layout: "/admin",
    invisible: true
  },
  {
    path: "/events-edit-event/:event_id",
    component: EventsEditEvent,
    layout: "/admin",
    invisible: true
  }
];

export default routes;
