<template>
<div id="filters-component" class="container mb-4 px-3 py-4 rounded-lg">
  <h4>Filtros</h4>
  <div class="form-search-wrap mb-3" data-aos="fade-up" data-aos-delay="200">
    <form>
      <div class="row align-items-center justify-content-center text-center">
        <div class="col-12 col-md-12 col-lg-3">
          <div>
            <p>
              <label class="form-control-rounded text-black">Precio mt2:</label>
            </p>
            <range-slider
              class="form-control-rounded slider"
              min="100"
              max="5000"
              step="10"
              v-model="meter_price_more_than"
              style="width:250px"
            ></range-slider>
            <label class="text-black d-block">Min: $ {{meter_price_more_than}}</label>
          </div>
          <div>
            <range-slider
              class="slider"
              min="100"
              max="2000"
              step="10"
              v-model="meter_price_less_than"
                style="width:250px"
            ></range-slider>
            <label class="text-black d-block">Max: $ {{meter_price_less_than}}</label>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-3">
          <div>
            <p>
              <label class="text-black">Superficie:</label>
            </p>
            <range-slider
              class="slider"
              min="1000"
              max="100000"
              step="10"
              v-model="surface_area_more_than"
                style="width:250px"
            ></range-slider>
            <label class="text-black d-block">Min: {{surface_area_more_than}} m2</label>
          </div>
          <div>
            <range-slider
              class="slider"
              min="10000"
              max="100000"
              step="10"
              v-model="surface_area_less_than"
                style="width:250px"
            ></range-slider>
            <label class="text-black d-block">Max: {{surface_area_less_than}} m2</label>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div>
            <label for="ordenar-por">Orden</label>
            <div class="select-wrap">
              <span class="icon">
                <span class="icon-keyboard_arrow_down"></span>
              </span>
              <select id="ordenar-por" class="form-control rounded" v-model="orderBy_order">
                <option value="ASC">Ascendente</option>
                <option value="DESC">Descendente</option>
              </select>
            </div>
          </div>
          <div>
            <label>Ordenar por</label>
            <div class="select-wrap">
              <span class="icon">
                <span class="icon-keyboard_arrow_down"></span>
              </span>
              <select class="form-control rounded" v-model="orderBy_attribute">
                <option value="name">Nombre</option>
                <option value="seller_price">Precio</option>
                <option value="surface_area">Área</option>
                <option value="created_at">Fecha</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3">
          <div>
            <label for="tipo-propiedad">Tipo</label>
            <div class="select-wrap">
              <span class="icon">
                <span class="icon-keyboard_arrow_down"></span>
              </span>
              <select id="tipo-propiedad" class="form-control rounded" v-model="estate_type">
                <option value="1">Terreno</option>
                <option value="2">Casa</option>
              </select>
            </div>
          </div>
          <div>
            <label for="compra-o-venta">Acción</label>
            <div class="select-wrap">
              <span class="icon">
                <span class="icon-keyboard_arrow_down"></span>
              </span>
              <select id="compra-o-venta" class="form-control rounded" v-model="sell_or_rent">
                <option value="0">Venta</option>
                <option value="1">Renta</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</template>

<style>
  #filters-component {
    background: rgba(233,248,223);
  }
</style>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import _ from 'lodash'

export default {
  name: 'FilterComponent',
  data () {
    return {
      meter_price_more_than: 100,
      meter_price_less_than: 2000,
      surface_area_more_than: 100,
      surface_area_less_than: 100000,
      estate_type: 1,
      sell_or_rent: 0,
      orderBy_order: 'ASC',
      orderBy_attribute: 'created_at',
      itemsByPage: 10
    }
  },
  mounted () {
    this.$emit('filtersChanged', this.filters)
  },
  methods: {
    onFilterChanged: _.debounce((vm) => {
      vm.$emit('filtersChanged', vm.filters)
    }, 100)
  },
  computed: {
    filters () {
      const {
        meter_price_more_than,
        meter_price_less_than,
        surface_area_more_than,
        surface_area_less_than,
        estate_type,
        sell_or_rent,
        orderBy_attribute,
        orderBy_order,
        itemsByPage
      } = this
      return {
        meter_price_more_than,
        meter_price_less_than,
        surface_area_more_than,
        surface_area_less_than,
        estate_type,
        sell_or_rent,
        orderBy_attribute,
        orderBy_order,
        itemsByPage
      }
    }
  },
  watch: {
    meter_price_more_than: function () { this.onFilterChanged(this) },
    meter_price_less_than: function () { this.onFilterChanged(this) },
    surface_area_more_than: function () { this.onFilterChanged(this) },
    surface_area_less_than: function () { this.onFilterChanged(this) },
    estate_type: function () { this.onFilterChanged(this) },
    sell_or_rent: function () { this.onFilterChanged(this) },
    orderBy_order: function () { this.onFilterChanged(this) },
    orderBy_attribute: function () { this.onFilterChanged(this) },
    itemsByPage: function () { this.onFilterChanged(this) }
  },
  components: {
    RangeSlider
  }
}
</script>
