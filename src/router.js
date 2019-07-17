import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {//欢迎界面
      path: "/",
      name: "home",
      component: ()=>import("views/welcomePage/index.vue")
    },
    {//主界面
      path: "/index",
      name: "index",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "views/indexPage/index.vue")
    },
    {//登录界面
      path: "/login",
      name: "login",
      component: ()=>import("views/Login/index.vue")
    },
  ]
});
