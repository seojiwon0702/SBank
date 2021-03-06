import Swal from 'sweetalert2'
import './ToastAlert.css'

export default function CheckToast() {
  return (
      
    Swal.fire({
      customClass: {
        container: 'swal-container'
      },
      icon: 'info',
      html: '"조회 페이지"를 입력받았습니다.<br>조회 페이지로 이동할까요?<br><h5>입력한 정보가 아니라면 처음화면으로 돌아갑니다.</h5>',
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
          window.location.href='/checkbalance'
        } else if (result.isDenied) {
          window.location.href='/'
        }
      })
  )
}