import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './plugins/vue-component'
import './plugins/vue-directive'
import './plugins/vue-mixin'
import './plugins/vue-filter'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
