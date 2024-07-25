<template>
    <div>
        <p>Componente de Menssagem</p>
    </div>
    <div class="d-flex justify-content-center">
        <form id="form-burguer" action="">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome do cliente:</label>
        <input type="text" class="form-control" id="nome" v-model="nome">
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
  <div class="form-check-container">

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="salame1" v-model="opcionais" value="salame">
      <label class="form-check-label" for="salame1">Salame</label>
    </div>

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="salame2" v-model="opcionais" value="salame">
      <label class="form-check-label" for="salame2">Salame</label>
    </div>

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="salame3" v-model="opcionais" value="salame">
      <label class="form-check-label" for="salame3">Salame</label>
    </div>

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="salame1" v-model="opcionais" value="salame">
      <label class="form-check-label" for="salame1">Salame</label>
    </div>

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="salame2" v-model="opcionais" value="salame">
      <label class="form-check-label" for="salame2">Salame</label>
    </div>

    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="salame3" v-model="opcionais" value="salame">
      <label class="form-check-label" for="salame3">Salame</label>
    </div>

  </div>
</div>

      <div class="mb-3">
        <button type="submit" class="btn btn-form w-100" >Criar meu burguer</button>
      </div>
     </form>
    </div>
</template>

<script>
import "@/assets/css/burguerForm.css"; 
export default {
  name:'BurgerForm'
}
</script>
