<template>
  <div class="main-container">
    <h1 class="text-center text-muted p-3">Gerenciar Pedidos:</h1>
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue';
export default {
  components: { Dashboard },
  name: 'Pedidos',

}
</script>

