<template>
  <div id="how-we-help">
      <div class="container">
          <h3>How we have helped</h3>
          <p>see how AI Foundation have promoted chnage locally and to the world</p>

          <div class="services-container">

              <div class="service-item" v-for="(service, index) in services" :key="index">
                  <div >
                        <div v-if="service.iconId === 0"><font-awesome-icon icon="map-marked-alt" /></div>
                        <div v-else-if="service.iconId === 1"><font-awesome-icon icon="child" /></div>
                        <div v-else-if="service.iconId === 2"><font-awesome-icon icon="eye" /></div>
                        <div v-else-if="service.iconId === 3"><font-awesome-icon icon="mobile-alt" /></div>
                        <div v-else-if="service.iconId === 4"><font-awesome-icon icon="info" /></div>
                        <div v-else-if="service.iconId === 5"><font-awesome-icon icon="hand-holding-medical" /></div>
                        <div v-else><font-awesome-icon icon="hourglass-half" /></div>
                        <div class="service-name">{{service.name}}</div>
                        <div class="service-plus-ico">+</div>
                  </div>
              </div>

          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { faMapMarkedAlt, faChild, faEye, faMobileAlt, faInfo, faHandHoldingMedical, faHourglassHalf } from '@fortawesome/free-solid-svg-icons'


export default {
    name: 'HowWeHelp',
    data(){
        return {
            iconNow: '',
            services:[
                {iconId: 0, name: 'Find Place'},
                {iconId: 1, name: 'Tofoula'},
                {iconId: 2, name: 'Aa\'wen'},
                {iconId: 3, name: 'Fundraising'},
                {iconId: 4, name: 'Omniyat'},
                {iconId: 5, name: 'Zakat'},
                {iconId: 6, name: 'Give Time'},
            ]
        }
    },
    // methods: {
    //     appIcon (ico) {
    //         this.iconNow = ico;
    //     }
    // }
}
</script>
