<template>
    <div class='px-6 py-5 md:w-1/2 lg:w-1/3 w-full h-full rounded-md shadow-lg'>
        <div class='flex justify-between'>
            <div class='text-gray-900 text-xl title-font font-medium mb-2 w-1/2'>
                {{ checkoutData?.homeData?.title }}
            </div>
            <Link to='/service-details' class='block relative h-28 rounded overflow-hidden w-1/2'>
            <img alt='e-commerce' class='object-cover object-center w-full h-full block' :src='checkoutData?.homeData?.image' />
            </Link>
        </div>
        <div class='flex gap-1 mb-2'>
            <StarIcon class='h4 w-4 text-green-500' />{{ ' ' }}
            <span>4.8 (10 reviews)</span>
        </div>

        <p>Dates</p>
        <div class='flex justify-between items-center p-2 border mt-1 mb-2'>
            <div>{{ format(new Date(checkoutData?.arrivalDate), 'P') }}</div>
            <div>
                <ArrowRightIcon class='h5 w-5' />
            </div>
            <div>{{ format(new Date(checkoutData?.departureDate), 'P') }}</div>
        </div>

        <div class='flex border-t border-gray-200 py-2'>
            <span class='text-gray-500'>
                ${{ checkoutData?.homeData?.price }} x {{ checkoutData?.totalNights }} nights
            </span>
            <span class='ml-auto text-gray-900'>${{ sub_total }}</span>
        </div>
        <div class='flex border-t border-gray-200 py-2'>
            <span class='text-gray-500'>Cleaning Fee</span>
            <span class='ml-auto text-gray-900'>$10</span>
        </div>
        <div class='flex border-t border-gray-200 py-2'>
            <span class='text-gray-500'>Service Fee</span>
            <span class='ml-auto text-gray-900'>$21</span>
        </div>
        <div class='flex border-t border-b mb-6 border-gray-200 py-2'>
            <span class='text-gray-900 font-bold'>Total</span>
            <span class='ml-auto text-gray-900'>${{total}}</span>
        </div>
    </div>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/solid';
import { format } from 'date-fns'

const props = defineProps(['checkoutData'])

let sub_total = parseFloat(props.checkoutData?.homeData?.price) * props.checkoutData?.totalNights
let total = sub_total + 21 + 10

</script>

<style lang="scss" scoped></style>