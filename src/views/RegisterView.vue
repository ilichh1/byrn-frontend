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
            <h1 class="text-white">Registro</h1>
          </div>
        </div>
      </div>
    </div>
    <section class="container bg-white" id="register">
      <div class="row">
        <div class="col-md-8">
          <div class="mt-3 p-3">
            <p class="h4 mb-2 text-black"></p>
            <p class="mb-1 text-black" style="font-size : 20px">
              Con tu cuenta personal de BYRN tendrás acceso a:
              <br />
              <img class="mt-4" src="/images/heart.png" width="80px" />
              <label class="px-3">Guardar tus propiedades favoritas</label>
              <br />
              <img class="mt-3" src="/images/calendar.png" width="80px" />
              <label class="px-3">Agendar citas</label>
              <br />
              <img class="mt-3" src="/images/edit.png" width="80px" />
              <label class="px-3">Editar perfil</label>
            </p>
          </div>
        </div>
        <div class="col-md-4 p-3">
          <form @submit.prevent="onFormSubmit()" action="#" class="p-3" style="background: rgba(0,0,0, 0.2)">
            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="name">Nombre</label>
                <input v-model="form.name" type="text" id="name" class="form-control" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="last_namep">Apellidos</label>
                <input v-model="form.last_name" type="text" id="last_namep" class="form-control" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="phone-input">Teléfono</label>
                <input v-model="form.cellphone" type="text" id="phone-input" class="form-control" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="email">Correo</label>
                <input v-model="form.email" type="email" id="email" class="form-control" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12">
                <label class="text-black" for="subject">Contraseña</label>
                <input v-model="form.password" type="password" id="subject" class="form-control" />
              </div>
            </div>
            <div class="row form-group">
              <div class="col-md-12 d-flex justify-content-center">
                <input type="submit" value="Continuar" class="btn btn-primary py-2 px-4 text-white" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import endpoints from '../endpoints'
const { VUE_APP_BASE_URL: BASE_URL } = process.env

/*
 * @group Vistas
 * @vuese
 * Esta vista se le mostrará al usuario cuando el desee
 * registrarse en el sistema.
 */
export default {
  name: 'register-view',
  data: () => ({
    endpoints,
    form: {
      name: '',
      last_name: '',
      email: '',
      password: '',
      cellphone: '',
      address: 'CALLE ##, COLONIA, ESTADO, MUNICIPIO'
    }
  }),
  methods: {
    onFormSubmit () {
      const { createUser } = this.endpoints
      const postBody = {
        ...this.form
      }
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: postBody,
        url: `${BASE_URL}/${createUser}`
      }
      this.$http(options)
        .then(res => {
          if (res.status === 201) {
            this.$router.replace('/login')
          } else {
            alert('No se pudo registrar al usuario, intente de nuevo.')
            console.log(res)
          }
        })
    }
  }
}
</script>
