<template>
  <div id="app">
    <byrn-loader/>
    <header-comp></header-comp>
    <router-view/>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent'
import Footer from '@/components/FooterComponent'
import Loader from '@/components/shared-components/ByrnLoaderComponent'

// @vuese
// Componente de inicio de toda la aplicación
export default {
  name: 'App',
  components: {
    'header-comp': Header,
    'footer-comp': Footer,
    'byrn-loader': Loader
  }
}
</script>
