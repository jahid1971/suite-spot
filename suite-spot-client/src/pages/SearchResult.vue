<template>
   <section className="text-gray-600 body-font">
      <div v-if="loading" className="h-screen">
         <Spinner_2></Spinner_2>
      </div>

      <div v-else-if="!loading && !homes.length">
         <div
            class="h-screen text-gray-600 gap-5 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl">
             No home found for your location and date
            <router-link to="/">
               <PrimaryButton
                  class="px-6 py-2 text-medium font-semibold rounded-full">
                  Browse Homes
               </PrimaryButton>
            </router-link>
         </div>
      </div>

      <div v-else="!loading && homes.length " className="mx-auto flex flex-wrap">
         <div className="lg:w-1/2 mx-auto py-4 px-16 lg:h-screen lg:overflow-y-scroll">
            <div className="py-2">
               <!-- <small className='text-gray-400'>
                        252 stays Nov 13-17 3 Guest
                    </small> -->
               <h2 className="text-2xl font-medium text-gray-900">
                  Stay in {{ query?.location }}
               </h2>
            </div>

            <SearchCard v-for="home in homes" :key="home._id" :home="home"></SearchCard>
         </div>
         <div className="lg:w-1/2 w-full h-screen mb-10 lg:mb-0 overflow-hidden">
            <img
               alt="feature"
               className="object-cover object-center h-full w-full"
               src="https://i.ibb.co/RgwmMhk/clay-banks-b5-S4-Fr-Jb7y-Q-unsplash.jpg" />
         </div>
      </div>
   </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { getSearchResult } from "../api/Services";
import SearchCard from "../components/card/SearechCard.vue";
import { onMounted, ref } from "vue";
import Spinner_2 from "../components/spinners/Spinner_2.vue";
import PrimaryButton from "../components/button/PrimaryButton.vue";

const route = useRoute();
const query = JSON.parse(route?.query?.q);
const loading = ref(true);

const homes = ref([]);

onMounted(() => {
   getSearchResult(query.location).then((data) => {
      homes.value = data;
      loading.value = false;
   });
});
console.log("statttttttttteeeeeeeeeee", query);
</script>

<style lang="scss" scoped></style>
