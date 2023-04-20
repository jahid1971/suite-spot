<template>
    <div>
        
      <div class='flex justify-center mt-6'>
        <div class='w-full max-w-md p-8 space-y-3 text-gray-800 rounded-xl bg-gray-50'>
          <form
            @submit.prevent="handleSubmit"
            class='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div class='space-y-1 text-sm'>
              <label htmlFor='location' class='block text-gray-600'>
                Location
              </label>
              <input
                class='w-full px-4 py-3 text-gray-800 border border-green-300 focus:outline-green-500 rounded-md bg-green-50'
                name='location'
                id='location'
                type='text'
                placeholder='Location'
                required
              />
            </div>

            <p>Upload ID Document</p>

            <div class='flex space-x-4 items-center'>
              <label
                htmlFor='image'
                class='p-3 text-center rounded-md cursor-pointer text-gray-500 font-bold border  border-green-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400 hover:border-white hover:text-white'
              >
                <input
                  type='file'
                  name='image'
                  id='image'
                  accept='image/*'
                  hidden
                />
              </label>
            </div>

            <div>
              <label class='flex items-center'>
                <input type='checkbox' class='form-checkbox' required />
                <span class='block ml-2 text-xs font-medium text-gray-700 cursor-pointer'>
                  Agree to Privacy Policy
                </span>
              </label>
            </div>

            <button
              type='submit'
              class='block w-full p-3 text-center font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-emerald-500 to-lime-500 hover:bg-gray-200 hover:text-gray-700 focus:shadow-outline focus:outline-none'
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    
    </div>
</template>

<script setup>

const props = defineProps(['handleSubmit'])

</script>

<style lang="scss" scoped>

</style>