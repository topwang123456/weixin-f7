// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'framework7'
import framework7Vue from 'framework7-vue'
import 'framework7/dist/css/framework7.ios.min.css'
import 'framework7/dist/css/framework7.ios.colors.min.css'
import '../static/iconfont/iconfont.css'
import '../static/iconfont/iconfont'
Vue.use(framework7Vue)
import store from './store'
import './network'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import zh from './lang/zh-CN'
import en from './lang/en-US'
const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'zh-CN': zh,
    'en-US': en
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  framework7: {
    root: '#app',
    routes: router
  },
  template: '<App/>',
  components: {App}
})
