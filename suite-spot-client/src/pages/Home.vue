<template>
   <div class="md:flex justify-center gap-2 px-6 md:px-10 lg:px-20">
      <div class="mt-4">
         <SearchForm :homes="allHomes" />
      </div>

      <div class="flex-1">
         <div>
            <div class="flex justify-between px-4 mt-10">
               <p class="text-xl font-bold">Homes/Hotels</p>
               <router-link to="/all-homes">
                  <p>See All</p>
               </router-link>
            </div>
            <div class="container pb-8 pt-2 mx-auto">
               <Spinner class="pb-60" v-if="isLoading"></Spinner>
               <div v-else class="flex flex-wrap">
                  <!-- <HomeCard v-for="(home, i) in  [...Array(10)]" :home="home" :key="i"></HomeCard> -->
                  <HomeCard
                     v-for="(home, i) in allHomes"
                     :home="home"
                     :key="i"></HomeCard>
               </div>
            </div>
         </div>

         <div>
            <div class="flex justify-between px-4">
               <p class="text-xl font-bold">Experiences</p>
               <router-link to="/coming-soon">
                  <p>See All</p>
               </router-link>
            </div>
            <div class="container pb-8 pt-2 mx-auto">
               <div class="flex flex-wrap">
                  <ExpCard
                     v-for="(exp, i) in allExpData.slice(0, 4)"
                     :key="i"
                     :exp="exp"></ExpCard>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ExpCard from "../components/card/ExpCard.vue";
import HomeCard from "../components/card/HomeCard.vue";
import SearchForm from "../components/form/searchForm.vue";
import Spinner from "../components/spinners/Spinner.vue";
import { getAllHomes } from "../api/Services";

const allExpData = ref([]);
const allHomes = ref([]);
const isLoading = ref(true);

onMounted(() => {
   getAllHomes().then((data) => {
      allHomes.value = data;
      isLoading.value = false;
   });
});

fetch("expData.json")
   .then((res) => res.json())
   .then((data) => (allExpData.value = data));
</script>

<style lang="scss" scoped></style>
