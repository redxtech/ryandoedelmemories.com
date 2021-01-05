import Vue from 'vue'
import VueImg from 'v-img'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueImg, {
  altAsTitle: true,
  sourceButton: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
