// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/api'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// 入口文件，vue的框架、根组件、路由设置、vue的实例都要在这里定义

Vue.prototype.$api = api //定义api，这个api是api.js，因为我们需要使用到user.js中定义的前后端交互的方法，而user导出到api里面，所以这里直接定义api
Vue.config.productionTip = false
Vue.use(Vuetify)  // 定义vue的Vuetify框架


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>'
})
