<template>
    <div>
       <Spinner v-if="loading"></Spinner>
        <div v-if="role && !loading"
            className='h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl'>
            Request Sent, wait for admin approval
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
import { onMounted, ref } from 'vue';

const user = UseAuthStore().user
const role = ref(null)
const loading = ref(false)


onMounted(() => {
    loading.value = true
    getRole(user)
        .then((data) => {
            role.value = data?.role
            console.log("get Role data", data?.role)
        }).then(() => loading.value = false)
})


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
                    if (data?.result?.acknowledged) role.value = "requested"  //set role 
                    console.log(data?.result, '....... hostRequest response ')
                })
                .catch(error => console.log(error))

        })
        .catch(err => console.log(err))
}



</script>

<style lang="scss" scoped></style>