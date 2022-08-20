import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import LoginAs from "../views/LoginAs.vue";
import Signup from "../views/Signup.vue";
import SignupAs from "../views/SignupAs.vue";
import UserCreate from "../views/UserCreate.vue";
import UserUpdate from "../views/UserUpdate.vue";
import UserReview from "../views/UserReview.vue";
import SolDesignerMap from "../views/SolDesignerMap.vue"
import DMevaluate from "../views/DMevaluate.vue"
import DMassign from "../views/DMassign.vue"
import DMedit from "../views/DMedit.vue"
import Manager from "../views/Manager.vue"
import MobileDropDown from "../views/MobileDropDown.vue"
import UserEditRequest from "../views/UserEditRequest.vue"
import MapRequests from "../views/MapRequests.vue"
import Assign from '../views/Assign.vue'
import ReturnedRequest from '../views/ReturnedRequest.vue'
import ResetPassword from '../views/ResetPassword.vue'
// import store from "../store"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/loginAs",
    name: "LoginAs",
    component: LoginAs,
    props: true
  },
  {
    path: "/signupAs",
    name: "SignupAs",
    component: SignupAs,
  },
  {
    path: "/signup/user",
    name: "User",
    component: Signup,
  },
  {
    path: "/signup/Demand Manager",
    name: "Demand Manager",
    props: true,
    component: Signup,
  },
  {
    path: "/signup/Solution designer",
    name: "Solution Designer",
    props: true,
    component: Signup,
  },
  {
    path: "/signup/Manager",
    name: "Manager",
    props: true,
    component: Signup,
  },
  {
    path: "/create",
    name: "UserCreate",
    component: UserCreate,
  },
  {
    path: "/update",
    name: "UserUpdate",
    component: UserUpdate,
  },
  {
    path: "/review",
    name: "UserReview",
    component: UserReview,
  },
  {
    path: "/map",
    name: "SolDesignerMap",
    component: SolDesignerMap,
  },
  {
    path: "/evaluate",
    name: "DMevaluate",
    component: DMevaluate,
  },
  {
    path: "/edit",
    name: "DMedit",
    component: DMedit,
  },
  {
    path: "/assign",
    name: "DMassign",
    component: DMassign,
  },
  {
    path: '/manager',
    name: 'Manage',
    component: Manager
  },
  {
    path: '/logout',
    name: 'MobileDropDown',
    component: MobileDropDown
  },
  {
    path: '/EditRequest',
    name: 'UserEditRequest',
    component: UserEditRequest,
    props: true
  },
  {
    path: '/mapRequest',
    name: 'MapRequests',
    component: MapRequests
  },
  {
    path: '/assignDesigner',
    name: 'Assign',
    component: Assign
  },
  {
    path: '/reviewRequest',
    name: 'ReturnedRequest',
    component: ReturnedRequest
  },
  {
    path: '/password-reset/:token',
    name: 'ResetPassword',
    component: ResetPassword
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
