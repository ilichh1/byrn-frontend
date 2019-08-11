<template>
  <div class="d-block d-md-flex listing vertical">
    <a
      :style="`background-image: url('${estate.image}')`"
      class="img d-block"></a>
    <div class="lh-content">
      <span class="category">{{ estate.type }}</span>
      <a href="#" class="bookmark"><span class="icon-heart"></span></a>
      <h3><router-link :to="`/details/${estate.id}`">{{ estate.name }}</router-link></h3>
      <address>{{ estate.address }}</address>
      <p class="mb-0">
        <span class="review">{{ estate.visit_count }} visitas</span>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'property-listing-component',
  mounted () {
    // console.log(Object.keys(this.estate))
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
          is_favorite: false,
          visit_count: 16,
          address: 'Camino a la barranca 16, Colonia, Zapotlanejo, Jalisco'
        }
      }
    }
  }

}
</script>
