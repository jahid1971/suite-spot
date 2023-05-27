<template>
   <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <div class="flex items-center">
            <div class="flex-shrink-0">
               <div class="block relative">
                  <img
                     alt="profile"
                     :src="home?.image"
                     class="mx-auto object-cover rounded h-10 w-15" />
               </div>
            </div>
            <div class="ml-3">
               <p class="text-gray-900 whitespace-no-wrap">
                  {{ home?.title }}
               </p>
            </div>
         </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <p class="text-gray-900 whitespace-no-wrap">
            {{ home?.location }}
         </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <p class="text-gray-900 whitespace-no-wrap">
            ${{ home?.price }}
         </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <p class="text-gray-900 whitespace-no-wrap">
            <!-- {{format(new Date(home?.from), 'P')}} -->
            {{ format(new Date(home?.from), "P") }}
         </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <p class="text-gray-900 whitespace-no-wrap">
            {{ format(new Date(home?.to), "P") }}
         </p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <span
            @click="openModal( home?._id, 'deleteModal')"
            class="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
            <span
               aria-hidden="true"
               class="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
            <span class="relative">Delete</span>
         </span>
         <!-- <DeleteModal isOpen={{isOpen}} closeModal={{closeModal}} modalHandler={{modalHandler}} id={{home._id}} /> -->
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
         <span
            @click="openModal( home, 'updateModal')"
            :class="[
               'relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight',
            ]">
            <span
               aria-hidden="true"
               class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
            <span class="relative">Update</span>
         </span>
      </td>
   </tr>
</template>

<script setup>
import { format } from "date-fns";
import UseAuthStore from "../store/AuthStore";

const props = defineProps({
   home: Object,
});

// const props = defineProps(["isOpen", "closeModal", "modalHandler"]);
const authStore = UseAuthStore();
const openModal = authStore.openModal;
</script>

<style lang="scss" scoped></style>
