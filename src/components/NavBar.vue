<template>
    <nav id="nav-bar">
      <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
      </router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/pedidos">Pedidos</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: ['logo', 'alt']
}
</script>

<style scoped>

</style>
  