import Swal from "sweetalert2";

 const swalToast =(titleValue,iconValue,toastValue,confirmationValue) =>{ 
   //titleValue , iconValue should be string
    // toastValue,confirmationValue should be bolean
    return  Swal.fire({
    toast: toastValue,
    position: 'top',
    icon: iconValue,
    title: titleValue,
    showConfirmButton: confirmationValue ,
    timer: 1000,
    timerProgressBar: true
  })}

  export default swalToast