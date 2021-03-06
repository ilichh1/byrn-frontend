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
      component: Home
    },
    {
      path: '/login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ '@/views/LoginView.vue')
      }
    },
    {
      path: '/states',
      component: function () {
        return import(/* webpackChunkName: "listing" */ '@/views/StatesListingView.vue')
      }
    },
    {
      path: '/dashboard',
      component: function () {
        return import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/DashboardHomeView.vue')
      },
      children: [
        {
          path: '',
          redirect: 'profile'
        },
        {
          path: 'profile',
          component: () => import(/* webpackChunkName: "listing" */ '@/views/dashboard/children/ProfileFormView.vue')
        },
        {
          path: 'estate',
          component: () => import(/* webpackChunkName: "listing" */ '@/views/dashboard/children/UploadEstateFormView.vue')
        },
        {
          path: 'estates',
          component: () => import(/* webpackChunkName: "estates-crud-main" */ '@/components/estates-crud/ContainerComponent.vue'),
          children: [
            {
              path: '', // The default path is used for the listing component
              component: () => import(/* webpackChunkName: "estates-listing" */ '@/components/estates-crud/EstatesListingComponent.vue')
            },
            {
              path: 'edit',
              component: () => import(/* webpackChunkName: "estates-edit" */ '@/components/estates-crud/EstatesEditComponent.vue')
            },
            {
              path: 'new',
              component: () => import(/* webpackChunkName: "estates-new" */ '@/components/estates-crud/EstatesCreateComponent.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/details/:id',
      name: 'state-details',
      component: function () {
        return import(/* webpackChunkName: "details" */ '@/views/StateDetails.vue')
      }
    },
    {
      path: '/register',
      name: 'register',
      component: function () {
        return import(/* webpackChunkName: "register" */ '@/views/RegisterView.vue')
      }
    },
    {
      path: '/editp',
      name: 'edit-profile',
      component: function () {
        return import(/* webpackChunkName: "editar-perfil" */ '@/views/EditProfileView.vue')
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import(/* webpackChunkName: "favoritos" */ '@/views/FavoritesView.vue')
    }
  ]
})
