
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
import Detail from "views/Detail";

const authRoutes = [

]


var routes = [
  // { path: "/reset-password", component: ResetPassword },
  // { path: "/login", component: Login },
  // { path: "/forgot-password", component: ForgotPass },
  // { path: "/register", component: Register },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: Dashboard,
  //   layout: "/admin",
  // },
  {
    path: "/login",
    name: "Login",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Login,
    layout: "/admin",
  },

  {
    path: "/register",
    name: "Register",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Register,
    layout: "/admin",
  },

  {
    path: "/resetpassword",
    name: "ResetPass",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: ResetPassword,
    layout: "/admin",
  },

  {
    path: "/forgotpass",
    name: "Forgot Password",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: ForgotPass,
    layout: "/admin",
  },

  {
    path: "/icons",
    name: "Games",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin",
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
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/detail",
    name: "Detail",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: Detail,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
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
