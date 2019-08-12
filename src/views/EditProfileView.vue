<template>
  <div class="site-wrap bg-white">
    <div class="site-blocks-cover inner-page-cover overlay" style="background-image: url(images/summer-grass.jpg);"
      data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 text-center">
            <h1 class="text-white">Editar Perfil </h1>
          </div>
        </div>
      </div>
    </div>
    <section class="container bg-white" id="register">
      <div class="row">
        <div class="col-md-12">
          <div class="mt-3 p-3">
            <p class="h4 mb-2 text-black"></p>
            <form>
              <div class="form-group">
                <label for="name">Nombre</label>
                <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Nombre">
              </div>
              <div class="form-group">
                <label for="last_name">Apellido</label>
                <input v-model="form.last_name" type="text" class="form-control" id="lastname" placeholder="Apellido">
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="email">Correo</label>
                  <input v-model="form.mail" type="email" class="form-control" id="email" placeholder="Correo">
                </div>
                <div class="form-group col-md-6">
                  <label for="password">Contraseña</label>
                  <input v-model="form.password" type="password" class="form-control" id="password"
                    placeholder="Contraseña">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="street">Calle</label>
                  <input v-model="form.street" type="text" class="form-control" id="street" placeholder="Calle">
                </div>
                <div class="form-group col-md-3">
                  <label for="outside_number">Número</label>
                  <input v-model="form.outside_number" type="text" class="form-control" id="outside_number"
                    placeholder="Número">
                </div>
                <div class="form-group col-md-3">
                  <label for="neighborhood">Colonia</label>
                  <input v-model="form.neighborhood" type="text" class="form-control" id="neighborhood"
                    placeholder="Colonia">
                </div>

                <div class="form-group col-md-6">
                  <label for="cellphone">Teléfono</label>
                  <input v-model="form.cellphone" type="text" class="form-control" id="cellphone"
                    placeholder="Teléfono">
                </div>
                <div class="form-group col-md-6">
                  <label for="type_user">Quiero...</label>
                  <select v-model="form.type_user" id="type_user" class="form-control">
                    <option selected>Comprar</option>
                    <option>Vender</option>
                  </select>
                </div>

              </div>
              <div class="d-flex justify-content-center">
                <button type="submit " class="btn btn-primary justify-content-center">Editar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import endpoints from '../endpoints'
const { VUE_APP_BASE_URL: BASE_URL } = process.env
export default {
  data: () => ({
    endpoints,
    form: {
      name: '',
      last_name: '',
      email: '',
      password: '',
      street: '',
      outside_number: '',
      neighborhood: '',
      cellphone: '',
      type_user: ''
    }
  }),
  mounted () {
    // console.log(process.env)
  },
  methods: {
    onFormSubmit () {
      const { createUser } = this.endpoints
      const postBody = {
        ...this.form
      }
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        data: postBody,
        url: `${BASE_URL}/${createUser}`
      }
      this.$http(options)
        .then(res => {
          console.log('RESPUESTA DE LA API: ', res)
        })
    }
  }
}
</script>
<style>

</style>
