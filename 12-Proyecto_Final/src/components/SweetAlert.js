import Swal from 'sweetalert2';

//Alerta de redirecion de pagina
export const showRecipeAlert = (url) => {
  Swal.fire({
    title: 'Continue to the recipe?',
    text: "You will be redirected to the recipe's page.",
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, continue',
    cancelButtonText: 'No, cancel',
    customClass: {
      icon: 'swal2-icon', // Clase personalizada para el icono
    },
    width: '40rem', // Cambia el ancho de la alerta
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  });
};

//Alerta de falta de informacion
export const showMissingDataAlert = () => {
  Swal.fire({
    title: 'lack of data',
    text: 'Please provide a search information or select at least one type of food to searc.',
    icon: 'error',
    confirmButtonText: 'OK',
    customClass: {
      icon: 'swal2-icon', // Clase personalizada para el icono
    },
    width: '40rem', // Cambia el ancho de la alerta
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  });
};