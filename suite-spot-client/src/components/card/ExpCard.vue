<template>
    <div class='lg:w-1/4 md:w-1/2 p-4 w-full'>

        <router-link to="/coming-soon" class='block relative h-32 rounded overflow-hidden'>
            <img alt='e-commerce' class='object-cover object-center w-full h-full block' :src= "exp.image" />
        </router-link>
        <div class='mt-4'>
            <h3 class='text-gray-500 text-xs tracking-widest title-font mb-1'>
                {{exp.location}}
            </h3>
            <h2 class='text-gray-900 title-font text-lg font-medium'>
                {{exp.title}}
            </h2>
            <p class='mt-1'>${{exp.price}} per person</p>
            <div class='flex mt-1'>
                <StarIcon class='h3 w-3 text-green-500' />
                <StarIcon class='h3 w-3 text-green-500' />
                <StarIcon class='h3 w-3 text-green-500' />
                <StarIcon class='h3 w-3 text-green-500' />
                <StarIcon class='h3 w-3 text-green-500' />{{' '}}
                <span>{{exp.ratings}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid'
const props = defineProps({ exp: Object })

const { exp } = props

</script>

<style lang="scss" scoped></style>