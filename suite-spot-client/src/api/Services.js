import axios from "axios"

const url = import.meta.env.VITE_BASE_URL

export const addHome = async homeData => {
    const response = await fetch(`${url}/homes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
        },
        body: JSON.stringify(homeData),
    })

    const data = await response.json()
    return data
}

//   get all homes
export const getAllHomes = async () => {
    const response = await fetch(`${url}/homes`)
    const data = await response.json()
    return data
}

//   get homes for host with email

export const getHomes = async email => {
    const response = await axios.get(`${url}/homes/${email}`)
 console.log("get homes for host", response.data[0]);
    return response.data
}  