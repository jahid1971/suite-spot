<template>
    <button @click="handler"
         :class="classes"
         class='hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white '>
        <!-- {children} -->
        <slot />
    </button>
</template>

<script setup>
// import { defineProps } from 'vue'
defineProps({
  classes: String,
   handler: Function
})

</script>

<style lang="scss" scoped></style>