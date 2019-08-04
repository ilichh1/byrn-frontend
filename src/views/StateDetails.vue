<template>
<div class="site-wrap bg-white">
  <div
    class="site-blocks-cover inner-page-cover overlay"
    style="background-image: url(images/summer-grass.jpg);"
    data-aos="fade"
    data-stellar-background-ratio="0.5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <h1 class="text-white">PROPIEDAD</h1>
        </div>
      </div>
    </div>
  </div>
  <section class="container py-4 bg-white" id="estate-detail">
    <div class="row">
      <div class="col-md-8">
        <h2 class="text-black ">Titulo de la propiedad</h2>
        <hr>
        <div class="row">
          <div class="col-12  block-13">
        <div class="owl-carousel nonloop-block-13">

          <img
            v-for="(image, idx) in estateImages"
            :key="`imagen-${idx}`"
            :src="image.src" :alt="image.desc">
        </div>
          </div>
        </div>

        <div class=" mt-5 p-3 " style="background: rgba(0,0,0, .1);">
          <p class="h4 mb-2 text-black">Descripcion del terreno </p>
          <p class="mb-1 text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur unde reprehenderit
            aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt
            consequatur. Amet dolores excepturi earum unde iusto
          </p>
        </div>
      </div>

      <div class="col-md-4 p-3">
        <h2 class="text-black ">Contacta al anunciante</h2>

        <form class="p-2  mt-3" style="background: rgba(0,0,0, 0.1)" >
          <div class="row form-group">
            <div class="col-md-12">
              <label class="text-black" for="email">Correo</label>
              <input type="email" id="email" class="form-control">
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-12">
              <label class="text-black" for="phone">Teléfono</label>
              <input type="text" id="phone" class="form-control">
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-12 ">
              <label class="text-black" for="message">Mensaje</label>
              <textarea rows="6" class="form-control"></textarea>
            </div>
          </div>
          <div class="row form-group">
            <div class="col-md-12">
              <input type="submit" value="Enviar" class="btn btn-primary py-2 px-4 text-white">
            </div>
          </div>
        </form>
           <h3 class="text-black mb-0 mt-4">Agenda tu cita </h3>
         <date-picker class="col-md-12 mt-2"  v-model="datetime" lang="es" type="datetime" format="[El día: ]YYYY-MM-DD [a las: ]HH:mm a" width="500"
        placeholder="Selecciona Fecha y Hora" confirm></date-picker>
        <div class="d-flex justify-content-center">
         <input type="submit" value="Agendar" class=" mt-3 btn btn-primary py-2 px-4 text-white">
      </div>
      </div>
    </div>
  </section>
</div>
  <!--div class="site-wrap">
    <div class="site-blocks-cover inner-page-cover overlay" style="background-image: url(images/summer-grass.jpg);"
      data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center justify-content-left text-left">
          <div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
            <div class="row justify-content-left mt-5">
              <div class="col-md-8 text-left">
                <h1>Titulo de Terreno</h1>
                <hr style="background:white">
                <form action="#" class="p-5 bg-white">
                  <div class="col-md-12">
                    <label class=" mb-5 text-black">CARRUSEL</label>
                  </div>
                </form>
                <br>
                <form action="#" class="p-1 bg-white" style="border-radius:20px">
                  <div class="col-md-12">
                    <p class=" mb-5 text-black">Descripcion del terreno </p>
                    <label class=" mb-1 text-black"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur unde reprehenderit
                      aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt
                      consequatur. Amet dolores excepturi earum unde iusto</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row align-items-left justify-content-left text-left">
          <div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
            <div class="row justify-content-center mt-5">
              <div class="col-md-8 text-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-md-7 mb-5" data-aos="fade">
                    </div>
                  </div>
                  <h2 class="mb-1 text-white">Contactar Anunciante</h2>
                  <form action="#" class="p-3 bg-white">
                    <div class="row form-group">
                      <div class="col-md-12">
                        <label class="text-black" for="email">Correo</label>
                        <input type="email" id="email" class="form-control">
                      </div>
                    </div>
                    <div class="row form-group">
                      <div class="col-md-12">
                        <label class="text-black" for="phone">Teléfono</label>
                        <input type="text" id="phone" class="form-control">
                      </div>
                    </div>
                    <div class="row form-group">
                      <div class="col-md-12 ">
                        <label class="text-black" for="message"> Mensaje </label>
                        <input type="text" id="message" class="form-control" style="height :200px">
                      </div>
                    </div>
                    <div class="row form-group">
                      <div class="col-md-12">
                        <input type="submit" value="Enviar" class="btn btn-primary py-2 px-4 text-white">
                      </div>
                    </div>
                  </form>
                  <router-link to="/"><img src="/images/calendar.png" width="50px" height="50px" />
                    <h2 class="text-black"> Agenda tu cita </h2>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div-->
</template>

<script>
// import PropertyListingComponent from '@/components/shared-components/PropertyListingComponent'
import DatePicker from 'vue2-datepicker'
// import { start } from 'repl';

export default {
  name: 'states-listing-component',
  data () {
    return {
      estateImages: [
        { src: 'images/img_1.jpg', desc: 'Fachada' },
        { src: 'images/img_3.jpg', desc: 'Cuarto No. 1' },
        { src: 'images/img_4.jpg', desc: 'Cochera' }
      ],
      date: '',
      time: '',
      timePickerOptions: {
        start: '00:00',
        step: '00:30',
        end: '23:30'
      },
      datetime: ''

    }
  },
  mounted () {
    console.log('Se monto este componente en el HTML')
    this.siteCarousel()
  },
  methods: {

    siteCarousel () {
      if ($('.nonloop-block-13').length > 0) {
        $('.nonloop-block-13').owlCarousel({
          center: true,
          items: 1,
          loop: true,
          stagePadding: 5,
          margin: 12,
          smartSpeed: 1000,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: false,
          nav: true,
          navText: ['<span class="icon-keyboard_arrow_left";><span>', '<span class="icon-keyboard_arrow_right"></span>'],
          responsive: {
            600: {
              margin: 30,
              nav: true,
              items: 1
            },
            1000: {
              margin: 30,
              nav: true,
              items: 1
            },
            1200: {
              margin: 30,
              nav: true,
              items: 1
            }
          }
        })
      }
    }

  },
  components: {
    DatePicker
  }

}
</script>

<style>
</style>
