<template>
   <div>
      <Spinner v-if="loading"></Spinner>
      <div
         v-if="
            !loading &&
            bookings &&
            Array.isArray(bookings) &&
            bookings.length > 0
         "
         class="container mx-auto px-4 sm:px-8">
         <div class="py-8">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
               <div
                  class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                     <thead>
                        <tr>
                           <th
                              scope="col"
                              class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                              Title
                           </th>
                           <th
                              scope="col"
                              class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                              Location
                           </th>
                           <th
                              scope="col"
                              class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                              Price
                           </th>
                           <th
                              scope="col"
                              class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                              From
                           </th>
                           <th
                              scope="col"
                              class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                              To
                           </th>
                           <th
                              scope="col"
                              class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                              Action
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        <TableRow
                           v-for="booking in bookings"
                           :key="booking._id"
                           :booking="booking"
                            ></TableRow>
                        <ModalDelete
                           :modalHandler="modalHandler">
                        </ModalDelete>
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>

      <div v-else>
         <div
            class="h-screen text-gray-600 gap-5 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl">
            You haven't booked any home yet.
            <router-link to="/">
               <PrimaryButton
                  class="px-6 py-2 text-medium font-semibold rounded-full">
                  Browse Homes
               </PrimaryButton>
            </router-link>
         </div>
      </div>
   </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import UseAuthStore from "../../store/AuthStore";
import { getBookings } from "../../api/Bookings";
import PrimaryButton from "../../components/button/PrimaryButton.vue";
import TableRow from "../../components/TableRow.vue";
import Spinner from "../../components/spinners/Spinner.vue";
import ModalDelete from "../../components/Modals/ModalDelete.vue";
import { deleteBooking } from "../../api/Bookings";

const authStore = UseAuthStore()
const user = authStore.user;
const bookings = ref([]);
const loading = ref(false);

const fetchBookings = () => {
   loading.value = true;
   getBookings(user?.email)
      .then((data) => (bookings.value = data))
      .then(() => (loading.value = false))
      .then(() => console.log("my  booking data", bookings.value));
};

onMounted(() => {
   fetchBookings();
});


// const openModal = authStore.openModal

const modalHandler = (id) => {
   deleteBooking(id).then((data) => {
      console.log("deleted booking from mybooking", data);
      getBookings(user?.email).then((data) => (bookings.value = data));
   });
   authStore.closeModal()
};
</script>

<style lang="scss" scoped></style>
