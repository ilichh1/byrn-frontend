<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-4">
              <h2 class="footer-heading text-black ">BYRN</h2>
              <p>Bienes y Raíces Nuño ® </p>
            </div>

            <div class="col-4">
              <h2 class="footer-heading text-black ">Contacto</h2>
              <p>byrn@gmail.com</p>
              <p>(33) 187766 ext.12</p>
            </div>
            <div class="col-4 d-flex flex-wrap">
              <h2 class="footer-heading text-black w-100">Enceuntranos en: </h2>
              <a href="#" class="px-3 pl-md-0 w-sm-100 w-md-25"><span class="icon-facebook"></span></a>
              <a href="#" class="pl-3 pr-3 w-sm-100 w-md-25"><span class="icon-twitter"></span></a>
              <a href="#" class="pl-3 pr-3 w-sm-100 w-md-25"><span class="icon-instagram"></span></a>
              <a href="#" class="pl-3 pr-3 w-sm-100 w-md-25"><span class="icon-linkedin"></span></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-component',
  data () {
    return {
      currentYear: 2019
    }
  }
}
</script>
