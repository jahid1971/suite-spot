<template>
    <div>
        <!-- Small Screen Navbar  -->
        <div class="bg-gray-100 text-gray-800 flex justify-between md:hidden">
            <div>
                <div class="block cursor-pointer p-4 font-bold">
                    <router-link to="/">Suite-Spot</router-link>
                </div>
            </div>

            <button
                @click="isActive = !isActive"
                class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                <Bars3Icon class="h-5 w-5" />
            </button>
        </div>

        <div
            class="z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out"
            :class="{ '-translate-x-full': isActive }">
            <div>
                <!-- {/* Branding & Profile Info */} -->
                <div>
                    <h2
                        class="text-3xl cursor-pointer font-semibold text-center text-gray-800">
                        <router-link to="/">Suite-Spot</router-link>
                    </h2>
                    <div class="flex flex-col items-center mt-6 -mx-2">
                        <router-link to="/dashboard">
                            <img
                                class="object-cover w-24 h-24 mx-2 rounded-full"
                                :src="user?.photoURL"
                                :alt="avatar"
                                referrerPolicy="no-referrer" />
                        </router-link>
                        <router-link to="/dashboard">
                            <h4
                                class="mx-2 mt-2 font-medium text-gray-800 hover:underline">
                                {{ user?.displayName }}
                            </h4>
                        </router-link>
                        <router-link to="/dashboard">
                            <p
                                class="mx-2 mt-1 text-sm font-medium text-gray-600 hover:underline">
                                {{ user?.email }}
                            </p>
                        </router-link>
                    </div>
                </div>

                <div class="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        <!-- toggle button group as host and as user -->
                        <div
                            v-if="role === 'host' || role === 'host+user'"
                            class="flex justify-between">
                            <button
                                @click="toggleRole('host')"
                                :class="[
                                    'w-full p-2 ',
                                    role === 'host' ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
                                        : 'bg-gray-100 border  border-emerald-500 text-gray-800',
                                ]">
                                As Host
                            </button>
                            <button
                                @click="toggleRole('host+user')"
                                :class="[
                                    'w-full p-2',
                                    role === 'host+user' ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
                                        : 'bg-gray-100 border  border-emerald-500 text-gray-800',
                                ]">
                                As User
                            </button>
                        </div>

                        <div class="" v-if="roleLoader">
                            <Spinner_2 :text="'LOADING...'"></Spinner_2>
                        </div>
                        <div v-if="!roleLoader && role === 'admin'">
                            <AdminMenu />
                        </div>
                        <div v-if="!roleLoader && role === 'host'">
                            <HostMenu />
                        </div>
                        <div
                            v-if="
                                !roleLoader &&
                                role !== 'admin' &&
                                role !== 'host'
                            ">
                            <UserMenu />
                        </div>
                    </nav>
                </div>
            </div>

            <div>
                <hr />
                <PrimaryButton
                    handler="{logout}"
                    classes="flex block w-full rounded-full items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform">
                    <ArrowRightOnRectangleIcon class="w-5 h-5" />

                    <span class="mx-4 font-medium">Logout</span>
                </PrimaryButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/vue/24/solid';
import UseAuthStore from '../../store/AuthStore';
import { computed, onMounted, ref } from 'vue';
import PrimaryButton from '../button/PrimaryButton.vue';
import AdminMenu from '../dashboard/AdminMenu.vue';
import HostMenu from '../dashboard/HostMenu.vue';
import UserMenu from '../dashboard/UserMenu.vue';
import { getRole } from '../../api/User';
import Spinner_2 from '../spinners/Spinner_2.vue';
import { useRouter } from 'vue-router';

const authStore = UseAuthStore();
const router = useRouter();

const user = computed(() => authStore.user);
const roleLoader = computed(() => authStore.roleLoader);
const role = computed(() => {
    console.log(authStore.role, 'inside sidebar inside computed ');
    return authStore.role;
});

const toggleRole = (value) => {
    authStore.role = value;
    value === 'host+user'
        ? router.push('/dashboard/my-bookings')
        : router.push('/dashboard/manage-homes');
};
</script>

<style lang="scss" scoped></style>
