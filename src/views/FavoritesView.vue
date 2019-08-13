<template>
  <div class="site-wrap bg-white">
    <div class="site-blocks-cover inner-page-cover overlay" style="background-image: url(images/summer-grass.jpg);"
      data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 text-center">
            <h1 class="text-white">Mis favoritos <span style="color:tomato">&#10084;</span></h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin del encabezado -->
    <section id="user-favorites" class="pb-4 pt-5">
      <div class="container">
        <h3>Tú lista de propiedades favoritas</h3>
        <hr>
        <div class="row">
          <div v-if="favorites.length === 0" class="col-12 text-center">
            <h4>No tienes ningún favorito =(</h4>
          </div>
          <div v-if="favorites.length !== 0" class="col-12">
            <div class="row">
              <PropertyListingComponent
                class="col-12 col-md-6 col-lg-3"
                v-for="e in favorites"
                :key="`favorite-${e.id}`"
                :estate="e"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { actions as estatesActions } from '@/store-modules/estates/types'
import PropertyListingComponent from '@/components/shared-components/PropertyListingComponent'

export default {
  name: 'byrn-favorites-view',
  data: () => ({
    favorites: []
  }),
  mounted() {
    this.getFavorites()
      .then(res => {
        this.favorites = res
      })
  },
  methods: {
    ...mapActions({
      getFavorites: estatesActions.getAllFavorites
    })
  },
  components: {
    PropertyListingComponent
  }
}
</script>