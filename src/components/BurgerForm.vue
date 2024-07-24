<template>
    <div>
        <p>Componente de Menssagem</p>
    </div>
    <div class="d-flex justify-content-center">
        <form id="form-burguer" action="">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome do cliente:</label>
        <input type="text" class="form-control" id="nome" v-model="nome" placeholder="Digite seu nome">
      </div>
      <div class="mb-3">
        <label for="pao" class="form-label">Escolha o pão:</label>
        <select class="form-select" id="pao" v-model="pao">
          <option value="">Selecione</option>
          <option value="branco">Branco</option>
          <option value="integral">Integral</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="carne" class="form-label">Escolha a carne do seu Burguer:</label>
        <select class="form-select" id="carne" v-model="carne">
          <option value="">Selecione</option>
          <option value="costela">Costela</option>
          <option value="maminha">Maminha</option>
        </select>
      </div>
      <div class="mb-3 r">
        <label for="opcionais" class="form-label">Selecione os opcionais:</label>
        <div class="form-check">

          <input type="checkbox" class="form-check-input" id="salame" v-model="opcionais" value="salame">
          <p class="form-check-label" for="salame">Salame</p>

          <input type="checkbox" class="form-check-input" id="salame" v-model="opcionais" value="salame">
          <p class="form-check-label" for="salame">Salame</p>

          <input type="checkbox" class="form-check-input" id="salame" v-model="opcionais" value="salame">
          <p class="form-check-label" for="salame">Salame</p>


        </div>
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-form w-100" >Criar meu burguer</button>
      </div>
     </form>
    </div>
</template>

<script>
export default {
  name:'BurgerForm'
}
</script>

<style>
.mb-3{
 text-align: start;
}


label{
 font-weight:bold;
 color:#222;
 padding: 5px 10px;
 border-left:4px solid #fcba03;
}
.mb-3 button{
    background-color:#fcba03;
    border: none;
    color:white;
}
.mb-3 button:hover{
    background-color:#e9ab02;
    color:white;
}

#form-burguer {
    width: 600px;
  }
.form-check{
    flex-direction: row;
    flex-wrap:wrap;
}
.form-check-label{
    border:solid red 1px;
    margin-bottom:20px;
    width:40%;
    display: flex;
    align-items: start;
  }

  *{
    border:solid red 1px;
  }
</style>