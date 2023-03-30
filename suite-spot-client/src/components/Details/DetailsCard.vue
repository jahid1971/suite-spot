<template>
    <div class="p-4 md:w-1/2 lg:w-1/3 w-full h-full rounded shadow-lg">
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-2">
            ${{}}/ <span class="font-thin">night</span>
        </h1>
        <div class="flex gap-1 mb-2">
            <StarIcon class="h4 w-4 text-green-500" />{{ ' ' }}
            <span>4.8 (43 reviews)</span>
        </div>

        <p>Dates</p>
        <div class="flex justify-between items-center p-2 border mt-1 mb-2">
            <div>{{}}</div>
            <div>
                <ArrowRightIcon class="h5 w-5" />
            </div>
            <div>{{}}</div>
        </div>

        <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Maximum Guest</span>
            <span class="ml-auto text-gray-900">{{}}</span>
        </div>

        <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500"> ${{}} x {{}} nights </span>
            <span class="ml-auto text-gray-900">${{ sub_total }}</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Cleaning Fee</span>
            <span class="ml-auto text-gray-900">$10</span>
        </div>
        <div class="flex border-t border-gray-200 py-2">
            <span class="text-gray-500">Service Fee</span>
            <span class="ml-auto text-gray-900">$21</span>
        </div>
        <div class="flex border-t border-b mb-6 border-gray-200 py-2">
            <span class="text-gray-900 font-bold">Total</span>
            <span class="ml-auto text-gray-900">${{}}</span>
        </div>
        <div class="mt-6 mb-2">
            <router-link to="/checkout">
                <PrimaryButton type="submit"
                    classes="w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md">
                    Reserve
                </PrimaryButton>
            </router-link>
        </div>
        <p class="text-center text-gray-400 mb-6">You won't be charged yet!</p>
    </div>
</template>

<script setup>
import PrimaryButton from "../button/PrimaryButton.vue";
</script>

<style lang="scss" scoped></style>
