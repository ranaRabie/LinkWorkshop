<template>
    <header id="main-header">
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <div class="container">
                <a id="toggleSide" v-on:click="toggleSideNav()" v-bind:class="[isShowNav ? 'hide-nav' : 'show-nav']">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <b-navbar-brand>
                    <img alt="Vue logo" src="../assets/logo.png">
                </b-navbar-brand>

                <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav> -->

                <b-navbar-nav class="ml-auto align-items-center">
                    <b-nav-form id="header-search">
                        <div v-bind:class="{ 'show-search': isShowSearch }">
                            <b-form-input size="sm" v-show="isShowSearch" class="mr-sm-2" placeholder="Search"></b-form-input>
                            <b-button v-on:click="isShowSearch = !isShowSearch" size="sm" class="my-2 my-sm-0" type="button" v-b-tooltip.hover title="search"><span class="header-ico"><font-awesome-icon icon="search" /></span></b-button>
                        </div>
                    </b-nav-form>

                    <b-nav-item-dropdown left id="notifications-dropdown">
                        <template #button-content>
                            <span class="header-ico btn btn-sm" v-b-tooltip.hover title="Notifications"><font-awesome-icon icon="bell" /></span>
                        </template>
                        <span>Recent Notifications</span>
                        <b-dropdown-item href="#" class="notification-item">You have an upcoming appointment today! <span class="text-secondary">Check-in Now</span></b-dropdown-item>
                        <b-dropdown-item href="#" class="notification-item">Rate your last service appointment</b-dropdown-item>
                        <b-dropdown-item href="#" class="notification-item">Your payment request has been approved</b-dropdown-item>
                        <b-dropdown-item href="#" class="notification-item text-center">All Notifications <span><font-awesome-icon icon="arrow-right" /></span></b-dropdown-item>
                    </b-nav-item-dropdown>

                    <li id="header-user">
                        <img src="../assets/user.png" alt="">
                        <span>user name</span>
                    </li>

                    <b-nav-item-dropdown left id="settings-dropdown">
                        <template #button-content>
                            <span class="header-ico btn btn-sm" v-b-tooltip.hover title="Settings"><font-awesome-icon icon="cog" /></span>
                        </template>
                        <span>Language</span>
                        <div>
                            <b-dropdown-item href="#">English</b-dropdown-item>
                            <b-dropdown-item href="#">Arabic</b-dropdown-item>
                        </div>
                        
                        <span>Font Size</span>
                        <div class="font-container">
                            <b-dropdown-item href="#">A</b-dropdown-item>
                            <b-dropdown-item href="#">A</b-dropdown-item>
                            <b-dropdown-item href="#">A</b-dropdown-item>
                        </div>
                        <span>Account</span>
                        <div>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </div>
                        
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <!-- </b-collapse> -->
            </div>
        </b-navbar>
        
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return{
            isShowSearch: false,
            isShowNav: false, 
        }
    },
    methods:{
        toggleSideNav(){
            if(this.$store.state.isShowSideNav){
                this.$store.commit("toggleSideNav", false);
            }else{
                this.$store.commit("toggleSideNav", true);
            }
            this.isShowNav = this.$store.state.isShowSideNav
        }
    }
}
</script>