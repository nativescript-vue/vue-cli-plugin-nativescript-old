import Vue from 'nativescript-vue'
import App from './App.vue'

Vue.config.debug = true

new Vue({
  render: h => h(App)
}).$start()
