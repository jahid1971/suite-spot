<template>
  <div>

    <form class='my-10 max-w-lg'>

      <button class=' mt-4 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-md text-white px-4 py-1'
        @click.prevent="handleSubmit">
        Pay
      </button>
    </form>


  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import {saveBookings} from '../../api/Bookings'

const props = defineProps(['bookingData'])

const handleSubmit = () => {
  saveBookings(props.bookingData)
}


</script>

<style lang="scss" scoped></style>