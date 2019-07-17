import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const welcomePage=()=>import("views/welcomePage/index.vue");
const indexPage=() =>import("views/indexPage/index.vue");
const login=()=>import("views/Login/index.vue");
const example=() =>import("components/exampleEc/index.vue");



export default new Router({
  routes: [
    {//欢迎界面
      path: "/",
      name: "welcomePage",
      component: welcomePage
    },
    {//主界面
      path: "/index",
      name: "index",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: indexPage,
      children: [{
            path: '/',
            name: 'example',
            component: example
        }]
    },
    {//登录界面
      path: "/login",
      name: "login",
      component: login
    },
  ]
});
