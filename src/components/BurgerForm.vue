<template>
    <div>
        <p>Componente de Menssagem</p>
    </div>
  <div class="d-flex justify-content-center">
     <form class="col-md-5" id="form-burguer" action="" >
      <div class="mb-3">
        <label for="nome" class="form-label">Nome do cliente:</label>
        <input type="text" class="form-control" id="nome" v-model="nome">
      </div>
      <div class="mb-3">
        <label for="pao" class="form-label">Escolha o pão:</label>
        <select class="form-select" id="pao" >
          <option>Selecione</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="carne" class="form-label">Escolha a carne do seu Burguer:</label>
        <select class="form-select" id="carne" v-model="carne">
          <option>Selecione</option>

          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
      </select>
   </div>
 <div class="mb-3 r">
  <label for="opcionais" class="form-label">Selecione os opcionais:</label>

  <div class="form-check-container">
  <div class="form-check" v-for="opcional in opcionaisdata" :key="opcional.id">
    <input type="checkbox" class="form-check-input" :id="`salame${opcional.id}`" v-model="opcional.tipo" :value="opcional.tipo">
    <label class="form-check-label">{{ opcional.tipo }}</label>
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
  name:'BurgerForm',
  data(){
    return{
      paes:null,
      carnes:null,
      opcionaisdata:null,
      nome:null,
      pao:null,
      carne:null,
      opcionais:[],
      status:"Solicitado",
      msg:null
    }
  },
  methods:{
    async getIngredientes(){
      const req  = await fetch('http://localhost:3000/ingredientes');
      const data = await req.json(); 
      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
      console.log(data);
    }
  },
  mounted(){
    this.getIngredientes();
  }
}
</script>

