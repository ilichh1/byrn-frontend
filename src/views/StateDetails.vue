<template>
  <div class="site-wrap bg-white">
    <div
      class="site-blocks-cover inner-page-cover overlay"
      style="background-image: url(/images/summer-grass.jpg);"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
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
          <h2 class="text-black">{{ estate.name }}</h2>
          <hr>
          <div class="row">
            <div class="col-12 block-13">
              <ByrnImageCarousel :images="estateImages"/>
            </div>
          </div>

          <div class="mt-5 p-3" style="background: rgba(0,0,0, .1);">
            <p class="h4 mb-2 text-black">Descripcion del terreno</p>
            <p class="mb-1 text-black">
              <!-- Descripcion -->
              {{ estate.description }}
              <br>
              Precio: $  {{ estate.seller_price }}
              <br>
              Descripcion: {{ estate.description }}
              <br>
              Superficie: {{ estate.surface_area }} m2
              <br>
              Precio por metro: $  {{ estate.meter_price }}
              <br>
              Latitud: {{ estate.latitude }}
              <br>
              Longitud: {{ estate.longitude }}
              <br>
              Domicilio: {{ estate.address }}
              <br>

              </p>
          </div>
        </div>

        <div class="col-md-4 p-3">
          <h2 class="text-black">Contacta al anunciante</h2>

          <form class="p-2 mt-3" style="background: rgba(0,0,0, 0.1)">
            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="email">Correo</label>
                <input v-model="form.email" type="email" id="email" class="form-control" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="phone">Teléfono</label>
                <input v-model="form.phone" type="text" id="phone" class="form-control" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="message">Mensaje</label>
                <textarea v-model="form.message" rows="6" class="form-control"></textarea>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <input type="submit" value="Enviar" class="btn btn-primary py-2 px-4 text-white" />
              </div>
            </div>
          </form>
          <h3 class="text-black mb-0 mt-4">Agenda tu cita</h3>
          <date-picker
            class="col-10 mt-2"
            v-model="datetime"
            @change="onDateTimeChange()"
            lang="es"
            type="datetime"
            :time-picker-options="timePickerOptions"
            format="[El día: ]YYYY-MM-DD [a las: ]HH:mm a"
            width="500"
            placeholder="Selecciona Fecha y Hora"
            confirm
          ></date-picker>

          <div class="d-flex justify-content-center">
            <input type="submit" value="Agendar" class="mt-3 btn btn-primary py-2 px-4 text-white" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import PropertyListingComponent from '@/components/shared-components/PropertyListingComponent'
import DatePicker from 'vue2-datepicker'
import endpoints from '../endpoints'
import ByrnImageCarousel from '@/components/shared-components/ImageCarousel.vue'
const { VUE_APP_BASE_URL: BASE_URL } = process.env

export default {
  name: 'states-listing-component',
  data () {
    return {
      estate: {
        images: []
      },
      appointment: {
        date: '',
        time: ''
      },
      form: {
        email: '',
        phone: '',
        message: ''
      },
      date: '',
      time: '',
      timePickerOptions: {
        start: '07:00',
        step: '01:00',
        end: '21:00'
      },
      datetime: ''
    }
  },
  mounted () {
    const { id } = this.$route.params
    const { estates } = endpoints
    this.$http.get(`${BASE_URL}/${estates}/${id}`)
      .then(({ data: estate }) => {
        this.estate = estate
        /*
        return {
          id: this.estate.id,
          name: this.estate.name,
          description: this.estate.description,
          images: this.estate.images.map(o => o.url),
          seller_price: this.estate.seller_price,
          surface_area: this.estate.surface_area,
          meter_price: this.estate.meter_price,
          latitude: this.estate.latitude,
          longitude: this.estate.longitude,
          address: this.estate.address,
          first_page_url: this.estate.first_page_url
        }
        */
      })
  },
  methods: {
    onDateTimeChange () {
      if (this.appointment.time <= 13) {
        this.appointment.time = this.datetime.getHours() + ' pm'
      } else {
        this.appointment.time = this.datetime.getHours() + ' am'
      }
      this.appointment.date = this.datetime.getFullYear() + '-' + this.datetime.getMonth() + '-' + this.datetime.getDate()
    },
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
          navText: [
            '<span class="icon-keyboard_arrow_left";><span>',
            '<span class="icon-keyboard_arrow_right"></span>'
          ],
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
  computed: {
    estateImages () {
      try {
        return this.estate.images.map(o => o.url)
      } catch (e) {
        return ['/images/img_1.jpg']
      }
    }
  },
  components: {
    DatePicker,
    ByrnImageCarousel
  }
}
// console.log(datetime);
</script>

<style>
</style>
