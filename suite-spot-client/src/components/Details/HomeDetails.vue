<template>
    <div class='flex-1 max-w-lg'>
        <div class='flex justify-between'>
            <div>
                <h2 class='text-gray-900 title-font text-lg font-medium'>
                    {{}}
                </h2>
                <br />
                <h3 class='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                    {{}}.
                </h3>
                <h3 class='text-gray-400 text-xs tracking-widest title-font mb-1 mt-1'>
                    {{}} Guests {{}} Bedrooms{{' '}}
                    {{}} bathrooms.
                </h3>
            </div>
            <div>
                <div class='flex flex-col items-center justify-center'>
                    <img alt='' referrerPolicy='no-referrer' class='w-16 h-16 border rounded-full'
                        src={{homeData?.host?.image}} />
                    <p>{{}}</p>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <div class='flex flex-col items-start pb-4 my-2 mt-8 mx-auto max-w-7xl sm:flex-row'>
                <div
                    class='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                    <HomeIcon />
                </div>
                <div class='flex-grow prose sm:text-left prose-md'>
                    <p class='text-gray-500 text-xl'>Entire Home</p>
                    <p class='text-gray-400'>
                        You will have the condominium to yourself.
                    </p>
                </div>
            </div>
            <div class='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
                <div
                    class='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                    <CheckBadgeIcon />
                </div>
                <div class='flex-grow prose sm:text-left prose-md'>
                    <p class='text-gray-500 text-xl'>Self check-in</p>
                    <p class='text-gray-400'>You can check in with the doorman.</p>
                </div>
            </div>
            <div class='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
                <div
                    class='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                    <BeakerIcon />
                </div>
                <div class='flex-grow prose sm:text-left prose-md'>
                    <p class='text-gray-500 text-xl'>Sparkling clean</p>
                    <p class='text-gray-400'>
                        10 recent guests said this place was sparkling clean.
                    </p>
                </div>
            </div>
            <div class='flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row'>
                <div
                    class='inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3'>
                    <UserIcon />
                </div>
                <div class='flex-grow prose sm:text-left prose-md'>
                    <p class='text-gray-500 text-xl'>Atik is a Super host</p>
                    <p class='text-gray-400'>
                        Super hosts are experienced, highly rated hosts who are committed
                        to providing great stays for guests.
                    </p>
                </div>
            </div>
        </div>
        <hr />
        <div class='mt-4 text-gray-500'>
            <p>
                It's newly constructed 7 storied building maintaining building code by
                a locally famous architect. Enough lights and natural air are playing
                here. The place (apartment) is calm and noise free. You'll love my
                place for its lovely and bright looks comfortable stay.
            </p>
            <p>
                Bangladesh is a beauty with its six seasons and green. The people are
                hospitable and worm.It's newly constructed 7 storied building
                maintaining building code by a locally famous architect. Enough lights
                and natural air are playing here. The place (apartment) is calm and
                noise free. You'll love my place for its lovely and bright looks
                comfortable Stay.
            </p>
            <p>
                Bangladesh is a beauty with its six seasons and green. The people are
                hospitable and worm.
            </p>
        </div>
        <br />
        <div class='flex gap-3 items-center text-xl text-blue-600'>
            <p>Read more about the space</p>
            <ChevronDownIcon class='h-5 w-5' />
        </div>
        <br />
        <div>
            <p class='text-xl text-gray-900'>Reviews</p>
            <div class='flex gap-1 mb-2'>
                <StarIcon class='h4 w-4 text-green-500' />{{' '}}
                <span>
                    <span>4.8 (43 reviews)</span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ChevronDownIcon, StarIcon } from '@heroicons/vue/24/solid';


</script>

<style lang="scss" scoped></style>