import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store'
import ElementUI, { Button, Select, Card  } from 'element-ui';
import * as VueGoogleMaps from 'vue2-google-maps'

import 'element-ui/lib/theme-chalk/index.css';
// import './assets/style/main.css'
import './scss/main.scss'


Vue.use(ElementUI) 
Vue.use(Select)
Vue.use(Button)
Vue.use(Card)

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places',
  },
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
