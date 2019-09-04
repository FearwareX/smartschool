// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "./assets/normalize/normalize.css"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css';
import App from './App'
Vue.config.productionTip = false
import router from './router'
import axios from 'axios';
import Vuex from 'vuex'

Vue.use(MintUI)
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://106.12.189.19';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios({
//   url: '/lf/testAllLost',
//   method: 'post',
//   params: {
//     lflag: '失主'
//   }
// }).then(res => {
//   console.log(res)
// })