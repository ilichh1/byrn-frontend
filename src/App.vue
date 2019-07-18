<template>
  <main>
    <HeaderComponent/>
    <!--HomeComponent/-->
    <LoginComponent/>
    <FooterComponent/>
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import HomeComponent from './components/root-components/HomeComponent';
import LoginComponent from './components/root-components/LoginComponent';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  }
}
</script>

<style>
</style>
