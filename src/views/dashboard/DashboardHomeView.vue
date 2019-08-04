<template>
  <section id="user-section">
    <nav>
      Opciones:
      <ul>
        <li>
          <router-link to="profile">
            Mi perfil
          </router-link>
        </li>
        <li>
          <router-link to="estate">
            Subir propiedad
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: 'dashboard-home'
}
</script>

<style lang="scss">
#user-section {
  margin-top: 60px;
}
</style>
