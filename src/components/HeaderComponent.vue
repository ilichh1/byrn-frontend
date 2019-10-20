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
    <section :style="{ backgroundColor: !isPageOnTop ? 'transparent' : '#35cdb8' }" class="site-navbar py-0 " role="banner">
      <!-- <div class="container"> -->
      <div class="row align-items-center nv-r">

        <div class="col-6 col-xl-2">
          <router-link to="/">
            <h1 class="mb-0 site-logo" id="logo">
              <!--
              <img id="logo" class="animated  flipInX faster " src="/images/BYRN-LOGO.png" width="auto" height="84"
                style="-webkit-filter:contrast(0%) brightness(0%);">
              -->
              REEL
            </h1>
          </router-link>
        </div>

        <div class="col-12 col-md-10 d-none d-xl-block">
          <nav class="site-navigation position-relative text-right" role="navigation">

            <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
              <li class="active">
                <router-link to="/">
                  Inicio
                </router-link>
              </li>
              <li>
                <router-link to="/states">
                  <span class="estates text-white rounded">Propiedades</span>
                </router-link>
              </li>
              <li>
                <router-link to="/favorites">
                  Mis Favoritos
                </router-link>
              </li>
              <li v-if="!isUserLoggedIn">
                <router-link to="/login" class="cta">
                  <span>Iniciar Sesión</span>
                </router-link>
              </li>
              <li v-if="isUserLoggedIn" class="has-children px-4">
                <a href="#">{{ getUser.name }}</a>
                <ul class="dropdown">
                  <li>
                    <router-link to="/editp">
                      <a href="#">Editar Perfil</a>
                    </router-link>
                  </li>
                  <li v-if="userIsAdmin">
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

// @group ComponentesCompartidos
// @vuese
// El header usado en *todas* las páginas
export default {
  name: 'header-component',
  data: () => ({
    isPageOnTop: false
  }),
  computed: {
    ...mapGetters([
      authGetters.isUserLoggedIn,
      authGetters.userIsAdmin,
      'getUser'
    ])
  },
  created() {
    window.addEventListener('scroll', this.onWindowScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onWindowScroll)
  },
  methods: {
    onWindowScroll(e) {
      if (!e) { return }
      const { target } = e
      let top  = window.pageYOffset || target.documentElement.scrollTop;
      if (top < 32) {
        this.isPageOnTop = false
        return;
      }
      this.isPageOnTop = true
    },
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
.nv-r {
  margin: 0;
}
#logo {
 -webkit-animation-duration: 10s;
  -webkit-animation-delay: 1s;
}
.estates {
  background-color: #35cdb8;
  padding: .4em;
}
.icon-menu {
  color: #35cdb8;
}
.site-navbar {
  transition: background 500ms ease-in-out;
}
</style>
