<template>
  <div>

  </div>
    <NavBar :logo="logo_src" :alt="app_name" />
    <router-view />
    <FooterBar />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
import "@/assets/css/style.css"; 

export default {
    name: 'app',
    components: {
      NavBar,
      FooterBar
  },
  data(){
    return {
      logo_src: '/img/logo.png',
      app_name: 'Make Your Burguer'
    }
  }
}
</script>
