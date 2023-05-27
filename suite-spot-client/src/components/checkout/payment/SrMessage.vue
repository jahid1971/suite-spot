<template>
  <div id="messages" role="alert">
    > {{ content }}
    <a v-if="paymentIntent" :href="addDashboardLinks(paymentIntent)">
      {{ paymentIntent }}
    </a>
    <br>
  </div>
</template>
<script setup>
import { defineProps, computed, toRef } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true
  }
});

const messagesRef = toRef(props, 'messages');

const splitMessages = computed(() => {
  const paymentIntentRe = /(pi_(\S*)\b)/;
  const paymentIntentMatch = messagesRef.value.match(paymentIntentRe);
  return {
    paymentIntent: paymentIntentMatch ? paymentIntentMatch[0] : '',
    content: messagesRef.value.replace(paymentIntentRe, '')
  };
});

const addDashboardLinks = (paymentIntent) => {
  return `https://dashboard.stripe.com/test/payments/${paymentIntent}`;
};
</script>
