import {
  mutations as authMutations,
  actions as authActions,
  getters as authGetters
} from './types'

export const initialState = () => ({
  user: null,
  token: null
})

const actions = {
  [authActions.doLogin] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const { user, token } = payload
      commit(authMutations.setUser, user)
      commit(authMutations.setToken, token)
      resolve()
    })
  }
}

const getters = {
  [authGetters.isUserLoggedIn] ({ token }) {
    return !!token
  },
  [authGetters.getUser] ({ user }) {
    return user
  },
  [authGetters.userIsAdmin] ({ user }) {
    return user.roles.map(r => r.id).includes(1)
  }
}

const mutations = {
  [authMutations.setUser] (state, user) {
    state.user = user
  },
  [authMutations.setToken] (state, token) {
    state.token = token
  }
}

export default {
  state: initialState,
  actions,
  getters,
  mutations
}
