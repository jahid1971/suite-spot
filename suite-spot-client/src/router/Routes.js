import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SignUp from '../pages/logIn/SignUp.vue'
import SignIn from '../pages/logIn/SignIn.vue'
import  Home from '../pages/Home.vue'
import  ComingSoon from '../pages/shared/Coming-soon.vue'
import  SearchResult from '../pages/SearchResult.vue'
import  Details from '../pages/Details.vue'
import  CheckOut from '../pages/Checkout.vue'

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
        {
          path: '/coming-soon',
          component: ComingSoon,
          name: 'comingSoon'
        },
        {
          path: '/search-result',
          component: SearchResult,
          name: 'searchResult'
        },
        {
          path: '/service-details/:id',
          component: Details,
          name: 'serviceDetails'
        },
        {
          path: '/checkout',
          component: CheckOut,
          name: 'checkout'
        },
      ]

    }


  ]
})

export default router