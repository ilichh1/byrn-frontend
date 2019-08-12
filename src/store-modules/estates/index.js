import {
  mutations as estatesMutations,
  actions as estatesActions,
  getters as estateGetters
} from './types'
import endpoints from '@/endpoints'
import { axiosInstance as http } from '@/main'
import axios from 'axios'
import { estateMapFunction } from '@/utils'

export const initialState = () => ({
  favorites: [12]
})

const mutations = {
  [estatesMutations.addFavorite] ({ favorites }, estateId) {
    favorites.push(estateId)
  },
  [estatesMutations.removeFavorite] ({ favorites }, favoriteIndex) {
    favorites.splice(favoriteIndex, 1)
  }
}

const actions = {
  [estatesActions.saveFavorite]: ({ commit, state }, estateId) => new Promise((resolve, reject) => {
    if (state.favorites.includes(estateId)) {
      reject('Esta propiedad ya esta en favoritos.')
      return
    }
    commit(estatesMutations.addFavorite, estateId)
    resolve()
  }),
  [estatesActions.deleteFavorite]: ({ commit, state }, estateId) => new Promise((resolve, reject) => {
    const estateIndex = state.favorites.indexOf(estateId)
    if (estateIndex === -1) {
      reject('Esta propiedad no esta en favoritos')
      return
    }
    commit(estatesMutations.removeFavorite, estateIndex)
  }),
  [estatesActions.getAllFavorites]: ({ commit, state }) => new Promise((resolve) => {
    const { favorites } = state
    if (favorites.length === 0) {
      resolve([])
      return
    }
    const favoritesFromApi = []
    const estatesPromises = []
    favorites.forEach(f => {
      estatesPromises.push(http.get(`/${endpoints.estates}/${f}`))
    })
    axios.all(estatesPromises)
      .then(res => {
        resolve(res.map(({ data }) => estateMapFunction(data)))
      })
  })
}

const getters = {
  [estateGetters.isEstateInFavorites]: ({ favorites }) => (estateId) => favorites.includes(estateId)
}

export default {
  state: initialState,
  mutations,
  actions,
  getters
}