import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCogs, faCodeBranch, faChartBar } from '@fortawesome/free-solid-svg-icons'

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

library.add(faChartBar, faCogs, faCodeBranch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(HighchartsVue)
Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB-EQhrThzt8vt3LirSZHuRMkDJj6tbG7o'
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
