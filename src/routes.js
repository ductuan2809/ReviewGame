
//import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
//import Map from "views/Map.js";
//import Notifications from "views/Notifications.js";
//import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
//import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

import Login from "auth/Login";
import Register from "auth/Register";
import ForgotPass from "auth/ForgotPass";
import ResetPassword from "auth/ResetPassword";
import Detail from "views/GameDetail/Detail";
import Dashboard from "views/Dashboard";
import DetailAdd from "views/DetailAdd";
import ManageUser from "views/ManageUser";

const authRoutes = [

]


var routes = [
  // { path: "/reset-password", component: ResetPassword },
  // { path: "/login", component: Login },
  // { path: "/forgot-password", component: ForgotPass },
  // { path: "/register", component: Register },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "Login",
    icon: "tim-icons icon-chart-pie-36",
    component: Login,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },

  {
    path: "/register",
    name: "Register",
    rtlName: "Register",
    icon: "tim-icons icon-bell-55",
    component: Register,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },

  {
    path: "/resetpassword",
    name: "ResetPass",
    rtlName: "ResetPass",
    icon: "tim-icons icon-atom",
    component: ResetPassword,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },

  {
    path: "/forgotpass",
    name: "Forgot Password",
    rtlName: "Forgot Password",
    icon: "tim-icons icon-single-02",
    component: ForgotPass,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },

  {
    path: "/games",
    name: "Games",
    rtlName: "Games",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
    rtllayout: "/rtl",
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },

  {
    path: "/manage-games",
    name: "Manage-games",
    rtlName: "Mangae-games",
    icon: "tim-icons icon-atom",
    component: TableList,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },
  {
    path: "/manage-user",
    name: "Manage-games",
    rtlName: "Mangae-games",
    icon: "tim-icons icon-atom",
    component: ManageUser,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "User Profile",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },
  {
    path: "/detail",
    name: "Detail",
    rtlName: "Detail",
    icon: "tim-icons icon-puzzle-10",
    component: Detail,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },
  
  {
    path: "/add-games",
    name: "Add-games",
    rtlName: "Add-games",
    icon: "tim-icons icon-puzzle-10",
    component: DetailAdd,
    adminlayout: "/admin",
    guestlayout: "/guest",
    userlayout: "/user",
  },
 
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl",
  // },
];
export default  routes ;
