<template>
   <div>
      <Spinner v-if="isLoading"></Spinner>
      <section v-else className="text-gray-600 ">
         <div class="container pb-8 pt-2 mx-auto">
            <div class="flex flex-wrap">
               <HomeCard v-for="home in allHomes" :home="home" :key="home._id"></HomeCard>
            </div>
         </div>
      </section>
   </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAllHomes } from "../api/Services";
import HomeCard from "../components/card/HomeCard.vue";
import Spinner from "../components/spinners/Spinner.vue";

const isLoading = ref(true);

const allHomes = ref([]);

onMounted(() => {
   getAllHomes().then((data) => {
      allHomes.value = data;
      isLoading.value = false;
   });
});

</script>

<style lang="scss" scoped></style>
