<template>
   <div>
      <h1 class="text-gray-900 title-font text-4xl font-medium">Review house rules</h1>
      <br />
      <h3 class="text-gray-900 title-font text-xl font-medium">
         {{ totalNights }} nights in {{ checkoutData?.homeData.location }}
      </h3>
      <div class="flex flex-wrap gap-10 mt-4">
         <div class="flex justify-between gap-2">
            <div class="text-sm px-3 py-1 bg-gray-200 text-center">
               <p>
                  {{ format(new Date(checkoutData?.arrivalDate), "PP").split(",")[0].split(" ")[0] }}
               </p>
               <p>
                  {{ format(new Date(checkoutData?.arrivalDate), "PP").split(",")[0].split(" ")[1] }}
               </p>
            </div>
            <div>
               <p>{{ format(new Date(checkoutData?.arrivalDate), "cccc") }} check-in</p>
               <p>after 12:00 PM</p>
            </div>
         </div>
         <div class="flex justify-between">
            <div class="flex justify-between gap-2">
               <div class="text-sm px-3 py-1 bg-gray-200 text-center">
                  <p>
                     {{
                        format(new Date(checkoutData?.departureDate), "PP").split(",")[0].split(" ")[0]
                     }}
                  </p>
                  <p>
                     {{
                        format(new Date(checkoutData?.departureDate), "PP").split(",")[0].split(" ")[1]
                     }}
                  </p>
               </div>
               <div>
                  <p>{{ format(new Date(checkoutData?.departureDate), "cccc") }} check-out</p>
                  <p>before 12:00 PM</p>
               </div>
            </div>
         </div>
      </div>
      <p class="my-8 text-gray-500">Self check-in with building staff</p>
      <hr />
      <p class="text-xl font-bold my-4">Things to keep in mind</p>
      <div>
         <div class="flex flex-col items-center my-2 mt-8 mx-auto max-w-7xl sm:flex-row">
            <div
               class="inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3">
               <UserGroupIcon class="w-5 h-5" />
            </div>
            <div class="flex-grow prose sm:text-left prose-md">
               <p class="text-gray-800 text-medium">Suitable for children and infants</p>
            </div>
         </div>
         <div class="flex flex-col items-center my-2 mx-auto max-w-7xl sm:flex-row">
            <div
               class="inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3">
               <FaceSmileIcon class="w-5 h-5" />
            </div>
            <div class="flex-grow prose sm:text-left prose-md">
               <p class="text-gray-800 text-medium">Pets allowed</p>
            </div>
         </div>
         <div class="flex flex-col items-center my-2 mx-auto max-w-7xl sm:flex-row">
            <div
               class="inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3">
               <NoSymbolIcon class="w-5 h-5" />
            </div>
            <div class="flex-grow prose sm:text-left prose-md">
               <p class="text-gray-800 text-medium">No parties or events</p>
            </div>
         </div>
         <div class="flex flex-col items-center my-2 mx-auto max-w-7xl sm:flex-row">
            <div
               class="inline-flex p-2 border items-center justify-center flex-shrink-0 mt-1 text-neutral-600 bg-gray-50 sm:mr-3">
               <FireIcon class="w-5 h-5" />
            </div>
            <div class="flex-grow prose sm:text-left prose-md">
               <p class="text-gray-800 text-medium">Smoking allowed</p>
            </div>
         </div>
      </div>

      <div class="flex gap-3 items-center text-medium text-blue-600">
         <p>Read more</p>
         <ChevronDownIcon class="h-5 w-5" />
      </div>
      <br />

      <button
         class="p-2 rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white"
         @click="props.changeTab(1)">
         Agree and continue
      </button>
   </div>
</template>

<script setup>
import { defineProps } from "vue";
import {
   ChevronDownIcon,
   FaceSmileIcon,
   FireIcon,
   NoSymbolIcon,
   UserGroupIcon,
} from "@heroicons/vue/24/solid";
import { format } from "date-fns";

const props = defineProps(["changeTab", "checkoutData"]);
const checkoutData = props.checkoutData;
const totalNights = props.checkoutData.totalNights;
</script>

<style lang="scss" scoped></style>
