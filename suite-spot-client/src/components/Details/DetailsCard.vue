<template>
   <div class="p-4 md:w-1/2 lg:w-5/12 w-full h-full rounded shadow-lg">
      <h1 class="text-gray-900 text-3xl title-font font-medium mb-2">
         ${{ homeData?.price }}/ <span class="font-thin">night</span>
      </h1>
      <div class="flex gap-1 mb-2">
         <StarIcon class="h4 w-4 text-green-500" />{{ " " }}
         <span>4.8 (43 reviews)</span>
      </div>

      <p>Dates</p>

      <div class="flex gap-2 justify-between">
         <div class="shadow-md rounded-md my-2 flex justify-between items-center">
            <div>
               <p class="block text-sm text-gray-500 mb-1">Arrival</p>
               <VueDatePicker
                  :disabled-dates="alreadyBookedDates"
                  v-model="arrivalDate"
                  :max-date="homeData.to"
                  :min-date="new Date()"
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
                  @closed="isDateSelected"
                  v-model="departureDate"
                  :disabled-dates="alreadyBookedDates"
                  :max-date="homeData.to"
                  :min-date="new Date()"
                  Default:true
                  auto-apply
                  :close-on-auto-apply="true"
                  :enable-time-picker="false">
               </VueDatePicker>
            </div>
         </div>
      </div>
      <p class="font-semibold text-xl text-red-500">{{ message }}</p>

      <div class="flex border-t border-gray-200 py-2">
         <span class="text-gray-500">Maximum Guest</span>
         <span class="ml-auto text-gray-900">{{ homeData?.total_guest }}</span>
      </div>

      <div class="flex border-t border-gray-200 py-2">
         <span class="text-gray-500">
            ${{ homeData?.price }} x {{ totalNights }} nights
         </span>
         <span class="ml-auto text-gray-900">${{ sub_total }}</span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
         <span class="text-gray-500">Cleaning Fee</span>
         <span class="ml-auto text-gray-900">$10</span>
      </div>
      <div class="flex border-t border-gray-200 py-2">
         <span class="text-gray-500">Service Fee</span>
         <span class="ml-auto text-gray-900">$21</span>
      </div>
      <div class="flex border-t border-b mb-6 border-gray-200 py-2">
         <span class="text-gray-900 font-bold">Total</span>
         <span class="ml-auto text-gray-900">${{ total }}</span>
      </div>
      <div class="mt-6 mb-2">
         <PrimaryButton
            @click="handleReserve"
            classes="w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md">
            Reserve
         </PrimaryButton>
      </div>
      <p v-if="dateSelectrequest" class="font-semibold text-xl text-red-500">
         Please select arrival and departure date
      </p>
      <p class="text-center text-gray-400 mb-6">You won't be charged yet!</p>
   </div>
</template>

<script setup>
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import PrimaryButton from "../button/PrimaryButton.vue";
import { differenceInCalendarDays, format } from "date-fns";
import { useRouter } from "vue-router";
import VueDatePicker from "@vuepic/vue-datepicker";
import { ref, computed } from "vue";
import { eachDayOfInterval } from "date-fns";

const router = useRouter();
const props = defineProps({
   homeAndBookings: Object,
});
const homeData = props.homeAndBookings.home;
const alreadyBookedDates = props.homeAndBookings.alreadyBookedDates;

console.log('already booked ',alreadyBookedDates);

const arrivalDate = ref(new Date());
const departureDate = ref(new Date());
const message = ref("");
const dateSelectrequest = ref(false);
const dateSelected = ref(false);

// Date Validation
const isDateSelected = () => {
   if (arrivalDate.value > departureDate.value)
      return (message.value = "Departure Date must be after arrival date!!!");
   if (arrivalDate.value.toDateString() === departureDate.value.toDateString())
      return (message.value = " Arrival and Departure date can not be the same date!!!");

      // console.log('arrival dearture ',new Date(arrivalDate.value).setMinutes(0), departureDate.value.setMinutes(0));
   const selectedDates = eachDayOfInterval({
      start: new Date(arrivalDate.value),
      end: new Date(departureDate.value),
   });

   const matchedDate = alreadyBookedDates.find((item) => {
      const bookedDate = new Date(item);
      return selectedDates.some(
         (date) => date.toDateString() === bookedDate.toDateString()
      );
   });

   if (matchedDate) {
      message.value =
         "Sorry!! your selected date range is not available. Please try with another Date.";
      return;
   }
   dateSelected.value = true
   dateSelectrequest.value = false;
   message.value = "";
   return;
};

const totalNights = computed(() => {
   const fromDate = new Date(arrivalDate.value);
   const toDate = new Date(departureDate.value);
   return differenceInCalendarDays(toDate, fromDate);
});

const sub_total = computed(() => parseFloat(homeData?.price) * totalNights.value);
const total = computed(() => sub_total.value + 21 + 10);

//  handle reserve button
const handleReserve = () => {
   if (!dateSelected.value) {
      dateSelectrequest.value = true;
      return;
   }
   const data = {
      homeData: homeData,
      totalNights: totalNights.value,
      totalPrice: total.value,
      arrivalDate: new Date(arrivalDate.value),
      departureDate: new Date(departureDate.value),
      // arrivalDate: arrivalDate.value,
      // departureDate: departureDate.value,
   };

   router.push({
      path: "/checkout",
      query: { data: JSON.stringify(data) },
   });
};
</script>

<style lang="scss" scoped></style>
