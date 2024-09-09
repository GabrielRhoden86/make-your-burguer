 <template>
    <div class="d-flex justify-content-center">
     <Menssage :msg="msg" v-show="msg"/>
    </div>
   <div class="d-flex justify-content-center">
   <form class="col-md-5" id="form-burguer" @submit="createBurguer" >
     <div class="mb-3">
       <label for="nome" class="form-label">Nome do cliente:</label>
       <input type="text" class="form-control" id="nome" v-model="nome">
     </div>
     <div class="mb-3">
       <label for="pao" class="form-label">Escolha o pão:</label>
       <select class="form-select" id="pao" v-model="pao">
         <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
       </select>
      </div>
      <div class="mb-3">
        <label for="carne" class="form-label">Escolha a carne do seu Burguer:</label>
        <select class="form-select" id="carne" v-model="carne">
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
      </select>
    </div>
   <div class="mb-3 r">
    <label for="opcionais" class="form-label">Selecione os opcionais:</label>
    <div class="form-check-container">
    <div class="form-check" v-for="opcional in opcionaisdata" :key="opcional.id">
      <input type="checkbox" class="form-check-input" :id="`salame${opcional.id}`" :value="opcional.tipo" v-model="opcionais">
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
import Menssage from './Menssage.vue';
export default {
  components: { Menssage },
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
    },
    //Post Data
    async createBurguer(e){
      e.preventDefault();
      const data = {
        nome:this.nome,
        carne:this.carne,
        pao:this.pao,
        opcionais:Array.from(this.opcionais),
        status:"Solcitado"
      }
      const JasonData = JSON.stringify(data);
      const request = await fetch('http://localhost:3000/burgers',{ 
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JasonData
      });
      //Response
      const response = await request.json();
      this.msg = `Pedido ${response.id} realizado com sucesso!`
      setTimeout(()=> this.msg="",10000);
      this.nome = "",
      this.carne = "",
      this.pao = "",
      this.opcionais = ""
    }
  },
  mounted(){
    this.getIngredientes();
  }
}
</script>

