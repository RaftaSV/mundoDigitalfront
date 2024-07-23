import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const mySwal = withReactContent(Swal);


const showAlert = ( title, text,timer=1500) => {
  mySwal.mixin({
    timer: timer,
    timerProgressBar: true,
    showConfirmButton: false,
    position: 'bottom-end',
    background: 'rgba(100, 100, 120, 0.5)',
    color: '#ffffff',
    width: '200px',

  }).fire({
    text: `${text}`
  });
}

export default showAlert;
