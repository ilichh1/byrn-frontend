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
  isModalHidden: true,
  auth: authInitialState()
})

export const actions = {
  doLogout: 'doLogout',
  changeLoaderState: 'changeLoaderState'
}

export const mutations = {
  logout: 'logout',
  setLoaderState: 'setLoaderState'
}

export const getters = {
  isModalHidden: 'isModalHiddenGetter'
}

export const store = new Vuex.Store({
  state: initialState,
  actions: {
    [actions.doLogout]: ({ commit }) => new Promise((resolve, reject) => {
      commit(mutations.logout)
      resolve()
    }),
    [actions.changeLoaderState]: ({ commit }, loaderState) => new Promise((resolve) => {
      commit(actions.setLoaderState, loaderState)
    })
  },
  getters: {
    [getters.isModalHidden]: ({ isModalHidden }) => isModalHidden
  },
  mutations: {
    [mutations.logout] (state) {
      const newState = initialState()
      Object.keys(newState).forEach(key => {
        state[key] = newState[key]
      })
    },
    [mutations.setLoaderState] (state, newState) {
      state.isModalHidden = newState
    }
  },
  modules: {
    auth,
    estates
  },
  plugins: [new VuexPersistence().plugin]
})
