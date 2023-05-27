<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { loadStripe } from "@stripe/stripe-js";

import SrMessages from "./SrMessage.vue";

const message = ref('');
const clientSecret = ref('');
const paymentStatus = ref('')


const currentRoute = computed(() => {
  return useRoute().query;
});
clientSecret.value = currentRoute.value?.payment_intent_client_secret;

let stripe;

onMounted(async () => {
    const publishableKey  = `${import.meta.env.VITE_PUBLISHABLE_KEY}` 
  stripe = await loadStripe(publishableKey);

  const {error, paymentIntent} = await stripe.retrievePaymentIntent(
    clientSecret.value,
  );

  if (error) {
    message.value = error.message;
  }
 
  message.value =`Payment ${paymentIntent.status}: ${paymentIntent.id}`
});

</script>

<template>
  <body>
    <main>
      <sr-messages
        v-if="clientSecret"
        :messages="messages"
      />
    </main>
  </body>
</template>