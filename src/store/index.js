import Vue from 'vue'
import Vuex from 'vuex'
import actions from './mutations'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{},
  mutations:mutations,
  actions:actions
})