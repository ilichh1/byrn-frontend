<template>
  <div class="site-wrap">
    <div class="site-blocks-cover inner-page-cover overlay" style="background-image: url(images/summer-grass.jpg);"
      data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-10 mt-5" data-aos="fade-up" data-aos-delay="400">
            <div class="row justify-content-center mt-5">
              <div class="col-md-8 text-center ">
                <h1>Propiedades disponibles</h1>
                <p class="mb-0">Elige la propiedad que complete tu vida.</p>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <FiltersComponent></FiltersComponent>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div v-for="(element, index) in estates" :key="`${element.name}-${index}`" class="col-md-2 col-lg-4">
                <state-component :estate="element"></state-component>
              </div>
            </div>
            <div class="col-12 mt-5 text-center">
              <div class="custom-pagination">
                <span>1</span>
                <a href="#">2</a>
                <a href="#">3</a>
                <span class="more-page">...</span>
                <a href="#">10</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="newsletter bg-primary py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <h2>Newsletter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div class="col-md-6">
            <form class="d-flex">
              <input type="text" class="form-control" placeholder="Email">
              <input type="submit" value="Subscribe" class="btn btn-white">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import endpoints from '../endpoints'
const { VUE_APP_BASE_URL: BASE_URL } = process.env

import FiltersComponent from '@/components/shared-components/FiltersComponent'
import PropertyListingComponent from '@/components/shared-components/PropertyListingComponent'

export default {
  name: 'states-listing-component',
  data () {
    return {
      estates: []
    }
  },
  mounted () {
    const { estates } = endpoints
    this.$http.get(`${BASE_URL}/${estates}`)
      .then(res => {
        this.estates = res.data.data.map(estate => {
          return {
            id: estate.id,
            type: estate.type === 1 ? 'Casa' : 'Terreno',
            image: 'images/img_1.jpg',
            name: estate.name,
            address: estate.address,
            is_favorite: false,
            visit_count: 23
          }
        })
      })
  },
  components: {
    FiltersComponent,
    'state-component': PropertyListingComponent
  }
}
</script>
