<template>
  <div>
    <h1 class='text-2xl font-bold'>Traveling for work?</h1>
    <div class='flex gap-4 flex-wrap-justify-between'>
      <div>
        <p class='my-3 text-gray-500'>Say hello to your host</p>
        <p class='my-3 text-gray-500'>
          Let {{ host?.name }} know a little about yourself and why you're coming.
        </p>
      </div>
      <div class='flex flex-col items-center justify-center text-center'>
        <img alt='' class='w-16 h-16 border rounded-full' :src='host?.image' />
        <p>{{ host?.name }}</p>
      </div>
    </div>
    <textarea v-model="commentData" @change="" class='border block my-5 p-2'
      :placeholder="`Hello ${'to enter'}! Can't wait to spend 4 nights in your home`" name='' id='' cols='60'
      rows='10'></textarea>
    <!-- <button
        class='py-2 px-4 rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
    
      >
        Continue
      </button> -->

    <button class='py-2 px-4 rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
      @click="() => {
        props.addComment(commentData);
        props.changeTab(2);
      }">
      Continue
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['addComment', 'changeTab', 'host'])

const commentData = ref("")
const test = () => {
  alert('hi')
}


</script>

<style lang="scss" scoped></style>