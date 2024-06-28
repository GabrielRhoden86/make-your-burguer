<template>
  <NavBar/>
  <FooterBar/>
</template>

<script>
//  <router-view/> /////
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
    name: 'app',
    components: {
      NavBar,
      FooterBar
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
