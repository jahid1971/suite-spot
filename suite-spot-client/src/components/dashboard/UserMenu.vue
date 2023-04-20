<template>
    <div>

        <router-link :to="{ name: 'myBookings' }" :class="[
            'flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700',
            $route.name === 'myBookings' ? 'bg-gray-300  text-gray-700 ' : 'text-gray-600']">

            <FingerPrintIcon class='w-5 h-5' />

            <span class='mx-4 font-medium'>My Bookings</span>
        </router-link>

        <router-link to='/dashboard/become-host' :class="['flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700',
            $route.path === '/dashboard/become-host' ? 'bg-gray-300 text-gray-700' : 'text-gray-600']">

            <UserPlusIcon class='w-5 h-5' />

            <span class='mx-4 font-medium'>Become A Host</span>
        </router-link>
    </div>
</template>

<script setup>
import { FingerPrintIcon, UserPlusIcon } from '@heroicons/vue/24/solid';


</script>

<style lang="scss" scoped></style>