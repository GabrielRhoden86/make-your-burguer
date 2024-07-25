<template>
    <nav id="nav-bar" class="d-flex justify-content-end pt-4 pr-5">
      <router-link to="/" id="logo-url">
        <img :src="logo" :alt="alt" id="logo">
      </router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/pedidos">Pedidos</router-link>
    </nav>
</template>

<script>
import "@/assets/css/navBar.css"; 
export default {
    name: 'NavBar',
    props: ['logo', 'alt']
}
</script>
