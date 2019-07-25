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
    </div>

    <div class="form-group col-sm-12">
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
    </div>

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
];
export default {
  name: 'estate-form',
  data() {
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
    onMapCenterChanged(event) {
      estate.latitude = event.lat();
      estate.longitude = event.lng();
    },
    onEnterKeyToAddImage() {
      this.$refs.addFileButton.click();
    },
    onEstateImageAdded({ target }) {
      const file = target.files[0];
      this.estate.files.push(file);
      target.value = null;
    }
  }
}

// Estate properties
/*
name
description
owner_id
images
estate_type
business_type
commision_or_advertising
sell_or_rent
ejidal_or_private
surface_area
seller_price
seller_minimum_price
meter_price
front_meters
long_meters
has_underground_water
agent_comments
latitude
longitude
has_drinkable_water
sewer_system
public_light
is_heritage
is_needy
street
outside_number
interior_number
neighborhood
postalcode
city_id
state_id
bathrooms
parking_lots
floors
construction_area
bedrooms
*/
</script>
