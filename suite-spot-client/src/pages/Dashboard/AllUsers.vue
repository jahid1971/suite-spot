<template>
   <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
         <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
               <table class="min-w-full leading-normal">
                  <thead>
                     <tr>
                        <th
                           scope="col"
                           class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                           Email
                        </th>
                        <th
                           scope="col"
                           class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                           Role
                        </th>
                        <th
                           scope="col"
                           class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                           Action
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="user in allUsers" :key="user?._id">
                        <td
                           class="w-5/12 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                           <p class="text-gray-900 whitespace-no-wrap">
                              {{ user?.email }}
                           </p>
                        </td>

                        <td
                           class="w-4/12 px-5 py-5 border-b border-gray-200 bg-white text-sm">
                           <p class="text-gray-900 whitespace-no-wrap">
                              {{ user?.role ? user.role : "User" }}
                           </p>
                        </td>
                        <td class="3/12 py-5 border-b border-gray-200 bg-white text-sm">
                           <span
                              v-if="user?.role && user.role === 'requested'"
                              class="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                 aria-hidden="true"
                                 class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>

                              <span class="relative" @click="handleRequest(user)">
                                 <Spinner_2
                                    class="inset-0"
                                    :text="''"
                                    v-if="loading"></Spinner_2>

                                 <span v-else> Approve Request </span>
                              </span>
                           </span>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import UseAuthStore from "../../store/AuthStore";
import SmallSpinner from "../../components/spinners/SmallSpinner.vue";
import { getAllUsers, makeHost } from "../../api/User";
import Spinner_2 from "../../components/spinners/Spinner_2.vue";

const allUsers = ref([]);
const loading = ref(false);

onMounted(() => {
   // loading.value = true
   getUsers();
});
const getUsers = () => {
   loading.value = true;
   getAllUsers().then((data) => {
      allUsers.value = data;
      loading.value = false;
   });
};

const handleRequest = (user) => {
   const body = { ...user, role: "host" };
   makeHost(body).then((data) => {
      getUsers();
      console.log(data);
   });
};
</script>

<style lang="scss" scoped></style>
