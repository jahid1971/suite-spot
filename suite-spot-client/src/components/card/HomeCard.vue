<template>
    <div class='lg:w-1/3 md:w-1/2 p-4 w-full'>
        <router-link :to="'/service-details/' + home?._id" class='block relative h-48 rounded overflow-hidden'>
            <img alt='home-img' class='object-cover object-center w-full h-full block' :src="home?.image" />
        </router-link>
        <div class='mt-4'>
            <h3 class='text-gray-500 text-xs tracking-widest title-font mb-1'>
                {{home?.location}}
            </h3>
            <h2 class='text-gray-900 title-font text-lg font-medium'>
                {{home?.title}}
            </h2>
            <p class='mt-1'>${{home?.price}} per person</p>
            <div class='flex mt-1'>
                <StarIcon class='h3 w-3 text-green-500' />
                <StarIcon class='h3 w-3 text-green-500' />
                <StarIcon class='h3 w-3 text-green-500' />
                <StarIcon class='h3 w-3 text-green-500' />
                <StarIcon class='h3 w-3 text-green-500' /> <span>64</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
    home:Object
})

</script>

<style lang="scss" scoped></style>