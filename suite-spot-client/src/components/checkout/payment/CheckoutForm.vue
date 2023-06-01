<script setup>
import { ref, onMounted } from "vue";
import { loadStripe } from "@stripe/stripe-js";
import { getPaymentIntent } from "../../../api/Bookings";
import { saveBookings } from "../../../api/Bookings";

import swalToast from "../../../utils/mySweetalert";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import swal from "sweetalert";
import SmallSpinner from "../../spinners/SmallSpinner.vue";

const props = defineProps(["bookingData"]);
const bookingData = props.bookingData;
const price = props.bookingData?.price;
const guestEmail = props.bookingData?.guestEmail;
const guestName = props.bookingData?.guestName;
const router = useRouter();

const isLoading = ref(false);
const message = ref("");
const transactionId = ref("");

let stripe;
let elements;
let client_secret;

onMounted(async () => {
   const publishableKey = `${import.meta.env.VITE_PUBLISHABLE_KEY}`;

   stripe = await loadStripe(publishableKey);

   const { clientSecret, error: backendError } =
      await getPaymentIntent(price); //fetcing client secret from backend
   client_secret = clientSecret;
   console.log(
      client_secret,
      backendError,
      "client secret or backend error"
   );

   if (backendError) {
      message.value = backendError.message;
   }

   elements = stripe.elements({ clientSecret });
   const cardElementType = elements.create("card");
   cardElementType.mount("#card-element");

   isLoading.value = false;
});

const handleSubmit = async () => {
   if (isLoading.value) {
      return;
   }

   isLoading.value = true;

   const cardElement = elements.getElement("card");

   if (!cardElement) {
      message.value = "Card element is not available.";
      isLoading.value = false;
      return;
   }

   const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
   });

   stripe
      .confirmCardPayment(`${client_secret}`, {
         payment_method: {
            card: cardElement,
            billing_details: {
               name: guestName,
               email: guestEmail,
            },
         },
      })
      .then((result) => {
         const { error, paymentIntent } = result;

         if (error) {
            console.log("error confirmcardPayment ===> ", error);
            message.value = error.message;
            isLoading.value = false;
         } else if (paymentIntent) {
            message.value = "Payment successful!";
            transactionId.value = paymentIntent.id;
            console.log(paymentIntent, "payment intentt");
            const data = {
               transactionId: paymentIntent.id,
               ...bookingData,
            };
            saveBookings(data)
               .then((data) => {
                  isLoading.value = false;
                  swalToast("booking successfull. Check your email for details", "success");
                  router.push("/dashboard/my-bookings");
                  console.log("savebookings result ====> ", data);
               })
               .catch((err) =>
                  console.log(err, "error in savebookins function")
               );
         }
      })
      .catch((error) => {
         console.log(error, " error of stripe.confirmPayment");
         message.value = "An unexpected error occurred.";
         isLoading.value = false;
      });
};
</script>

<template>
   <main>
      <form id="payment-form" @submit.prevent="handleSubmit">
         <div id="link-authentication-element" />
         <div id="card-element" />
         <button
            :disabled="isLoading"
            id="submit"
            class="hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white rounded-md py-1 px-4 mt-4">
            <span v-if="isLoading"
               ><SmallSpinner></SmallSpinner
            ></span>
            <span v-else>PAY</span>
         </button>
         <div v-if="message" id="message">
            {{ message }}
         </div>
      </form>
   </main>
</template>

<style scoped>
#card-element {
   @apply block p-3 text-4xl pl-4  bg-gray-50 border border-gray-300 text-gray-900  rounded-md focus:ring-blue-500 focus:border-blue-500  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}

button:hover {
   filter: contrast(115%);
}
button:active {
   transform: translateY(0px) scale(0.98);
   filter: brightness(0.9);
}
button:disabled {
   opacity: 0.5;
   cursor: none;
}
/* input,
select {
   display: block;
   font-size: 1.1em;
   width: 100%;
   margin-bottom: 10px;
}
label {
   display: block;
}
a {
   color: var(--accent-color);
   font-weight: 900;
}
small {
   font-size: 0.6em;
}
fieldset,
input,
select {
   border: 1px solid #efefef;
} */
#payment-form {
   border: #f6f9fc solid 1px;
   border-radius: var(--radius);
   padding: 20px;
   margin: 20px 0;
   box-shadow: 0 30px 50px -20px rgb(50 50 93 / 25%),
      0 30px 60px -30px rgb(0 0 0 / 30%);
}
#message {
   font-family: source-code-pro, Menlo, Monaco, Consolas,
      "Courier New";
   background-color: #0a253c;
   color: #00d924;
   padding: 20px;
   margin: 20px 0;
   border-radius: var(--radius);
   font-size: 0.8em;
}
</style>
