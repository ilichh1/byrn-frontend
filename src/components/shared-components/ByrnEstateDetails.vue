<template>
  <section id="estate-detail" class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12 pb-3">
          <p>{{ estate.address }}</p>
        </div>
        <div class="col-6 text-center">
          <font-awesome-icon class="mr-2" icon="ruler-combined"/>
          <span class="ml-1 font-weight-bold imp">{{ formatNumber(estate.surface_area) }} m²</span>
        </div>
        <div class="col-6 text-center">
          <font-awesome-icon class="mr-2" icon="dollar-sign"/>
          <span class="ml-1 font-weight-bold imp">{{ formatNumber(estate.seller_price) }}.00</span>
        </div>
      </div>
    </div>
    <div class="col-12 pt-3">
      <h2>Descripción</h2>
      <p>{{ estate.description }}</p>
    </div>
    <div class="col-12">
      <h2>Detalles de la propiedad</h2>
      <div class="row">
        <div
          class="col-12 col-md-6 py-md-2"
          v-for="detail in detailsList"
          :key="detail.name">
          <font-awesome-icon class="mr-2" :icon="detail.icon"/>
          <span class="font-weight-bold">{{ detail.name }} : </span>
          <span class="">{{ detail.value }}</span>
        </div>
      </div>
    </div>
    <div class="col-12">
      <h2 class="mt-4">Ubicación</h2>
      <GmapMap
        ref="map"
        :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true
        }"
        :center="gmapCords"
        :zoom="15"
        map-type-id="terrain"
        style="width: 100%; height: 300px">
        <GmapMarker
          key="byrn-estate-map-marker"
          :position="gmapCords"/>
      </GmapMap>
    </div>
  </section>
</template>

<script>
const mapIconName = property => {
  switch(property) {
    case 'surface_area':
      return 'ruler-combined'
    case 'seller_price':
      return 'dollar-sign'
    case 'meter_price':
      return 'tachometer-alt'
    case 'has_underground_water':
      return 'water'
    case 'has_drinkable_water':
      return 'glass-whiskey'
    case 'address':
      return 'map-marker-alt'
    case 'sewer_system':
      return 'tint'
    case 'public_light':
      return 'lightbulb'
    case 'created_at':
      return 'calendar-alt'
    case 'city':
      return 'building'
    default:
      return 'cogs'
  }
}
const mapEstateProperty = (property, value) => {
  const mapBoolean = val => !!val ? 'Sí' : 'No'

  switch(property) {
    case 'sewer_system':
    case 'has_underground_water':
    case 'has_drinkable_water':
    case 'public_light':
      return mapBoolean(property)
    case 'created_at':
    case 'updated_at':
      return new Date(value).toLocaleDateString()
    case 'city':
      return value.name
    default:
      return value
  }
}

export default {
  name: 'estate-details',
  data: () => ({
    excludedProps: [
      'id',
      'name',
      'image_id',
      'owner_id',
      'images',
      'ejidal_or_private',
      'commision_or_advertising',
      'seller_price',
      'sell_or_rent',
      'estate_type',
      'business_type',
      'longitude',
      'latitude',
      'is_heritage',
      'is_needy',
      'description',
      'city_id',
      'full_address',
      'visit',
      'updated_at',
      'status'
    ]
  }),
  computed: {
    formatNumber: () => val => String(val).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,"),
    detailsList () {
      const { estate, mappedPropertyNames: mappedNames, excludedProps } = this
      if (!estate) {
        return []
      }
      const estateProps = Object.keys(estate)
      return estateProps
        .filter(key => !excludedProps.includes(key) && !!estate[key])
        .map(key => {
          let name
          if (mappedNames[key]) {
            name = mappedNames[key]
          } else {
            name = key
          }
          return {
            name,
            icon: mapIconName(key),
            value: mapEstateProperty(key, estate[key])
          }
        })
    },
    gmapCords() {
      const { latitude: lat, longitude: lng } = this.estate
      if (!lat && !lng) return { lat: 20.623397, lng: -103.068217 }
      return { 'lat': +lat, 'lng': +lng }
    }
  },
  props: {
    estate: {
      type: Object,
      required: true,
      default: () => ({
        name: 'Propiedad',
        description: 'Sin descripción por el momento.'
      })
    },
    mappedPropertyNames: {
      type: Object,
      required: false,
      default: () => ({
        bathrooms: 'Baños',
        surface_area: 'Área de la superficie',
        meter_price: 'Precio por m²',
        has_underground_water: 'Agua subterránea',
        address: 'Dirección',
        has_drinkable_water: 'Agua potable',
        public_light: 'Alumbrado público',
        created_at: 'Publicado el',
        updated_at: 'Última actualización',
        visit: 'Número de visitas',
        city: 'Ciudad',
        sewer_system: 'Drenaje'
      })
    }
  }
}
</script>

<style lang="scss">
  .imp {
    font-size: 1.7em;
  }
  .vue-map {
    border-radius: 0.25rem !important;
  }
</style>
