<script setup>
import { computed, onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Home from "./pages/Home.vue";
import UseAuthStore from "./store/AuthStore";
import Spinner from "./components/spinners/Spinner.vue";

const authStore = UseAuthStore();
// const routeLoader = computed(() => authStore._routeLoader);
// console.log(routeLoader.value, "privateloader inside app ");

onMounted(() => {
  authStore.initialize();
});
</script>

<template>
  <div class="">
    <Spinner v-if="authStore.routeLoader"></Spinner>
    <RouterView v-else></RouterView>
  </div>
</template>

<style scoped></style>
