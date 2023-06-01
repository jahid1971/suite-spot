export const  setAuthToken = async (user) => {
   const currentUser = {
      email: user?.email,
   };
   //   Save user in db & get token
   return fetch(`${import.meta.env.VITE_BASE_URL}/user/${user?.email}`, {
      method: "PUT",
      headers: {
         "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
   })
      .then((res) => res.json())
      .then((data) => {
         console.log(data);
         //Save token in LocalStorage
         localStorage.setItem("suiteSpot-token", data.token);
      });
};
