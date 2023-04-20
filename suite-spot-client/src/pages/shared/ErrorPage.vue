<template>
    <section class='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div class='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <HandThumbDownIcon class='w-40 h-40 text-green-400' />
            <div class='max-w-md text-center'>
                <h2 class='mb-8 font-extrabold text-9xl text-gray-500'>
                    <span class='sr-only'>Error</span>
                    <div class='flex justify-center items-center h-full'>
                        4
                        <div class='w-24 h-24 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'>
                        </div>
                        4
                    </div>
                </h2>
                <p class='text-2xl font-semibold md:text-3xl mb-8'>
                    Sorry, we couldn't find this page.
                </p>
                <router-link to="">
                    <PrimaryButton classes='px-8 py-3 font-semibold rounded'>
                        Back to homepage
                    </PrimaryButton>
                </router-link>

            </div>
        </div>
    </section>
</template>

<script setup>
import { HandThumbDownIcon } from '@heroicons/vue/24/solid';
import PrimaryButton from '../../components/button/PrimaryButton.vue';


</script>

<style lang="scss" scoped></style>