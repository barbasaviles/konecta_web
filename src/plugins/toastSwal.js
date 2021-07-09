import Swal from "sweetalert2";
import sound from '@src/assets/sounds/unconvinced.mp3';
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        let audio = new Audio(sound);
        audio.play();
    }
})

export default Toast;