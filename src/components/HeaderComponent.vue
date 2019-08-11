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
                <img src="/images/BYRN-LOGO.png" width="auto" height="64">
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
                    Terrenos
                  </router-link>
                </li>
                <li class="has-children border-right pr-4">
                  <a href="#">Acerca de</a>
                  <ul class="dropdown">
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Filosofia</a></li>
                  </ul>
                </li>
                <li>
                  <router-link to="/login" class="cta">
                    <span class="bg-primary text-white rounded">Iniciar Sesion</span>
                  </router-link>
                </li>
                <li class="has-children pr-4">
                  <a href="#">Usuario</a>
                  <ul class="dropdown">
                    <li><router-link to="/editp"><a href="#">Editar Perfil</a>

                  </router-link></li>
                    <li><a href="#">Mis Favoritos</a></li>
                    <li><a href="#">Cerrar Sesion</a></li>
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
export default {
  name: 'header-component'
}
</script>
