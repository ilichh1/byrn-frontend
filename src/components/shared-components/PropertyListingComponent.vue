<template>
  <div class="d-block d-md-flex listing vertical">
    <a>
      <router-link :to="`/details/${estate.id}`"
      :style="`background-image: url('${estate.image}')`"
      class="img d-block">
      </router-link>
    </a>
    <div class="lh-content">
      <span class="category">{{ estate.type }}</span>
      <span @click="toggleFavorite()" class="bookmark" :class="{ 'is-favorite': isFavorite(estate.id) }">
        <span class="icon-heart"></span>
      </span>
      <h3><router-link class="property-name rounded" :to="`/details/${estate.id}`">{{ estate.name }}</router-link></h3>
      <address class="text-truncate">{{ estate.address }}</address>
      <p>{{ estate.description }}</p>
      <p class="mb-0">
        <span class="review mr-3">$ {{ formatNumber(estate.price) }}.00 MXN</span>
        <span class="review ml-3">{{ formatNumber(estate.area) }} m²</span>
      </p>
    </div>
  </div>
</template>

<style>
.bookmark {
  cursor: pointer;
}
.bookmark.is-favorite {
  color: tomato;
}
.property-name {
  background-color: #35cdb8;
  padding: .3em .4em;
  color: white;
}
.property-name:hover {
  background-color: #189c88;
  color: white;
}
.review {
  font-size: 1em !important;
}
</style>

<script>
import { mapActions, mapGetters } from 'vuex'
import {
  actions as estatesActions,
  getters as estatesGetters
} from '@/store-modules/estates/types'

/*
 * @group ComponentesReutilizados
 * @vuese
 * Este es el componete para previzualizar una propiedad.
 * Es utilizado en varias partes de la aplicación como:
 * * Sliders
 * * Listado principal
 * * Resultado de búsquedas
 * * Carrousels
 * Este componente también se encarga de comunicarse con
 * `vuex` para agregar / quitar _favoritos_.
 */
export default {
  name: 'property-listing-component',
  methods: {
    toggleFavorite () {
      if (this.isFavorite(this.estate.id)) {
        this.deleteFavorite(this.estate.id)
        return
      }
      this.saveFavorite(this.estate.id)
    },
    ...mapActions([
      estatesActions.saveFavorite,
      estatesActions.deleteFavorite
    ])
  },
  computed: {
    ...mapGetters({
      isFavorite: estatesGetters.isEstateInFavorites
    }),
    formatNumber: () => val => String(val).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,"),
  },
  props: {
    estate: {
      type: Object,
      default () {
        return {
          id: 26,
          image: 'images/img_1.jpg',
          type: 'Terreno en venta',
          name: 'Terreno en la barranca Zapopana',
          visit_count: 16,
          description: 'Propiedad muy buena oferta.',
          address: 'Camino a la barranca 16, Colonia, Zapotlanejo, Jalisco',
          price: 1000000
        }
      }
    }
  }
}
</script>
