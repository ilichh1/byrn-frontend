import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

// Auth state
import { initialState as authInitialState } from '@/store-modules/auth'
import auth from '@/store-modules/auth'
import estates from '@/store-modules/estates'


Vue.use(Vuex)

const initialState = () => ({
  appName: 'BYRN',
  auth: authInitialState()
})

export const actions = {
  doLogout: 'doLogout'
}

export const mutations = {
  logout: 'logout'
}

export const store = new Vuex.Store({
  state: initialState,
  actions: {
    [actions.doLogout]: ({ commit }) => new Promise((resolve, reject) => {
      commit(mutations.logout)
      resolve()
    })
  },
  getters: { },
  mutations: {
    [mutations.logout] (state) {
      const newState = initialState()
      Object.keys(newState).forEach(key => {
        state[key] = newState[key]
      })
    }
  },
  modules: {
    auth,
    estates
  },
  plugins: [new VuexPersistence().plugin]
})
