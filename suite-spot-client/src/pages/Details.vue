<template>
 <div>
      {{"Header" }}
      <div class='flex flex-wrap h-[400px]'>
        <div class='w-1/2 h-full overflow-hidden'>
          <img
            alt='feature'
            class='object-cover object-start h-full w-full'
            src={{homeData.image}}
          />
        </div>
        <div class='w-1/2 h-full overflow-hidden'>
          <img
            alt='feature'
            class='object-cover object-start h-full w-full'
            src='https://i.ibb.co/DCzG2cp/christine-roy-ir5-MHI6r-Pg0-unsplash-1.jpg'
          />
        </div>
      </div>

      {{ "Main Content" }}
      <div class='md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12'>
        {{"Details"}}
        <HomeDetails  />
        {{"Cart"}}
        <DetailsCard  />
      </div>
    </div>
</template>

<script setup>
import DetailsCard from '../components/Details/DetailsCard.vue';
import HomeDetails from '../components/Details/HomeDetails.vue';


</script>

<style lang="scss" scoped>

</style>