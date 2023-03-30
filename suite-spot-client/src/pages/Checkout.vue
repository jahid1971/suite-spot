<template>
    <div class='md:flex gap-5 items-start justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-4'>
        <div class="flex-1">
            <TabGroup>
                <TabList>

                    <div class="container flex flex-wrap items-center py-4 mx-auto overflow-y-auto whitespace-nowrap">
                        <Tab>
                            <button :class="[selected ? 'text-blue-600' : 'text-gray-600']">
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
                        <Tab>
                            <button :class="[selected ? 'text-blue-600' : 'text-gray-600']">
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
                        <Tab>
                            <button :class="[selected ? 'text-blue-600' : 'text-gray-600']">
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
                        <ReviewHouse></ReviewHouse>
                    </TabPanel>
                    <TabPanel>
                        <WhoIsComing></WhoIsComing>
                    </TabPanel>
                    <TabPanel>
                        <CheckoutCard></CheckoutCard>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </div>
    </div>
</template>
  
<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import CheckoutCard from '../components/checkout/CheckoutCard.vue';
import ReviewHouse from '../components/checkout/ReviewHouse.vue';
import WhoIsComing from '../components/checkout/WhoIsComing.vue';

// const selected = true
</script>