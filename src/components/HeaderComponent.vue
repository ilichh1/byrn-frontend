<template>
  <header>

    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>
    <section class="site-navbar container py-0 " role="banner">
      <!-- <div class="container"> -->
      <div class="row align-items-center">

        <div class="col-6 col-xl-2">
          <router-link to="/">
            <h1 class="mb-0 site-logo">
              <img id="logo" class="animated  flipInX faster " src="/images/BYRN-LOGO.png" width="auto" height="84"
                style="-webkit-filter:contrast(0%) brightness(0%);">
            </h1>
          </router-link>
        </div>

        <div class="col-12 col-md-10 d-none d-xl-block">
          <nav class="site-navigation position-relative text-right" role="navigation">

            <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
              <li class="active hvr-float-shadow">
                <router-link to="/">
                  Inicio
                </router-link>
              </li>
              <li>
                <router-link to="/states">
                  Propiedades
                </router-link>
              </li>
              <li class="hvr-float-shadow" v-if="!isUserLoggedIn ">
                <router-link to="/favorites">
                  Favoritos
                </router-link>
              </li>
              <li v-if="!isUserLoggedIn">
                <router-link to="/login" class="cta">
                  <span class="bg-primary text-white rounded hvr-float-shadow">Iniciar Sesion</span>
                </router-link>
              </li>
              <li v-if="isUserLoggedIn" class="has-children px-4">
                <a href="#">Usuario</a>
                <ul class="dropdown">
                  <li>
                    <router-link to="/editp">
                      <a href="#">Editar Perfil</a>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/favorites">
                      Mis Favoritos
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/dashboard/estate">
                      Subir propiedad
                    </router-link>
                  </li>
                  <li class="cursor-pointer">
                    <a @click.prevent="onLogOut()" href="#">Cerrar sesión</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div class="d-inline-block d-xl-none ml-auto py-3 col-6 text-right" style="position: relative; top: 3px;">
          <a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a>
        </div>
      </div>
      <!-- </div> -->
    </section>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { getters as authGetters } from '@/store-modules/auth/types.js'
import { actions as mainActions } from '@/store'

export default {
  name: 'header-component',
  computed: {
    ...mapGetters([
      authGetters.isUserLoggedIn
    ])
  },
  methods: {
    onLogOut () {
      this.logout()
        .then(() => this.$router.replace('/'))
    },
    ...mapActions({
      logout: mainActions.doLogout
    })
  }
}
</script>
<style>
#logo{
 -webkit-animation-duration: 10s;
  -webkit-animation-delay: 1s;
}
</style>
