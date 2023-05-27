<template>
   <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
         <div
            class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                           Delete
                        </th>
                        <th
                           scope="col"
                           class="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                           Update
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     <Spinner_2
                        v-if="!homes"
                        :text="'Loading'"
                        class="ml-96 mt-10"></Spinner_2>
                     <HomeDatarow
                        v-if="homes"
                        v-for="home in homes"
                        :home="home"
                        :key="home?._id"></HomeDatarow>

                     <EditModal
                        v-if="modalId == 'updateModal'"
                        :fetchHomes="fetchHomes"></EditModal>

                     <ModalDelete
                        v-if="modalId == 'deleteModal'"
                        :modalHandler="modalHandler"></ModalDelete>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { deleteHome, getHomes } from "../../api/Services";
import UseAuthStore from "../../store/AuthStore";
import HomeDatarow from "../../components/HomeDatarow.vue";
import Spinner_2 from "../../components/spinners/Spinner_2.vue";
import EditModal from "../../components/Modals/EditModal.vue";
import ModalDelete from "../../components/Modals/ModalDelete.vue";

const authStore = UseAuthStore();
const user = authStore.user;
const homes = ref(null);
const modalId = computed(() => authStore.modalId);
const deleteHomeId = computed(() => authStore.modalData);
const fetchHomes = () =>
   getHomes(user?.email).then((data) => (homes.value = data));

onMounted(() => fetchHomes());

const modalHandler = () => {
   deleteHome(deleteHomeId.value).then((data) => {
      console.log("deleted a home data ===> ", data);
      authStore.closeModal()
      fetchHomes();
   });
};
</script>

<style lang="scss" scoped></style>
