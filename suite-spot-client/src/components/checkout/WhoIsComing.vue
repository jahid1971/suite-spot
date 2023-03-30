<template>
    <div>
      <h1 class='text-2xl font-bold'>Traveling for work?</h1>
      <div class='flex gap-10 flex-wrap-justify-between'>
        <div>
          <p class='my-3 text-gray-500'>Say hello to your host</p>
          <p class='my-3 text-gray-500'>
            Let {{}} know a little about yourself and why you're coming.
          </p>
        </div>
        <div class='flex flex-col items-center justify-center'>
          <img
            alt=''
            class='w-16 h-16 border rounded-full'
            src={{host?.image}}
          />
          <p>{{}}</p>
        </div>
      </div>
      <textarea
        value={{commentData}}
        @change=""
        class='border block my-5 p-2'
        :placeholder="`Hello ${'to enter'}! Can't wait to spend 4 nights in your home`"
        name=''
        id=''
        cols='60'
        rows='10'
      ></textarea>
      <button
        class='py-2 px-4 rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
      >
        Continue
      </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>