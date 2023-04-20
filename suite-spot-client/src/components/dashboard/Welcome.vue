<template>
     <div class='h-screen text-gray-700 flex flex-col justify-center items-center pb-16'>
      <div class='flex justify-center items-center'>
        <p class='text-6xl font-bold'>Welc</p>
        <div class='w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
        <p class='text-6xl font-bold mr-2'>me</p>
        <p class='text-6xl font-bold'>To</p>
      </div>
      <div class='flex justify-center text-gray-500 items-center mt-4'>
        <!-- {!loading && role ? (
          <>
            {role === 'admin' ? (
              <p class='text-3xl font-medium'>Admin Dashboard</p>
            ) : (
              <p class='text-3xl font-medium'>Host Dashboard</p>
            )}
          </>
        ) : ( -->
          <p class='text-3xl font-medium'>{{ role=='admin'? 'Admin' : role === 'host'? 'Host':'User'}} Dashboard</p>
          
        <!-- )} -->
      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import UseAuthStore from '../../store/AuthStore';

const role =computed(() => UseAuthStore().role ) 

</script>

<style lang="scss" scoped>

</style>