<template>
    <div class='flex overflow-hidden bg-white rounded-lg shadow-lg my-4'>

        <router-link :to="`/service-details/${home?._id}`"
         class="block relative h-48 rounded overflow-hidden w-1/2">
            <img alt='e-commerce' class='object-cover object-center w-full h-full block' src={home?.image} />
        </router-link>
        <div class='w-1/2 px-2 flex flex-col justify-around'>
            <div>
                <h2 class='text-gray-900 title-font text-lg font-medium'>
                    {home?.title}
                </h2>
                <h3 class='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                    {home?.total_guest} Guests {home?.bedrooms} Bedrooms{' '}
                    {home?.bathrooms} bath
                </h3>
                <h3 class='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                    Wifi | Air condition | Kitchen
                </h3>
                <br />
                <h3 class='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                    Cancellation Flexibility: Available
                </h3>
            </div>

            <div class='flex justify-between'>
                <div class='flex gap-1 mt-1'>
                    <StarIcon class='h4 w-4 text-green-500' /> <span>4.8 (10)</span>
                </div>
                <p class='mt-1'>${home?.price} per night.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';


</script>

<style lang="scss" scoped></style>