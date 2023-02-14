<script setup>
import Table from '../components/Table.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
       <div class="container">
              <h1>Data</h1>
              <Table />
              <div class="back">
                     <RouterLink to="/" class="backbtn">Back!</RouterLink>
              </div>
       </div>
</template>

<style scoped>
.container{
       padding: 2em;
       margin-top: 6em;
}
.container h1{
       text-align: center;
       margin-bottom: 2em;
}

.back{

       width: 4.5em;
       height: 2.5em;
       text-align: center;
       background-color: blue;
       border-radius: .8em;
       padding-top: .2em;
}
.backbtn{
       font-weight: bolder;
       font-size: 1.3em;
       color: white;
       text-decoration: none;
}
</style>