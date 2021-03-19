import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      {userId: 'user1', password: 'password123'},
      {userId: 'user2', password: 'password123'},
      {userId: 'user3', password: 'password123'},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
