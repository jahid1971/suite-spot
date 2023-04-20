<template>
   
    <router-link to="/dashboard/all-users" :class="[
        'flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700',
        $route.path === '/dashboard/all-users' ? 'bg-gray-300  text-gray-700 ' : 'text-gray-600'
        ]"
        >
        <FingerPrintIcon class='w-5 h-5' />

        <span class='mx-4 font-medium'>All Users</span>
    </router-link>

    <router-link to="/dashboard/all-bookings" :class="[
        'flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700',
        $route.path === '/dashboard/all-bookings' ? 'bg-gray-300  text-gray-700 ' : 'text-gray-600'
        ]"
        >
        <UserPlusIcon class='w-5 h-5' />

        <span class='mx-4 font-medium'>All Bookings</span>
    </router-link>
</template>

<script setup>
import { FingerPrintIcon, UserPlusIcon } from '@heroicons/vue/24/solid';
import { onMounted, onUnmounted } from 'vue';

onMounted(()=> console.log("onmountedddddd   adminVue"))
onUnmounted(()=> console.log("uuuuuunnnnnnnnnnmountedddddd   adminVue"))


</script>

<style lang="scss" scoped></style>