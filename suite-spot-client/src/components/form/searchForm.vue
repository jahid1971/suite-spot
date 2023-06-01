<template>
   <div class="max-w-sm p-6 m-auto mx-auto">
      <h1 class="text-xl font-semibold text-gray-700">Where do you want to go</h1>

      <form class="mt-6">
         <div class="shadow-md rounded-md my-2 p-3">
            <label htmlFor="location" class="block text-md font-bold text-gray-800">
               Location
            </label>

            <input
               @input="handleInputLocation"
               type="text"
               v-model="location"
               name="location"
               required
               placeholder="Add city or place name"
               class="block w-full mt-1 p-1 text-gray-700 bg-white focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
               list="location-suggestions" />

            <!-- search suggestion -->
            <ul
               v-if="showSuggestions"
               v-click-away="() => (showSuggestions = false)"
               class="location-suggestions" >
               <li
                  v-for="suggestion in locationSuggestions"
                  @click="selectSuggestion(suggestion)"
                  :key="suggestion.id">
                  {{ suggestion.location }}
               </li>
            </ul>
         </div>
         <div class="flex gap-2 justify-between">
            <div class="shadow-md rounded-md my-2 flex justify-between items-center">
               <div>
                  <p class="block text-sm text-gray-500 mb-1">Arrival</p>
                  <!-- <Datepicker v-model="arrivalDate"  class="w-2/3" /> -->
                  <VueDatePicker
                     v-model="arrivalDate"
                     Default:true
                     auto-apply
                     :close-on-auto-apply="true"
                     :enable-time-picker="false">
                  </VueDatePicker>
               </div>
            </div>
            <div class="shadow-md rounded-md my-2 flex justify-between items-center">
               <div>
                  <p class="block text-sm text-gray-500 mb-1">Departure</p>

                  <VueDatePicker
                     v-model="depertureDate"
                     Default:true
                     auto-apply
                     :close-on-auto-apply="true"
                     :enable-time-picker="false">
                  </VueDatePicker>
               </div>
            </div>
         </div>

         <div class="mt-6">
            <PrimaryButton
               type="submit"
               @click.prevent="handleSubmit"
               classes="w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md">
               Search
            </PrimaryButton>
         </div>
      </form>
   </div>
</template>

<script setup>
import PrimaryButton from "../button/PrimaryButton.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchLocationSuggestion } from "../../api/Services";

// const props = defineProps(["homes"]);
// console.log("homesss", props.homes);
// const locations = computed(() => props.homes?.map((home) => home.location));
const router = useRouter();

const location = ref("");

const arrivalDate = ref(new Date());
const depertureDate = ref(new Date(arrivalDate.value.getTime() + 24 * 60 * 60 * 1000));

const handleSubmit = () => {
   const query = {
      location: location.value,
      from: arrivalDate.value,
      to: depertureDate.value,
   };
   router.push({ path: "/search-result", query: { q: JSON.stringify(query) } });
};

const locationSuggestions = ref([]);
const showSuggestions = ref(false);

const handleInputLocation = (e) => {
   location.value = e.target.value;
   fetchLocationSuggestion(location.value).then((data) => {
      locationSuggestions.value = data;
      showSuggestions.value = true;
      console.log(locationSuggestions.value);
   });
};
const selectSuggestion = (suggestion) => {
   location.value = suggestion.location;
   showSuggestions.value = false;
};
</script>

<style scoped>
.location-suggestions {
   list-style-type: none;
   padding: 0;
   margin: 0;
   border: 1px solid #ccc;
   border-top: none;
   max-height: 200px;
   overflow-y: auto;
}

.location-suggestions li {
   padding: 8px;
   cursor: pointer;
}

.location-suggestions li:hover {
   background-color: #f2f2f2;
}
</style>
