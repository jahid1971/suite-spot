<template>
 <tr>
      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div class='flex items-center'>
          <div class='flex-shrink-0'>
            <div class='block relative'>
              <img
                alt='home'
                class='mx-auto object-cover rounded h-10 w-15 '
                :src="booking?.home?.image"
              />
            </div>
          </div>
          <div class='ml-3'>
            <p class='text-gray-900 whitespace-no-wrap'>
              {{booking?.home?.title}}
            </p>
          </div>
        </div>
      </td>
      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p class='text-gray-900 whitespace-no-wrap'>
          {{booking?.home?.location}}
        </p>
      </td>
      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p class='text-gray-900 whitespace-no-wrap'>${{booking?.price}}</p>
      </td>
      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p class='text-gray-900 whitespace-no-wrap'>
          {{format(new Date(booking?.home?.from), 'P')}}
        </p>
      </td>
      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p class='text-gray-900 whitespace-no-wrap'>
          {{format(new Date(booking?.home?.to), 'P')}}
        </p>
      </td>
      <td class='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
        
          class='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            class='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span @click="openModal(booking?._id)" class='relative'> Cancel </span>
        </span>
      </td>
    </tr>
</template>

<script setup>
import { ref } from 'vue';
import { format } from 'date-fns'
import UseAuthStore from '../store/AuthStore';


const props = defineProps(['booking'])
const openModal = UseAuthStore().openModal


const booking = props.booking
console.log('booking in table row',booking);

</script>

<style lang="scss" scoped>

</style>