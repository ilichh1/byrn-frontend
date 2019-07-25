<template>
  <div class="d-block d-md-flex listing vertical">
    <a
      :style="`background-image: url('${property.image}')`"
      class="img d-block"></a>
    <div class="lh-content">
      <span class="category">{{ property.type }}</span>
      <a href="#" class="bookmark"><span class="icon-heart"></span></a>
      <h3><router-link to="/details">{{ property.name }}</router-link></h3>
      <address>{{ property.address }}</address>
      <p class="mb-0">
        <span class="review">{{ property.visit_count }} visitas</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'property-listing-component',
  props: {
    property: {
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
