<script setup>
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <Navbar />
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
