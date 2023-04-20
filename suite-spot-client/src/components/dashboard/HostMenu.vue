<template>
   
    <router-link to="/dashboard/manage-homes" :class="[
        'flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700',
        $route.path === '/dashboard/manage-homes' ? 'bg-gray-300  text-gray-700 ' : 'text-gray-600'
        ]"
        >
        <FingerPrintIcon class='w-5 h-5' />

        <span class='mx-4 font-medium'>Manage Homes</span>
    </router-link>

    <router-link to="/dashboard/add-homes" :class="[
        'flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700',
        $route.path === '/dashboard/add-homes' ? 'bg-gray-300  text-gray-700 ' : 'text-gray-600'
        ]"
        >
        <UserPlusIcon class='w-5 h-5' />

        <span class='mx-4 font-medium'>Add Homes</span>
    </router-link>
</template>

<script setup>
import { FingerPrintIcon, UserPlusIcon } from '@heroicons/vue/24/solid';
import { onMounted, onUnmounted } from 'vue';

onMounted(()=> console.log("onmountedddddd   adminVue"))
onUnmounted(()=> console.log("uuuuuunnnnnnnnnnmountedddddd   adminVue"))


</script>

<style lang="scss" scoped></style>