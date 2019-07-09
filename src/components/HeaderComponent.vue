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
            <h1 class="mb-0 site-logo">
              <img src="images/BYRN-LOGO.png" width="auto" height="64">
            </h1>
          </div>
          <div class="col-12 col-md-10 d-none d-xl-block">
            <nav class="site-navigation position-relative text-right" role="navigation">

              <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
                <li class="active"><a href="index.html">Inicio</a></li>
                <li><a href="listings.html">Terrenos</a></li>
                <li class="has-children">
                  <a href="about.html">Acerca de</a>
                  <ul class="dropdown">
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Filosofia</a></li>
                  </ul>
                </li>
                <li><a href="blog.html">Blog</a></li>
                <li class="mr-5"><a href="contact.html">Contact</a></li>

                <li class="ml-xl-3 login"><a href="login.html"><span class="border-left pl-xl-4"></span>Iniciar Sesion</a></li>

                <li><a href="register.html" class="cta"><span class="bg-primary text-white rounded">Registrar</span></a></li>
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
