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
import { faCog, faSearch, faArrowRight, faCheck, faShareAlt, faAngleLeft, faAngleRight, faSort, faMapMarkedAlt, faChild, faEye, faMobileAlt, faInfo, faHandHoldingMedical, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCalendar, faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCog, faBell, faSearch, faArrowRight, faCheck, faCalendar, faHeart, faShareAlt, faAngleLeft, faAngleRight, faSort, faMapMarkedAlt, faChild, faEye, faMobileAlt, faInfo, faHandHoldingMedical, faHourglassHalf, faTwitter, faFacebook, faLinkedin, faYoutube, faInstagram)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    returnArticleDate: function (dateTime) {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
      const date = new Date(dateTime);
      return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    },
    returnArticleCategoryName(catId, categories){
      let categoryObj =  categories.find((category) => category.id === catId);  
      return categoryObj.name;
    },
  }
})

new Vue({
  myOption: 'hello!',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
