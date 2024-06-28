<template>
    <nav id="nav-bar">
      <router-link to="/">
        <img src="" alt="" id="logo">
      </router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/pedidos">Pedidos</router-link>
    </nav>
</template>


<script>
export default {
    name: 'NavBar',
      components: {
   // HelloWorld     <router-view/>
  }
}
</script>


<style>
#nav-bar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
  