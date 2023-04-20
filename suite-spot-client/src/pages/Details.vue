<template>
  <div>
    <!-- "Header"  -->
    <div class='flex flex-wrap h-[400px]'>
      <div class='w-1/2 h-full overflow-hidden'>
        <img alt='feature' class='object-cover object-start h-full w-full' :src="homeData?.image" />
      </div>
      <div class='w-1/2 h-full overflow-hidden'>
        <img alt='feature' class='object-cover object-start h-full w-full'
          src='https://i.ibb.co/DCzG2cp/christine-roy-ir5-MHI6r-Pg0-unsplash-1.jpg' />
      </div>
    </div>

     <!-- "Main Content" -->
    <div class='md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12'>
      <!-- "Details"  -->
      <HomeDetails  v-if="homeData" :homeData="homeData" />
       <!-- "Cart"  -->
      <DetailsCard v-if="homeData" :homeData="homeData" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import DetailsCard from '../components/Details/DetailsCard.vue';
import HomeDetails from '../components/Details/HomeDetails.vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { async } from '@firebase/util';

const route = useRoute()
const homeData = ref(null)

onMounted(async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/home/${route.params.id}`)
  homeData.value = response.data
  console.log("detailsss of a single home ",response.data);

})

</script>

<style lang="scss" scoped></style>