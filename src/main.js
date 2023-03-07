import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.config.productionTip = false
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)

Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
