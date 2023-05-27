import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import SignUp from "../pages/logIn/SignUp.vue";
import SignIn from "../pages/logIn/SignIn.vue";
import Home from "../pages/Home.vue";
import ComingSoon from "../pages/shared/Coming-soon.vue";
import SearchResult from "../pages/SearchResult.vue";
import Details from "../pages/Details.vue";
import CheckOut from "../pages/Checkout.vue";
import ErrorPage from "../pages/shared/ErrorPage.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import Welcome from "../components/dashboard/Welcome.vue";
import MyBookings from "../pages/Dashboard/MyBookings.vue";
import BecomeAHost from "../pages/Dashboard/BecomeAHost.vue";
import AllUsers from "../pages/Dashboard/AllUsers.vue";
import AllBookings from "../pages/Dashboard/AllBookings.vue";
import AddHomes from "../pages/Dashboard/AddHomes.vue";
import ManageHomes from "../pages/Dashboard/ManageHmes.vue";
import SrReturn from "../components/checkout/payment/SrReturn.vue";
import { nextTick } from "vue";

import UseAuthStore from "../store/AuthStore";
import { VueElement, computed } from "vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
import { getRole } from "../api/User";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/:pathMatch(.*)*",
         name: "NotFound",
         component: ErrorPage,
      },

      {
         path: "/",
         name: "defaultLayout",
         component: DefaultLayout,
         children: [
            {
               path: "/",
               component: Home,
               name: "home",
            },
            {
               path: "/sign-up",
               component: SignUp,
               name: "signUp",
            },
            {
               path: "/sign-in",
               component: SignIn,
               name: "signIn",
            },
            {
               path: "/coming-soon",
               component: ComingSoon,
               name: "comingSoon",
            },
            {
               path: "/search-result",
               component: SearchResult,
               name: "searchResult",
            },
            {
               path: "/service-details/:id",
               component: Details,
               name: "serviceDetails",
            },
            {
               path: "/checkout",
               component: CheckOut,
               name: "checkout",
               meta: { requiresAuth: true, title: "checkout" },
            },
            {
              path: "/sr-redirect",
              component: SrReturn,
              meta: { title: "sr-redirect",requiresAuth: true },
           },
         ],
      },

      //dashboard route
      {
         path: "/dashboard",
         name: "DashboardLayout",
         component: DashboardLayout,
         meta: { requiresAuth: true },
         children: [
            {
               path: "",
               component: Welcome,
               name: "welcome",
            },
            {
               path: "/dashboard/my-bookings",
               component: MyBookings,
               name: "myBookings",
            },
            {
               path: "/dashboard/become-host",
               component: BecomeAHost,
               name: "becomeAHost",
            },
            {
               path: "/dashboard/all-users",
               component: AllUsers,
               name: "allUsers",
               meta: { requiresAdmin: true },
            },
            {
               path: "/dashboard/all-bookings",
               component: AllBookings,
               name: "allBookings",
               meta: { requiresAdmin: true },
            },
            {
               path: "/dashboard/add-homes",
               component: AddHomes,
               name: "addHomes",
            },
            {
               path: "/dashboard/manage-homes",
               component: ManageHomes,
               name: "manageHomes",
            },
         ],
      },
   ],
});

router.beforeEach(async (to, from, next) => {
   NProgress.start();
   const auth = getAuth(app);

   const authStore = UseAuthStore();
   authStore.routeLoader = true;

   // console.log('testttt', await authStore.adminAccess());

   if (to.meta.requiresAuth && !(await authStore.authenticated()))
      next({ name: "signIn" });
   else if (
      to.meta.requiresAdmin &&
      (await authStore.adminAccess()) !== "admin"
   )
      next({ name: "signIn" });
   else next();
});

// router.afterEach((to) => {
// });

router.afterEach((to, from) => {
   nextTick(() => {
      document.title = to.meta.title || "checkout";
   });
   NProgress.done();
   const authStore = UseAuthStore();
   authStore.routeLoader = false;
});

export default router;
