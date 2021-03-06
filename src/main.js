// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/lead/store'
import axios from 'axios'
import Notifications from 'vue-notification'

Vue.use(Notifications);
Vue.prototype.$http = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  axios: axios,
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
