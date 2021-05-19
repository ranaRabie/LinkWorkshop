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
                <a href="#">Who are us</a>
              </li>
              <li>
                <a href="#">Why us?</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="h3">News</a>
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Events</a>
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
            <a href="#" class="h3">Contact us</a>
          </li>
          <li>
            <a href="#" class="h3">Site Map</a>
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