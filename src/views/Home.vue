<template>
  <banner/>
  <div class="main-container">
    <h1>Monte Seu Burguer:</h1>
    <BurgerForm/>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';
import BurgerForm from '../components/BurgerForm.vue';
export default {
  name: 'Home',
  components: {
    Banner,
    BurgerForm
  },
}
</script>

