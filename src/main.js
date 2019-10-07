import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// Google Maps
import * as VueGoogleMaps from 'vue2-google-maps'
// Promise pollyfill
import 'es6-promise'
// store module
import { store } from './store'
// HighCharts
import HighchartsVue from 'highcharts-vue'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const { VUE_APP_BASE_URL: baseURL } = process.env
export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Application-Name': 'BYRN'
  }
})
const toggleLoader = (show) => {
  store.commit('setLoaderState', !show)
}
const requestLoaderInterceptor = axiosInstance.interceptors.request.use((request) => {
  toggleLoader(true)
  if (store.getters.isUserLoggedIn) {
    request.headers = {
      ...request.headers,
      'Authorization': `Bearer ${store.state.auth.token}`
    }
  }
  return request
}, (error) => {
  toggleLoader(false)
  return Promise.reject(error)
})

const responseLoaderInterceptor = axiosInstance.interceptors.response.use((response) => {
  toggleLoader(false)
  return response
}, (error) => {
  toggleLoader(false)
  return Promise.reject(error)
})

Vue.use(HighchartsVue)
Vue.use(VueAxios, axiosInstance)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAvliDTuIXcG0x9NQtrEJahaZ3is15mMRc'
  },
  /// / If you want to manually install components, e.g.
  /// / import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  /// / Vue.component('GmapMarker', GmapMarker)
  /// / then set installComponents to 'false'.
  /// / If you want to automatically install all the components this property must be set to 'true':
  installComponents: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
