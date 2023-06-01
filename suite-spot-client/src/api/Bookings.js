import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

// save booking
export const saveBookings = async (bookingData) => {
   const response = await axios.post(`${url}/bookings`, bookingData, {
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
   });

   console.log("booking saved", response.data);

   return response.data;
};

// get booking for user
export const getBookings = async (email) => {
   const response = await axios.get(`${url}/bookings?email=${email}`, {
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
     },
   });
   console.log(response.data, "inside  booking api function  ");
   return response.data;
};

// get all bookings for admin
export const getAllBookings = async () => {
   const response = await axios.get(`${url}/bookings`, {
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
   });
   console.log(response.data, "get all bookings");
   return response.data;
};

// delete booking
export const deleteBooking = async (id) => {
   const response = await axios.delete(`${url}/booking/${id}`, {
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
   });
   console.log(response.data);

   return response.data;
};

//   create payment intent
export const getPaymentIntent = async (bookingPrice) => {
   // console.log('getpayment function called');
   const response = await axios.post(
      `${url}/create-payment-intent`,
      {
         price: bookingPrice,
      },
      {
         headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
         },
      }
   );

   return response.data;
};
