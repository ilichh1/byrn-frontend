<template>
  <div id="app">
    <header-comp></header-comp>
    <router-view/>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Header from '@/components/HeaderComponent';
import Footer from '@/components/FooterComponent';

export default {
  name: 'App',
  components: {
    'header-comp': Header,
    'footer-comp': Footer
  }
}
</script>


<style>
</style>
