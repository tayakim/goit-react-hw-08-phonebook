import { lazy } from "react";

export const mainroutes = [
  //  {
  //   path: "/",
  //   name: "Home",
  //   exact: true,
  //   component: lazy(() => import("../auth/AuthForm")),
  // },
  {
    path: "/signup",
    name: "SignUp",
    exact: false,
    component: lazy(() => import("../auth/AuthForm")),
    isPrivate: false,
    restricted: true,
  },
  {
    path: "/signin",
    name: "SignIn",
    exact: false,
    component: lazy(() => import("../auth/AuthForm")),
    isPrivate: false,
    restricted: true,
  },
  {
    path: "/contacts",
    name: "Contacts",
    exact: false,
    component: lazy(() => import("../../component/contacts/Contacts")),
    isPrivate: true,
    restricted: false,
  },
];
