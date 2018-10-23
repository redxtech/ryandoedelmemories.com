import Vue from 'vue'
import VueForm from 'vue-form'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueForm)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
