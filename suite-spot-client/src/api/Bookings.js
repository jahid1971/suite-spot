
import axios from "axios"

const url = import.meta.env.VITE_BASE_URL

export const saveBookings = async (bookingData) => {
    const response = await axios.post(`${url}/bookings`, bookingData,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })

    console.log("booking saved", response.data)
    
    return response.data


}

export const getBookings = async email => {
    const response = await axios.get(`${url}/bookings?email=${email}`,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
   console.log(response.data ,"inside  booking api function  ");
    return response.data;
}

// delete a booking

// export const deleteBooking = async id => {
//     const response = await fetch(
//       `${process.env.REACT_APP_API_URL}/booking/${id}`,
//       {
//         method: 'DELETE',
//         headers: {
//           'content-type': 'application/json',
         
//         },
//       }
//     )
  
//     const data = await response.json()
//     return data
//   }

  export const deleteBooking = async id => {
    const response = await axios.delete(`${url}/booking/${id}`)
    console.log(response.data);
    
    return response.data
  }


  //   create payment intent


export const getPaymentIntent = async bookingPrice => {
    // console.log('getpayment function called');
    const response  = await axios.post(`${url}/create-payment-intent`,{
        price: bookingPrice
    },{
        headers:{
            'Content-Type': 'application/json'
        }
        
    })

    return response.data ;
    
}