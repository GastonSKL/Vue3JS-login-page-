<script setup>
import Table from "../components/Table.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <h1>Data</h1>
    <div class="btns">
      <RouterLink to="/" class="btn btn-primary">Back!</RouterLink>
      <RouterLink to="/nuevo" class="btn btn-success">New +</RouterLink>
    </div>
    <Table />
  </div>
</template>

<style scoped>
.container {
  padding: 2em;
  margin-top: 6em;
}
.container h1 {
  text-align: center;
  margin-bottom: 2em;
}

.back {
  width: 4.5em;
  height: 2.5em;
  text-align: center;
  background-color: blue;
  border-radius: 0.8em;
  padding-top: 0.2em;
}
.btns {
  display: flex;
  gap: 1.5em;
}
</style>
