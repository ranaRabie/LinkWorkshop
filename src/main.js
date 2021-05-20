import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCog, faSearch, faArrowRight, faCheck, faShareAlt} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCalendar, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog, faBell, faSearch, faArrowRight, faCheck, faCalendar, faHeart, faShareAlt, faTwitter, faFacebook, faLinkedin, faYoutube, faInstagram)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
