<template>
  <div class="site-wrap">
    <div class="site-blocks-cover inner-page-cover overlay" style="background-image: url(images/summer-grass.jpg);"
      data-stellar-background-ratio="0.5">
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
          <!--div class="col-md-12">
            <FiltersComponent @filtersChanged="onFiltersChanged($event)"></FiltersComponent>
          </div-->
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-end text-right">
            <span class="px-3" style="font-size: 1.5rem">Filtros</span>
            <byrn-switch
              v-model="showFilters"
              @input="fetchEstates()">
            </byrn-switch>
          </div>
          <div class="col-12 py-2 mb-2">
            <FiltersComponent v-if="showFilters" @filtersChanged="onFiltersChanged($event)"></FiltersComponent>
          </div>
          <div class="col-lg-12">
            <h3 class="my-3">Listado</h3>
            <hr>
            <div class="row">
              <div v-for="(element, index) in estates" :key="`${element.name}-${index}`"
                class="col-12 col-md-6 col-lg-4">
                <state-component :estate="element"></state-component>
              </div>
            </div>
            <div class="pagination">
              <button @click="moveTo(--current_page)" class="cursor-pointer" :class="{ 'no-click': !pagination.prev }">
                Anterior
              </button>
              <button @click="moveTo(++current_page)" class="cursor-pointer" :class="{ 'no-click': !pagination.next }">
                Siguiente
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
 .no-click {
   pointer-events: none;
   cursor: not-allowed;
   opacity: 0.5;
 }
</style>

<script>
import endpoints from '../endpoints'
import { estateMapFunction, toQueryParam } from '@/utils'
import ByrnSwitch from '@/components/shared-components/ByrnSwitchComponent'
import FiltersComponent from '@/components/shared-components/FiltersComponent'
import PropertyListingComponent from '@/components/shared-components/PropertyListingComponent'
const { VUE_APP_BASE_URL: BASE_URL } = process.env

export default {
  name: 'states-listing-component',
  data () {
    return {
      showFilters: false,
      url: null,
      current_page: 1,
      filters: {
        page: 1
      },
      estates: [],
      pagination: {
        next: null,
        prev: null
      }
    }
  },
  created () {
    const { estates } = endpoints
    this.url = `${BASE_URL}/${estates}`
  },
  mounted() {
    this.fetchEstates()
  },
  methods: {
    moveTo (page) {
      this.filters = {
        ...this.filters,
        page
      }
      this.fetchEstates()
    },
    onFiltersChanged (filters) {
      this.filters = {
        ...this.filters,
        ...filters
      }
      this.fetchEstates()
    },
    fetchEstates () {
      const { currentUrl } = this
      this.$http.get(currentUrl)
        .then(({ data: response }) => {
          const { next_page_url: next, prev_page_url: prev, currentPage } = response
          this.pagination = { next, prev }
          this.currentPage = currentPage
          this.estates = response.data.map(estateMapFunction)
        })
    }
  },
  computed: {
    currentUrl () {
      let { url, filters, showFilters } = this
      if (!showFilters) {
        filters = { page: filters.page }
      }
      const queryParam = toQueryParam(filters)
      return `${url}?${queryParam}`
    }
  },
  components: {
    'byrn-switch': ByrnSwitch,
    FiltersComponent,
    'state-component': PropertyListingComponent
  }
}
</script>
