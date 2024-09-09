<template>
  <div class="row w-100">
    <div class="d-flex justify-content-center">
      <div class="col-md-8 container-table" style="overflow-x: auto">
        <table class="table">
          <thead class="thead-dark" style="border-bottom: solid #332 3px">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cliente</th>
              <th scope="col">Pão</th>
              <th scope="col">Carne</th>
              <th scope="col">Opcionais</th>
              <th colspan="2" class="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr class="rows" v-for="burger in burgers" :key="burger.id">
              <td>{{ burger.id }}</td>
              <td>{{ burger.nome }}</td>
              <td>{{ burger.pao }}</td>
              <td>{{ burger.carne }}</td>
              <td>
                <ul>
                  <li v-for="(opcional, index) in burger.opcionais" :key="index">
                    {{ opcional }}
                  </li>
                </ul>
              </td>
              <td>
                <div class="d-flex justify-content-end">
                  <select
                    class="form-select w-75"
                    aria-label="Default select example"
                  >
                    <option selected>Selecione</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </td>
              <td class="text-start">
                <button type="button" class="btn btn-dark">Cancelar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/dashboard.css";
export default {
  name: "Dashboard",
  data() {
    return {
      burgers: null,
      burger_id: null,
      status: [],
    };
  },
  methods: {
    async getPedidos() {
      const response = await fetch("http://localhost:3000/burgers");
      const data = await response.json();
      this.burgers = data;
      console.log(this.burgers);
    },
  },
  mounted() {
    this.getPedidos();
  },
};
</script>
