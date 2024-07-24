<template>
    <div id="main-banner">
        <h1>Make Your Burguer</h1>
    </div>
</template>

<script>
export default {
  name:'Banner'
}
</script>

<style>
#main-banner{              
 background-image: url('/public/img/burger.jpg');
 background-position: 0 -350px;
 background-repeat: no-repeat;
 background-size: cover; 
 height:85vh;
 display:flex;
 align-items: center;
 justify-content: flex-start;
}

#main-banner h1{
    color:#fafafa;
    text-align: center;
    font-size:4em;
    background-color:#222;
    padding:20px 40px;
}
</style>