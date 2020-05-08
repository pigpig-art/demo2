import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/components/Login';
import Home from '@/components/Home';
import Welcome from '@/components/Welcome';
import User from '@/components/user/User';
import Buycart from '@/components/user/Buycart';



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
  ,
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import("@/components/About.vue")
  // },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      { path: '/welcome', component: Welcome },
      { path: '/user', component: User },
      { path: '/buycart', component: Buycart},
    ],
    redirect: '/welcome'
  },

];

const router = new VueRouter({
  routes,
  mode:'history'
});

// 挂载路由导航守卫--路径 token
// 1.to将要访问的路径
// 2.from从那个路径跳转而来
// 3.next是一个函数，表示放行有两种方式
//  next()--放行  next('/login')--强制跳转路径
// router.beforeEach((to, from, next) => {
//   if (to.path==='/login') return next();
//   // 获取token
//   const tokenStr=window.sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
//   next()
// })




export default router;
