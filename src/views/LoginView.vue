<template>
  <div class="site-wrap">
    <div
      class="site-blocks-cover inner-page-cover overlay"
      style="background-image: url(images/summer-grass.jpg);"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
            <div class="row justify-content-center mt-5">
              <div class="col-md-8 text-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-md-7 mb-5" data-aos="fade"></div>
                  </div>
                  <h2 class="mb-1 text-white">Iniciar Sesión</h2>
                  <form @submit.prevent="onLogin()" class="p-3" style="background: rgba(255,255,255, 0.4)">
                    <div class="row form-group">
                      <div class="col-md-12">
                        <label class="text-black" for="email">Correo</label>
                        <input  v-model="form.email" type="email" id="email" class="form-control" />
                      </div>
                    </div>
                    <div class="row form-group">
                      <div class="col-md-12">
                        <label class="text-black" for="subject">Contraseña</label>
                        <input  v-model="form.password" type="password" id="subject" class="form-control" />
                      </div>
                    </div>
                    <div class="row form-group">
                      <div class="col-12">
                        <p class="text-black">
                          ¿Aún no tienes cuenta? &emsp;
                          <router-link class="text-white" to="/register">Regístrate</router-link>
                        </p>
                      </div>
                    </div>
                    <div class="row form-group">
                      <div class="col-md-12">
                        <input
                          type="submit"
                          value="Ingresar"
                          @click.prevent="onLogin()"
                          class="btn btn-primary py-2 px-4 text-white"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import endpoints from '../endpoints'
import { actions as authActions } from '@/store-modules/auth/types'
const { VUE_APP_BASE_URL: BASE_URL } = process.env

export default {
  name: 'login-component',
  data: () => ({
    endpoints,
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    onLogin () {
      const { login } = this.endpoints
      const body = {
        ...this.form
      }
      this.$http.post(`${BASE_URL}/${login}`, body)
        .then(({ data }) => {
          const { user, token } = data
          this.$store.dispatch(authActions.doLogin, { user, token })
            .then(() => {
              const isAdmin = this.$store.getters.userIsAdmin
              if (isAdmin) {
                this.$router.replace('/dashboard')
              } else {
                this.$router.replace('/states')
              }
            })
        })
        .catch(() => alert('Credenciales incorrectas, por favor intente de nuevo.'))
    }
  }
}
</script>
