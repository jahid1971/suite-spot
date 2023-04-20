<template>
    <div>
        <h1 class='text-3xl font-bold text-gray-800 py-8 text-center'>
            Add Home
        </h1>
        <AddServiceForm :handleSubmit="handleSubmit" :arrivalDate='arrivalDate' :setArrivalDate="setArrivalDate"
            :departureDate='departureDate' :setDepartureDate='setDepartureDate' :loading='loading' />
        <!-- handleImageChange={handleImageChange} preview={preview} uploadButtonText={uploadButtonText}  -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AddServiceForm from '../../components/form/AddServiceForm.vue';
import { imageUpload } from '../../api/ImageUpload'
import UseAuthStore from '../../store/AuthStore'
import {addHome} from '../../api/Services'
import swalToast from '../../utils/mySweetalert'
import { useRoute, useRouter } from 'vue-router';

const user = UseAuthStore().user
const loading = ref(false)
const arrivalDate = ref(new Date())
const setArrivalDate = value => arrivalDate.value = value
const departureDate = ref(new Date())
const setDepartureDate = value => departureDate.value = value
const router = useRouter()


const handleSubmit = event => {
    // event.preventDefault()
    const location = event.target.location.value
    const title = event.target.title.value
    const from = arrivalDate.value
    const to = departureDate.value
    const price = event.target.price.value
    const total_guest = event.target.total_guest.value
    const bedrooms = event.target.bedrooms.value
    const bathrooms = event.target.bathrooms.value
    const description = event.target.description.value
    const image = event.target.image.files[0]
    loading.value = true
    imageUpload(image)
        .then(res => {
    const homeData = {
        location,
        title,
        from,
        to,
        price,
        total_guest,
        bedrooms,
        bathrooms,
        description,
        image: res.data.display_url,
        host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
        },
    }

    addHome(homeData).then(data => {
        console.log(data)
        loading.value = false
        swalToast("Add home successfull", "success")
        router.push('/dashboard/manage-homes')
    })
    })
    .catch(err => {
        console.log(err)
        loading.value = false
    })

}

</script>

<style lang="scss" scoped></style>