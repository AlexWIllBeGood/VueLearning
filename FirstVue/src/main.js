// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Lazy from './components/Lazy.vue'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import qs from 'qs'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 改写原型属性
Vue.prototype.$ajax = axios
Vue.prototype.qs = qs

// Vue.use(VueAxios, axios)
// 两种方式注册全局控件

// 1】直接写自定义控件
Vue.component('SimpleTemplate', {
  template: '<h1>自定义组件</h1>'
})
// 2】注册已存在的控件
Vue.component('Lazy', Lazy)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
