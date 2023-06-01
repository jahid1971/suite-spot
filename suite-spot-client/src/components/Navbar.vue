<template>
   <header class="text-gray-900 body-font shadow-sm">
      <div class="mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center">
         <router-link
            to="/"
            class="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0">
            <span class="ml-3 text-2xl font-bold">Suite-Spot</span> <span> </span>
         </router-link>
         <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div>
               <div v-if="user?.uid" class="relative inline-block">
                  <button
                     @click="() => (isDropdownOpen = !isDropdownOpen)"
                     class=" flex gap-2 items-center  md:border border-gray-300 rounded-3xl  relative z-10 px-2 p-1 text-gray-700 bg-white   focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none">
                        <div class="">
                           <svg
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="presentation"
                              focusable="false"
                              style="
                                 display: block;
                                 fill: none;
                                 height: 18px;
                                 width: 18px;
                                 stroke: currentcolor;
                                 stroke-width: 3;
                                 overflow: visible;
                              ">
                              <g fill="none" fill-rule="nonzero">
                                 <path d="m2 16h28"></path>
                                 <path d="m2 24h28"></path>
                                 <path d="m2 8h28"></path>
                              </g>
                           </svg>
                        </div>
                        <div class="w-7 h-7 hidden md:block">
                           <svg
                              viewBox="0 0 32 32"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="presentation"
                              focusable="false"
                              style="
                                 display: block;
                                 height: 100%;
                                 width: 100%;
                                 fill: currentcolor;
                              ">
                              <path
                                 d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                           </svg>
                        </div>
                    
                  </button>

                  <div
                     v-if="isDropdownOpen"
                     v-click-away="()=> isDropdownOpen = false"
                     class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                     <router-link
                        to="/dashboard"
                        class="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
                        <svg
                           class="w-5 h-5 mx-1"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                              fill="currentColor"></path>
                           <path
                              d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                              fill="currentColor"></path>
                        </svg>

                        <span class="mx-1">Dashboard</span>
                     </router-link>

                     <hr class="border-gray-200" />

                     <div
                        @click="signOut"
                        class="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100">
                        <svg
                           class="w-5 h-5 mx-1"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                              fill="currentColor"></path>
                        </svg>

                        <span class="mx-1">Sign Out</span>
                     </div>
                  </div>
               </div>

               <div v-else>
                  <router-link to="/sign-in" class="mr-5 hover:text-green-600">
                     Login
                  </router-link>
                  <router-link to="/sign-up" class="mr-5">
                     <PrimaryButton classes="rounded-full px-2 py-1">
                        Signup
                     </PrimaryButton>
                  </router-link>
               </div>
            </div>
         </nav>
      </div>
   </header>
</template>

<script setup>
import { ref, computed } from "vue";
import UseAuthStore from "../store/AuthStore";
import { useRoute, useRouter } from "vue-router";
import ComingSoon from "../pages/shared/Coming-soon.vue";
import PrimaryButton from "./button/PrimaryButton.vue";
import VueClickAway from "vue3-click-away";

const authStore = UseAuthStore();
const user = computed(() => authStore?.user);
const isDropdownOpen = ref(false);
const route = useRoute();
const router = useRouter();

// console.log( 'route',route.meta.requiresAuth );

const signOut = () => {
   authStore.logout().then(() => {
      isDropdownOpen.value = !isDropdownOpen.value;
      if (route.meta.requiresAuth) router.push("/sign-in");
   });
};

</script>

<style lang="scss" scoped></style>
