<template>
   <div class="">
      <div class="w-full text-center text-lg font-semibold">
         Update Service
      </div>
      <div class="flex justify-center mt-6">
         <div
            v-if="homeData"
            class="w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50">
            <form
               @submit.prevent="handleSubmit"
               class="space-y-6 ng-untouched ng-pristine ng-valid">
               <div class="space-y-1 text-sm">
                  <label
                     htmlFor="location"
                     class="block text-gray-600">
                     Location
                  </label>
                  <input
                     class="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                     name="location"
                     v-model="homeData.location"
                     id="location"
                     type="text"
                     placeholder="Location"
                     required />
               </div>
               <div class="space-y-1 text-sm">
                  <label htmlFor="title" class="block text-gray-600">
                     Title
                  </label>
                  <input
                     class="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                     name="title"
                     v-model="homeData.title"
                     id="title"
                     type="text"
                     placeholder="Title"
                     required />
               </div>

               <div class="flex justify-between">
                  <div
                     class="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                     <div>
                        <p class="block text-sm text-gray-500">
                           From
                        </p>
                        <VueDatePicker
                           class="w-2/3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                           v-model="homeData.from"
                           Default:true
                           auto-apply
                           :close-on-auto-apply="true"
                           :enable-time-picker="false">
                        </VueDatePicker>
                     </div>
                  </div>
                  <div
                     class="shadow-md rounded-md my-2 p-3 flex justify-between items-center">
                     <div>
                        <p class="block text-sm text-gray-500">To</p>
                        <VueDatePicker
                           class="w-2/3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                           v-model="homeData.to"
                           Default:true
                           auto-apply
                           :close-on-auto-apply="true"
                           :enable-time-picker="false">
                        </VueDatePicker>
                     </div>
                  </div>
               </div>

               <div class="flex justify-between gap-2">
                  <div class="space-y-1 text-sm">
                     <label
                        htmlFor="price"
                        class="block text-gray-600">
                        Price
                     </label>
                     <input
                        class="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                        name="price"
                        v-model="homeData.price"
                        id="price"
                        type="number"
                        placeholder="Price"
                        required />
                  </div>

                  <div class="space-y-1 text-sm">
                     <label
                        htmlFor="guest"
                        class="block text-gray-600">
                        Total guest
                     </label>
                     <input
                        class="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                        name="total_guest"
                        v-model="homeData.total_guest"
                        id="guest"
                        type="number"
                        placeholder="Total guest"
                        required />
                  </div>
               </div>

               <div class="flex justify-between gap-2">
                  <div class="space-y-1 text-sm">
                     <label
                        htmlFor="bedrooms"
                        class="block text-gray-600">
                        Bedrooms
                     </label>
                     <input
                        class="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                        name="bedrooms"
                        v-model="homeData.bedrooms"
                        id="bedrooms"
                        type="number"
                        placeholder="Bedrooms"
                        required />
                  </div>

                  <div class="space-y-1 text-sm">
                     <label
                        htmlFor="bathrooms"
                        class="block text-gray-600">
                        Bathrooms
                     </label>
                     <input
                        class="w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50"
                        name="bathrooms"
                        v-model="homeData.bathrooms"
                        id="bathrooms"
                        type="number"
                        placeholder="Bathrooms"
                        required />
                  </div>
               </div>

               <div class="flex items-center">
                  <label
                     htmlFor="image"
                     class="p-2 w-full pl-0 text-center rounded-md cursor-pointer text-gray-500 font-bold border border-green-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-white">
                     <!-- {uploadButtonText} -->
                     <!-- onChange={event => handleImageChange(event.target.files[0])} -->
                     <input
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*" />
                  </label>
                  <!-- {preview && (
                <img src={preview} class='w-16 h-16' alt='preview_img' />
              )} -->
               </div>

               <div class="space-y-1 text-sm">
                  <label
                     htmlFor="description"
                     class="block text-gray-600">
                     Description
                  </label>

                  <textarea
                     id="description"
                     class="block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500"
                     name="description"
                     v-model="homeData.description">
                  </textarea>
               </div>

               <button
                  type="submit"
                  class="block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none">
                  <SmallSpinnerVue v-if="loading" />
                  <p v-else>Save & Continue</p>
                  <!-- <span v-else></span> -->
               </button>
            </form>
         </div>
      </div>
   </div>
</template>

<script setup>
import { computed, ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import SmallSpinnerVue from "../spinners/SmallSpinner.vue";
import UseAuthStore from "../../store/AuthStore";
import { updateHome } from "../../api/Services";
import swalToast from "../../utils/mySweetalert";

const authStore = UseAuthStore();

const props = defineProps(["fetchHomes"]);

const homeData = computed(() => authStore.modalData);

// const arrivalDate = ref(new Date(homeData.value?.from));
// const departureDate = ref(new Date(homeData.value?.to));
const loading = ref(false)
console.log("modalData?homeData ===>", homeData.value);

const handleSubmit = () => {
   console.log("homeData ....", homeData.value);

   loading.value = true
   updateHome(homeData.value).then((data) => {
      loading.value = false 
      authStore.closeModal();
      props.fetchHomes();
      console.log("data after update home...=>", data);
   });
};
</script>

<style scoped></style>
