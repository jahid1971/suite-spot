import axios from "axios"

const url = import.meta.env.VITE_BASE_URL



export const hostRequest = async user => {
    const response = await axios.put(`${url}/user/${user?.email}`, user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data;
}

//host request accept by admin
export const makeHost = async user => {
    delete user._id
    // const response = await fetch(
    //     `${process.env.REACT_APP_API_URL}/user/${user?.email}`,
    //     {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `Bearer ${localStorage.getItem('aircnc-token')}`,
    //         },
    //         body: JSON.stringify({ ...user, role: 'host' }),
    //     }
    // )
    // const users = await response.json()


    const response = await axios.put(`${url}/user/${user.email}`,user,{
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data
}

//get user role 
export const getRole = async email => {
    const response = await axios.get(`${url}/user/${email}`)
    console.log(response.data?.role, 'inside getRole function');
    return response.data?.role;
    // console.log(user?.email,'inside function ');
}

// get all user
export const getAllUsers = async () => {
    const response = await axios.get(`${url}/users`)
    return response.data
}