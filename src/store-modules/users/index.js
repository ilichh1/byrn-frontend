import {
  mutations as usersMutations,
  actions as usersActions,
  getters as usersGetters
} from './types'
import endpoints from '@/endpoints'
import { axiosInstance as http } from '@/main'
// import axios from 'axios'

export const initialState = () => ({
  users: []
})

const mutations = {
  [usersMutations.fetchUsersSuccess] (state, users) {
    state.users = users
  }
}

const actions = {
  [usersActions.fetchAllUsers]: ({ commit }) => new Promise((resolve, reject) => {
    http.get(`${endpoints.users}`)
      .then(({ data }) => {
        commit(usersMutations.fetchUsersSuccess, data)
        resolve('Users fetched successfully from BRYN API.')
      })
      .catch(e => {
        console.error('An error happenede while trying to fetch the users list', e)
        reject(e)
      })
  })
}

const getters = {

}

export default {
  state: initialState,
  mutations,
  actions,
  getters
}
