import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const hostRequest = async (user) => {
   const response = await axios.put(`${url}/user/${user?.email}`, user, {
      headers: {
         "Content-Type": "application/json",
      },
   });

   return response.data;
};

//host request accept by admin
export const makeHost = async (user) => {
   delete user._id;
   const response = await axios.put(`${url}/user/${user.email}`, user, {
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
   });

   return response.data;
};

//get user role
export const getRole = async (email) => {
   const response = await axios.get(`${url}/user/${email}`, {
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
   });
   console.log(response.data?.role, "inside getRole function");
   return response.data?.role;
};

// get all user
export const getAllUsers = async () => {
   const response = await axios.get(`${url}/users`,{
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
   });
   return response.data;
};
