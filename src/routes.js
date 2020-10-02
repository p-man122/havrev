/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/Profile.js";
import Maps from "views/Maps.js";
import Register from "views/Register.js";
import Login from "views/Login.js";
import Tables from "views/Tables.js";
import Icons from "views/Icons.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Add Admin",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Admins",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Add Product",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Products",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Payments",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/index",
    name: "Transactions",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
/*   {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
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
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  } */
];
export default routes;
