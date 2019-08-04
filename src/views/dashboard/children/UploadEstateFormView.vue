<template>
  <section class="container" id="estate-form">
    <h4>Nueva propiedad</h4>
    <hr>
    <estate-form></estate-form>
  </section>
</template>

<script>
import { EstateFormComponent } from '@/components'

export default {
  name: 'upload-estate-form-view',
  components: {
    'estate-form': EstateFormComponent
  }
}
</script>
