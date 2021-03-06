import Swal from 'sweetalert2'
import './ToastAlert.css'

export default function FaceToast() {
  return (
      
    Swal.fire({
      customClass: {
        container: 'swal-container'
      },
      icon: 'info',
      html: '"추천 페이지"를 입력받았습니다.<br>얼굴인식 추천 페이지로 이동할까요?<h5>입력한 정보가 아니라면 처음화면으로 돌아갑니다.</h5>',
      toast: true,
      position: 'center-right',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: '네',
      denyButtonText: `아니요`,
      cancelButtonText: '취소',
      confirmButtonColor: '#1E90FF',
      })
      .then((result) => {
        if (result.isConfirmed) {
          window.location.href='/faceai'
        } else if (result.isDenied) {
          window.location.href='/'
        }
      })
  )
}