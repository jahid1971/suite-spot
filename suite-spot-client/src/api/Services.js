import axios from "axios";

const url = import.meta.env.VITE_BASE_URL;

export const addHome = async (homeData) => {
   const response = await fetch(`${url}/homes`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
      body: JSON.stringify(homeData),
   });

   const data = await response.json();
   return data;
};

//   get all homes
export const getAllHomes = async () => {
   const response = await fetch(`${url}/homes`,{
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      }
   });
   const data = await response.json();
   return data;
};


//   get homes for host with email
export const getHomes = async (email) => {
   const response = await axios.get(`${url}/homes/${email}`,{
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
   });
   console.log("get homes for host", response.data[0]);
   return response.data;
};

//Update home
export const updateHome = async (homeData) => {
   const response = await fetch(`${url}/home`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
      body: JSON.stringify(homeData),
   });

   const data = await response.json();
   return data;
};

// Delete a home
export const deleteHome = async (id) => {
   const response = await fetch(`${url}/home/${id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("suiteSpot-token")}`,
      },
   });
   const result = await response.json();
   return result;
};

// Search Result
export const getSearchResult = async (location, from, to, total_guest) => {
   const response = await fetch(
      `${url}/search-result?location=${location}&from=${from}&to=${to}&total_guest=${total_guest}`
   );
   const data = await response.json();
   return data;
};

// get location suggestion
export const fetchLocationSuggestion = async (query) => {
   const response = await axios.get(`${url}/location-suggestions?q=${query}`);
   return response.data;
};
