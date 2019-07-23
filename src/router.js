import Vue from 'vue'
import Router from 'vue-router'

// Views
import Home from '@/views/HomeView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ '@/views/LoginView.vue')
      }
    },
    {
      path: '/states',
      name: 'states-listing',
      component: function () { 
        return import(/* webpackChunkName: "listing" */ '@/views/StatesListingView.vue')
      }
    },
    {
      path: '/details',
      name: 'state-details',
      component: function () { 
        return import(/* webpackChunkName: "details" */ '@/views/StateDetails.vue')
      }
    }
  ]
})
