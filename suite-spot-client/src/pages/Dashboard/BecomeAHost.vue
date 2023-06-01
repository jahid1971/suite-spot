<template>
    <div>
       <Spinner v-if="roleLoader"></Spinner>
        <div v-if="role ==='requested' && !roleLoader"
            class='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
            Request Sent, wait for admin approval
        </div>
        <div v-else-if="(role ==='host+user' || role ==='host') && !roleLoader"
            class='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
            you are already a host
        </div>
        <BecomeHostForm v-else :handleSubmit="handleSubmit"></BecomeHostForm>
    </div>
</template>

<script setup>
import { imageUpload } from '../../api/ImageUpload';
import { hostRequest, getRole } from '../../api/User';
import BecomeHostForm from '../../components/form/BecomeHostForm.vue';
import Spinner from '../../components/spinners/Spinner.vue';
import UseAuthStore from '../../store/AuthStore';
import { computed, onMounted, ref } from 'vue';
import swalToast from '../../utils/mySweetalert'

const authStore = UseAuthStore()
const user = authStore.user
const role = computed(() => authStore.role)
const roleLoader =  computed(() => authStore.roleLoader)


// onMounted(() => {
//     loading.value = true
//     getRole(user)
//         .then((data) => {
//             role.value = data?.role
//             console.log("get Role data", data?.role)
//         }).then(() => loading.value = false)
// })


const handleSubmit = (event) => {

    const location = event.target.location.value
    const image = event.target.image.files[0]
    console.log(image);

    //Upload image
    imageUpload(image)
        .then(result => {
            const hostData = {
                email: user?.email,
                location: location,
                documentImg: result?.data?.display_url,
                role: "requested"
            }

            //// Send request do server
            hostRequest(hostData)
                .then(data => {
                    if (data?.result?.acknowledged) { 
                        authStore.role = "requested"  //set role 
                        console.log(data?.result, '....... hostRequest response ')
                        swalToast("Request Sent,please wait for admin approval.", "success")
                    }
                    
                })
                .catch(error => console.log(error))

        })
        .catch(err => console.log(err))
}



</script>

<style lang="scss" scoped></style>