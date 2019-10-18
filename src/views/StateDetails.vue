<template>
  <div class="site-wrap bg-white">
    <!--
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
    </div> -->
    <section class="container py-4 bg-white" id="estate-details">
      <div class="row">
        <div class="col-md-8">
          <h2 class="text-black">{{ estate.name }}</h2>
          <hr>
          <div class="row">
            <div class="col-12 block-13">
              <ByrnImageCarousel :images="estateImages"/>
            </div>
          </div>

          <ByrnEstateDetails :estate="estate"/>
        </div>

        <div class="col-md-4 cg">
          <form v-if="!isLoggedIn" class="p-2 mt-3 contact-form">
            <h2 v-if="!isLoggedIn" class="text-black ">Contacta al agente</h2>
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
                <input type="submit" value="Enviar" class="btn submit-button py-2 px-4 text-white" />
              </div>
            </div>
          </form>
          <div v-if="isLoggedIn" class="mt-4">
            <h3 class="text-black mb-3">Agenda tu cita</h3>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Tipo de cita</label>
              <select v-model="appointment.appoiment_type" class="form-control" id="exampleFormControlSelect1">
                <option value="null" selected disabled>Seleccione...</option>
                <option value="Compraventa">Compraventa</option>
                <option value="Informacion">Informacion</option>
                <option value="Recorrido">Recorrido</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div class="form-group">
              <label for="location-appointment">Lugar de encuentro</label>
              <input v-model="appointment.location" class="form-control" type="text" name="appointment-location" id="location-appointment" placeholder="Oficinas de BYNR">
            </div>
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
              <input @click.prevent="onSubmitDate()" type="submit" value="Agendar" class="mt-3 btn submit-button py-2 px-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DatePicker from 'vue2-datepicker'
import endpoints from '../endpoints'
import ByrnImageCarousel from '@/components/shared-components/ImageCarousel.vue'
import { getters as authGetters } from '@/store-modules/auth/types'
import ByrnEstateDetails from '@/components/shared-components/ByrnEstateDetails.vue'

const { VUE_APP_BASE_URL: BASE_URL } = process.env

/*
 * @group Vistas
 * @vuese
 * Este componente es el detalle de una propiedad. Es la vista que se
 * muestra después de seleccionar una propiedad desde el listado o desde
 * algún carrusel o la sección de favoritos.
 */
export default {
  name: 'states-listing-component',
  data () {
    return {
      estate: {
        images: []
      },
      appointment: {
        date: '',
        time: '',
        location: '',
        appoiment_type: ''
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
            '<span class="icon-keyboard_arrow_left"><span>',
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
    },
    clearAppointmentFields () {
      this.appointment.date = ''
      this.appointment.time = ''
      this.appointment.location = ''
      this.appointment.appoiment_type = 'null'
    },
    onSubmitDate () {
      const { id: customer_id } = this.currentUser
      const { id: estate_id } = this.estate
      const requestBody = {
        ...this.appointment,
        start_time: this.appointment.time,
        customer_id,
        estate_id
      }
      this.$http.post('/api/appoiments', requestBody)
        .then(res => {
          if (res.status === 201) {
            alert('Su cita fue agendada con exito, espere confirmación. Gracias')
            this.clearAppointmentFields()
          } else {
            console.log(res)
            alert('Datos de la cita incorrectos, por favor intente de nuevo.')
          }
        })
        .catch(() => alert('Datos de la cita incorrectos, por favor intente de nuevo.'))
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: authGetters.isUserLoggedIn,
      'currentUser': authGetters.getUser
    }),
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
    ByrnImageCarousel,
    ByrnEstateDetails
  }
}
// console.log(datetime);
</script>

<style>
.cg {
  margin-top: 2.4em;
}
.contact-form {
  /* background-color: #83E8DA; */
  border: 1px solid #ced4da;
  border-radius: 4px;
}
.submit-button {
  background-color: #405474 !important;
  border-radius: 4px;
}
</style>
