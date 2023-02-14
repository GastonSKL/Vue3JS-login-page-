<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const lista = ref([]);
const router = useRouter();

const get = () =>{
    let direccion = "https://api.solodata.es/pacientes?page=1";
    axios.get(direccion)
    .then(e => lista.value = e.data);
} 

get();

const editar = (PacienteId) =>{
    router.push(`editar/${PacienteId}`);
}



</script>

<template>
  <div>
    <table class="table">
      <caption>
        List of clients
      </caption>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Dni</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in lista" @click="editar(item.PacienteId)">
          <th scope="row">{{item.PacienteId}}</th>
          <td>{{item.Nombre}}</td>
          <td>{{item.DNI}}</td>
          <td>{{item.Telefono}}</td>
          <td>{{item.Correo}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
