
import axios from "axios"

const url = import.meta.env.VITE_BASE_URL

export const saveBookings = async (bookingData) => {
    const response = await axios.post(`${url}/bookings`, bookingData,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })

    console.log(response.data)

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