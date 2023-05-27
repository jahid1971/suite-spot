<template>
   <ReusableModal class="">
      <div class="flex justify-end">
         <PrimaryButton
            @click="closeModal"
            class="px-4 py-1 rounded-md mr-2"
            >X</PrimaryButton
         >
      </div>
      <UpdateServiceForm :fetchHomes="fetchHomes"></UpdateServiceForm>
   </ReusableModal>
</template>

<script setup>
import { onMounted } from "vue";
import UpdateServiceForm from "../../components/form/UpdateServiceForm.vue";
import UseAuthStore from "../../store/AuthStore";
import PrimaryButton from "../button/PrimaryButton.vue";
import ReusableModal from "./ReusableModal.vue";


const props = defineProps(["fetchHomes"]);
const authStore = UseAuthStore()
const closeModal = authStore.closeModal;

// const modalHandler = props.modalHandler
// const home = authStore.modalData

</script>

<style lang="scss" scoped></style>
