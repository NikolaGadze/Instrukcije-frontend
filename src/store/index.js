import Vue from 'vue'
import Vuex from 'vuex'
import api from "@/plugins/api";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    saveUser(state, user) {
      state.user = user
    }
  },
  actions: {
    getUser(context) {
      api.get('user').then(response => {
        // Save user to store
        context.commit('saveUser', response.data)
      })
    }
  },
  modules: {
  }
})