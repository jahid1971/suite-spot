<template>
    <div class='w-full max-w-sm p-6 m-auto mx-auto'>
        <h1 class='text-xl font-semibold text-gray-700'>
            Where do you want to go
        </h1>

        <form  class='mt-6'>
            <div class='shadow-md rounded-md my-2 p-3'>
                <label htmlFor='location' class='block text-md font-bold text-gray-800'>
                    Location
                </label>
                <input type='text' v-model="location" 
                name='location'
                required
                placeholder='Add city, Landmark or address'
                class='block w-full mt-1 p-1 text-gray-700 bg-white focus:border-green-400 focus:ring-green-300
                focus:outline-none focus:ring focus:ring-opacity-40'
                />
            </div>

            <div class='flex justify-between'>
                <div class='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                    <div>
                        <p class='block text-sm text-gray-500'>Arrival</p>
                            <Datepicker v-model="arrivalDate"  class="w-2/3" />
                    </div>

                    <CalendarIcon class='h5 w-5' />
                </div>
                <div class='shadow-md rounded-md my-2 p-3 flex justify-between items-center'>
                    <div>
                        <p class='block text-sm text-gray-500'>Departure</p>
                            <Datepicker v-model="depertureDate"  class="w-2/3" />
                    </div>

                    <CalendarIcon class='h5 w-5' />

                </div>
            </div>

            <div class='mt-6'>
                <PrimaryButton type='submit' @click.prevent = "handleSubmit"
                    classes='w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'>
                    Search
                </PrimaryButton>
                
            </div>
        </form>
    </div>
</template>

<script setup>
import PrimaryButton from '../button/PrimaryButton.vue'
import { CalendarIcon } from '@heroicons/vue/24/solid'
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

 
const router = useRouter()


 const arrivalDate = ref(new Date())
 const depertureDate = ref(new Date(arrivalDate.value.getTime()+ 24* 60 * 60 * 1000))
 const location = ref('Dhaka')
 const handleSubmit = () => {
 
    const query = {
        location : location.value,
        from : arrivalDate.value,
        to: depertureDate.value
    }
        router.push({ path: '/search-result', query: { q: JSON.stringify(query) } });   

        
 }

</script>

<style lang="scss" scoped></style>