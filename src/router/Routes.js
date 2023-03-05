import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SignUp from '../pages/logIn/SignUp.vue'
import SignIn from '../pages/logIn/SignIn.vue'
import  Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          component: Home ,
          name: 'home'
        },
        {
          path: '/sign-up',
          component: SignUp,
          name: 'signUp'
        },
        {
          path: '/sign-in',
          component: SignIn,
          name: 'signIn'
        },
      ]

    }


  ]
})

export default router