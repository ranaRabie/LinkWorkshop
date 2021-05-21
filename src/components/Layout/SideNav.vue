<template>
    <div id="side-nav" v-show="isShowNav" >
      <div id="nav-social">
        <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']"/></a>
        <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'facebook']"/></a>
        <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
        <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']"/></a>
        <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
      </div>
      <nav id="nav-list">
        <ul class="nav-list">
          <li>
              <router-link to="/" class="h3">Home</router-link>
          </li>
          <li>
            <a class="h3">About us</a>
            <ul>
              <li>
                <router-link to="#">Who are us</router-link>
              </li>
              <li>
                <router-link to="#">Why us?</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="h3">News</a>
            <ul>
              <li>
                <router-link to="/news">News</router-link>
              </li>
              <li>
                <router-link to="#">Events</router-link>
              </li>
            </ul>
          </li>
          <li>
            <a class="h3">Careers</a>
            <ul>
              <li>
                <a href="#">Opportunities</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="nav-list">
          <li>
            <router-link to="#" class="h3">Contact us</router-link>
          </li>
          <li>
            <router-link to="#" class="h3">Site Map</router-link>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>

export default {
  name: 'SideNav',
  data(){
    return {
      isShowNav: false,
    }
  },
  watch: {
    '$store.state.isShowSideNav': function() {
      this.isShowNav = this.$store.state.isShowSideNav;
    }
  }
  
}
</script>