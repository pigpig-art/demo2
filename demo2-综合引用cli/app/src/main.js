import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 全局样式
import "./assets/css/global.css"

// 字体图标
import './assets/css/iconfont.css'

// 引入ui组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

// 引入axios
import axios from 'axios'
Vue.prototype.$http = axios;
// 配置接口地址
axios.defaults.baseURL = '/api';
// 请求拦截器
axios.interceptors.request.use(config=>{
  // console.log(config);
  config.headers.Authorization=window.sessionStorage.getItem('token');
  return config
})

//  引入echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
