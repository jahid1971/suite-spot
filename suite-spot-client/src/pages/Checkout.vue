<template>
    <div class='md:flex gap-5 items-start justify-between sm:mx-10 md:mx-20 px-4 lg:mx-32 py-4'>
        <div class="flex-1">
            <TabGroup :selectedIndex="selectedTab" @change="changeTab">
                <TabList>

                    <div class="container flex flex-wrap items-center py-4 mx-auto overflow-y-auto whitespace-nowrap">
                        <Tab as="template" v-slot="{ selected }">
                            <button
                                :class="[selected ? 'text-blue-600 focus:outline-none bg-green-50 p-1' : 'text-gray-600']">
                                1. Reviews house rules
                            </button>
                        </Tab>
                        <span class='mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100'>
                            <svg xmlns='http://www.w3.org/2000/svg' class='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                                <path fillRule='evenodd'
                                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                    clipRule='evenodd' />
                            </svg>
                        </span>
                        <Tab as="template" v-slot="{ selected }">
                            <button
                                :class="[selected ? 'text-blue-600 focus:outline-none bg-green-50 p-1' : 'text-gray-600']">
                                2. Who's coming?
                            </button>
                        </Tab>
                        <span class='mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100'>
                            <svg xmlns='http://www.w3.org/2000/svg' class='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                                <path fillRule='evenodd'
                                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                    clipRule='evenodd' />
                            </svg>
                        </span>
                        <Tab as="template" v-slot="{ selected }">
                            <button
                                :class="[selected ? 'text-blue-600 focus:outline-none bg-green-50 p-1' : 'text-gray-600']">
                                3. Confirm and pay
                            </button>
                        </Tab>
                        <span class='mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100'>
                            <svg xmlns='http://www.w3.org/2000/svg' class='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                                <path fillRule='evenodd'
                                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                    clipRule='evenodd' />
                            </svg>
                        </span>
                    </div>


                </TabList>
                <TabPanels>
                    <TabPanel>
                        <ReviewHouse v-if="checkoutData" :checkoutData="checkoutData" :changeTab='changeTab'></ReviewHouse>
                    </TabPanel>

                    <TabPanel>
                        <WhoIsComing :host="checkoutData?.homeData?.host" :addComment="addComment" :changeTab="changeTab">
                        </WhoIsComing>
                    </TabPanel>
                    
                    <TabPanel>
                        <CheckoutForm :bookingData="bookingData"></CheckoutForm>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
        <CheckoutCard v-if="checkoutData" :checkoutData="checkoutData">
        </CheckoutCard>
    </div>
</template>
  
<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { computed, ref } from 'vue';
import CheckoutCard from '../components/checkout/CheckoutCard.vue';
import ReviewHouse from '../components/checkout/ReviewHouse.vue';
import WhoIsComing from '../components/checkout/WhoIsComing.vue';
import CheckoutForm from '../components/checkout/payment/CheckoutForm.vue';
import UseAuthStore from '../store/AuthStore'
import { useRoute } from 'vue-router';

const route = useRoute()
const authStore = UseAuthStore()
const user = computed(() => authStore?.authUser)


const selectedTab = ref(0)


const changeTab = index => {
    selectedTab.value = index
}



const checkoutData = JSON.parse(route?.query?.data) // from detailsCard  
console.log('check out data inside checkout', checkoutData);


const bookingData = ref({
    home: {
        id: checkoutData?.homeData?._id,
        image: checkoutData?.homeData?.image,
        title: checkoutData?.homeData?.title,
        location: checkoutData?.homeData?.location,
        from: checkoutData?.arrivalDate,
        to: checkoutData?.departureDate,
    },
    hostEmail: checkoutData?.homeData?.host?.email,
    comment: '',
    price: parseFloat(checkoutData?.totalPrice),
    guestEmail: user.value?.email
})



const addComment = (commentData) => {
    bookingData.value.comment = commentData
}  
</script>