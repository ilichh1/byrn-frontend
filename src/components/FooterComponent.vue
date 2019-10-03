<template>
  <footer class="site-footer">
    <div class="container">

         <div class="row align-items-center justify-content-center text-center">
            <div class="col-4">
              <h2 class="footer-heading text-white ">BYRN</h2>
              <p class="text-white">Bienes y Raíces Nuño ® </p>
            </div>

            <div class="col-md-4">
              <h2 class="footer-heading text-white ">Encuéntranos en: </h2>
              <a target="_blank" href="https://www.facebook.com/BienesYRacices/?modal=admin_todo_tour" class="pl-0 pr-3 text-white"><span class="icon-facebook"></span></a>
              <a target="_blank" href="https://twitter.com/BinesByrn" class="pl-3 pr-3"><span class="icon-twitter text-white"></span></a>
              <a target="_blank" href="https://www.instagram.com/bienesbyrn/?hl=es-la" class="pl-3 pr-3 text-white"><span class="icon-instagram"></span></a>

            </div>
             <div class="col-12">
              <h2 class="footer-heading text-white ">Contacto</h2>
              <p class= "text-white">
                  contactobyrn@gmail.com
                  <br>
                  (33) 187766 ext.12
              </p>
            </div>
          </div>
        </div>

    </div>
  </footer>
</template>

<script>
// @group ComponentesCompartidos
// @vuese
// El footer usado en *todas* las páginas
export default {
  name: 'footer-component',
  data () {
    return {
      currentYear: 2019
    }
  }
}
</script>
