import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShowSideNav: false,
  },
  getters: {
    isShowSideNav: state => {
      return state.isShowSideNav
    }
  },
  mutations: {
    toggleSideNav (state, isShowSideNav) {
      state.isShowSideNav = isShowSideNav
    }
  },
  actions: {
  },
  modules: {
  }
})
