<template>
    <div class='relative min-h-screen md:flex  '>
        <!-- {loading ? (
        ''
      ) : ( -->
        <div class="">
            <Sidebar :role="role" :loading="loading"> </Sidebar>
        </div>

        <div class='flex-1  md:ml-64'>
            <div class='p-5'>
                <router-view></router-view>
            </div>
        </div>

        <!-- )} -->
    </div>
</template>

<script setup>
import { onUnmounted, ref } from 'vue';
import Sidebar from '../components/dashboard/Sidebar.vue';
import UseAuthStore from '../store/AuthStore';
import { onMounted } from 'vue';
import { getRole } from '../api/User';

const authStore = UseAuthStore()
const user = authStore.user
const loading = ref(false)
// const role = authStore.role

// onMounted(() => {
//     // console.log(role," dashboar layout mounteddd before getRole");
//     loading.value = true
//     getRole(user)
//         .then((data) => {
//             authStore.role = data
//             console.log("get Role data", data?.role)
//             // console.log(role," dashboar layout mounteddd after getRole")
//         }).then(() => loading.value = false)

// })



</script>

<style lang="scss" scoped></style>