import Vue from 'vue'
import App from '@/App.vue'
import { store } from "@/store/store";
import vuetify from './plugins/vuetify'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
