import Vue from 'vue'
import VueForm from 'vue-form'
import VueImg from 'v-img'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueForm)
Vue.use(VueImg, {
  altAsTitle: true,
  sourceButton: true
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
