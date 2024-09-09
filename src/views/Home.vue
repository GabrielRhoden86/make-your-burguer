<template>
  <banner/>
  <div class="main-container m-5">
    <h1 class="text-center p-1 text-muted ">Monte Seu Burguer:</h1>
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

