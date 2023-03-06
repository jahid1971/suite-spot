<script setup>
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue';
import Home from './pages/Home.vue';
import UseAuthStore from './store/AuthStore';

const authStore = UseAuthStore()

onMounted(()=>{
        authStore.initialize()
})
</script>

<template>
  <div class="">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
