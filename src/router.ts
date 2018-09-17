import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Bid from "./views/Bid.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Logout from "./views/Logout.vue";
import Forget from "./views/Forget.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/bid",
      name: "Bid",
      component: Bid
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    },
    {
      path: "/forget",
      name: "forget",
      component: Forget
    },
    {
      path: "/logout",
      name: "Logout",
      component: Logout
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
