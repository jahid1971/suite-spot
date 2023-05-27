<template>
   <ReusableModal>
      <DialogTitle
         as="h3"
         class="text-lg font-medium leading-6 text-gray-900">
         Are you sure?
      </DialogTitle>
      <div class="mt-2">
         <p class="text-sm text-gray-500">
            You cannot undo once it's done!
         </p>
      </div>
      <hr class="mt-8" />
      <div class="flex mt-2 justify-around">
         <button
            type="button"
            class="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            @click="modalHandler(id)">
            Yes
         </button>
         <button
            type="button"
            class="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            @click="closeModal">
            No
         </button>
      </div>
   </ReusableModal>
</template>

<script setup>
import { computed } from "vue";
import UseAuthStore from "../../store/AuthStore";
import ReusableModal from "./ReusableModal.vue";
import { DialogTitle } from "@headlessui/vue";

const props = defineProps(["modalHandler"]);

const authStore = UseAuthStore()
const closeModal = authStore.closeModal;
const id = computed(() => authStore.modalData)


</script>

<style lang="scss" scoped></style>
