<template>
  <div id="how-we-help">
      <div class="container">
          <h3>How we have helped</h3>
          <p>see how AI Foundation have promoted chnage locally and to the world</p>

          <div class="services-container">

              <!-- <div class="service-item" v-for="(service, index) in services" :key="index">
                  <div >
                      <span class="d-none">{{appIcon(service.icon)}}</span>
                        <div><font-awesome-icon :icon="iconNow" /></div>
                        <div class="service-name">{{service.name}}</div>
                        <div class="service-plus-ico">+</div>
                  </div>
              </div> -->

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
            // services:[
            //     {icon: faMapMarkedAlt, name: 'Find Place'},
            //     {icon: faChild, name: 'Tofoula'},
            //     {icon: faEye, name: 'Aa\'wen'},
            //     {icon: faMobileAlt, name: 'Fundraising'},
            //     {icon: faInfo, name: 'Omniyat'},
            //     {icon: faHandHoldingMedical, name: 'Zakat'},
            //     {icon: faHourglassHalf, name: 'Give Time'},
            // ]
        }
    },
    methods: {
        appIcon (ico) {
            this.iconNow = ico;
        }
    }
}
</script>
