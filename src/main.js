import Vue from 'vue'
import VueForm from 'vue-form'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueForm)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
