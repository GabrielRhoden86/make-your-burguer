<template>
   <div class="alert alert-success p-0" role="alert">
    <p class="mt-3">{{ msg }}</p>
 </div>
</template>

<script>
export default {
    name:'Message',
    props: {
      msg:String
    }
 }
</script>

<!-- scoped significa que os atributos css serão aplicado somente no escopo do componente e não globalmente -->
<style scoped> 
  .alert-success{
    width:41%;
  }
</style>
