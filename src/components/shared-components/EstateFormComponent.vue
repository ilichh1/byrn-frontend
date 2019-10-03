<template>
  <form class="row my-4" id="estate-form">

    <div class="form-group col-sm-12">
      <label>Nombre</label>
      <input type="text" class="form-control" placeholder="Hermosa casa de dos pisos">
      <!--small class="form-text text-muted">We'll never share your email with anyone else.</small-->
    </div>

    <div class="form-group col-sm-12">
      <label>Descripción</label>
      <textarea class="form-control" rows="3"></textarea>
      <small class="form-text">Una descripción más detallada sobre esta propiedad.</small>
    </div>

    <div class="form-group col-sm-12">
      <label>Dueño de esta propiedad</label>
      <select class="form-control">
        <option value="-1" disabled selected>Seleccione un dueño</option>
        <option
          v-for="owner in owners"
          :key="`owner-${owner.id}`"
          :value="owner.id">
          {{ `${owner.first_name} ${owner.last_name}` }}
        </option>
      </select>
    </div>

    <div class="form-group col-sm-12">
      <ImageChooser/>
    </div>

    <!--div class="form-group col-sm-12">
      <span v-if="estate.files.length === 0">Ninguna imagen seleccionada.</span>
      <div v-else>
        <span class="mb-2 d-block">
          Selecciona una imagen destacada
          <small class="text-underline" @click="estate.files = []">(Eliminar imagenes)</small>
        </span>
        <div class="custom-control custom-radio text-truncate"
          v-for="(file, index) in estate.files"
          :key="`featured-file-option-${index}`">
          <input
            name="featured-image"
            type="radio"
            class="custom-control-input"
            :id="`selected-file-${index}`"
            :value="index">
          <label
            class="custom-control-label"
            :for="`selected-file-${index}`">
            {{ file.name }}
          </label>
        </div>
      </div>
    </div-->

    <!--div class="form-group col-sm-12">
      <label
        @keyup.enter="onEnterKeyToAddImage"
        class="btn btn-primary d-block c-cursor"
        tabindex="0"
        for="addImageInput">
        Agregar imagen
      </label>
      <input
        type="file"
        class="form-control-file d-none"
        id="addImageInput"
        ref="addFileButton"
        @change="onEstateImageAdded">
    </div-->

    <div class="col-sm-12">
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="isNeedyProperty">
        <label class="form-check-label" for="isNeedyProperty">Esta propiedad es urgente</label>
      </div>
    </div>

    <div class="form-group col-sm-12">
      <label>Ubicación</label>
      <GmapMap
        ref="map"
        :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
          // disableDefaultUi: false
        }"
        :center="{ lat: 20.623397, lng: -103.068217 }"
        :zoom="15"
        map-type-id="terrain"
        style="width: 100%; height: 300px"
        @center_changed="onMapCenterChanged">
        <GmapMarker
          key="map-center-marker"
          :position="{ lat: 20.623397, lng: -103.068217 }" />
          <!-- Aquí me quedé: no pude actualizar la posicion del markador en base al centro del mapa -->
        <!--GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position" /-->
      </GmapMap>
    </div>
    <div class="col-sm-12">
      Centro:
      <span class="p-2">{{ estate.latitude }}, {{ estate.longitude }}</span>
    </div>
    <div class="col-sm-12">
      <button type="submit" class="btn btn-primary">Guardar</button>
    </div>
  </form>
</template>

<style scoped>
label[for="addImageInput"]:focus {
  outline: 2px solid blue;
}
</style>

<script>
import ImageChooser from '@/components/shared-components/ImageChooserComponent.vue'

const MOCKUP_DATA = {
  'id': 10,
  'name': 'Propiedad888',
  'image_id': '4',
  'description': 'Esta bonita',
  'owner_id': 1,
  'estate_type': 1,
  'business_type': 2,
  'commision_or_advertising': 3,
  'sell_or_rent': '0',
  'ejidal_or_private': '0',
  'surface_area': 400,
  'seller_price': 4000000,
  'seller_minimum_price': null,
  'meter_price': 10000,
  'front_meters': null,
  'long_meters': null,
  'has_underground_water': '0',
  'agent_comments': null,
  'latitude': '20.62388600',
  'longitude': '-103.08852800',
  'address': 'Indepencia 181 Centro 45430',
  'city_id': 124,
  'state_id': null,
  'has_drinkable_water': '0',
  'sewer_system': '0',
  'public_light': '0',
  'is_heritage': '0',
  'is_needy': '0',
  'bathrooms': null,
  'parking_lots': null,
  'floors': null,
  'construction_area': null,
  'bedrooms': null,
  'status': '1',
  'created_at': '2019-08-09 21:46:32',
  'updated_at': '2019-08-09 21:46:33',
  'full_address': 'Indepencia 181 Centro 45430, Ixtapa',
  'visit': 1,
  'images': [{
    'id': 4,
    'url': 'https://storage.googleapis.com/byrn-bucket/estate01/HdGeAxYagD7IqMZHJh02nLrDTVgDHbE7PGVS2DT2.jpeg',
    'estate_id': 10,
    'created_at': '2019-08-09 21:46:32',
    'updated_at': '2019-08-09 21:46:32'
  },
  {
    'id': 5,
    'url': 'https://storage.googleapis.com/byrn-bucket/estate01/gD1sEyN0iNXDnXpQtRjpk80oElfZEjBNWtY3QPMY.jpeg',
    'estate_id': 10,
    'created_at': '2019-08-09 21:46:32',
    'updated_at': '2019-08-09 21:46:32'
  },
  {
    'id': 6,
    'url': 'https://storage.googleapis.com/byrn-bucket/estate01/cFiGrjxu7xWnkYPeJF3XkY73wlgLozebS0sk6edg.jpeg',
    'estate_id': 10,
    'created_at': '2019-08-09 21:46:33',
    'updated_at': '2019-08-09 21:46:33'
  }
  ],
  'city': {
    'id': 124,
    'name': 'Ixtapa',
    'state_id': 7,
    'number': 44,
    'created_at': '2019-08-05 18:54:34',
    'updated_at': null
  },
  'state': null
}

const OWNERS = [
  {
    id: 1,
    first_name: 'Ilich',
    last_name: 'Arredondo'
  },
  {
    id: 2,
    first_name: 'Jacob',
    last_name: 'Nuño'
  },
  {
    id: 3,
    first_name: 'Samir',
    last_name: 'Ferrales'
  },
  {
    id: 4,
    first_name: 'Sebastian',
    last_name: 'González'
  }
]

/*
 * @group ComponentesReutilizados
 * @vuese
 * Este componente engolba todos los controles del formulario
 * usados para crear una nueva propiedad (`estate`).
 */
export default {
  name: 'estate-form',
  data () {
    return {
      owners: OWNERS,
      estate: {
        files: [],
        latitude: 0,
        longitude: 0
      }
    }
  },
  computed: {
    mapCenter: () => {
      // return { lat: this.estate.latitude, lng: this.estate.longitude };
    }
  },
  methods: {
    onMapCenterChanged (event) {
      this.estate.latitude = event.lat()
      this.estate.longitude = event.lng()
    },
    onEnterKeyToAddImage () {
      this.$refs.addFileButton.click()
    },
    onEstateImageAdded ({ target }) {
      const file = target.files[0]
      this.estate.files.push(file)
      target.value = null
    }
  },
  components: {
    ImageChooser
  }
}
</script>
