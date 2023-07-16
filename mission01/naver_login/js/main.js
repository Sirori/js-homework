
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const email = document.querySelector('.user-email-input');
const pw = document.querySelector('.user-password-input');
const button = document.querySelector('.btn-login');
const idError = document.querySelector('#userEmailError')
const pwError = document.querySelector('#userPasswordError')

let emailValue = email.value;
let pwValue = pw.value;
let emailPass = false;
let pwPass = false;

email.addEventListener('input', function(){
  emailValue = email.value;
  console.log(emailValue);

  if(emailReg(emailValue)){
    //this.classList.add('is-active');
    idError.classList.remove('is--invalid')

    emailPass = true;
  }else{
    //this.classList.remove('is-active');
    idError.classList.add('is--invalid')

    emailPass = false;
  }
  return emailPass;
})

pw.addEventListener('input', function(){
  pwValue = pw.value
  console.log(pwValue);
  if(pwReg(pwValue)){
    //this.classList.add('is-active');
    pwError.classList.remove('is--invalid')

    pwPass = true;
  }else{
    //this.classList.remove('is-active');
    pwError.classList.add('is--invalid')

    pwPass = false
  }
  return pwPass;
})

button.addEventListener('click', (e) =>{
  e.preventDefault();
  if(emailPass && pwPass){
    if(user.id === emailValue && user.pw === pwValue){
      console.log('로그인');
      window.location.href = 'welcome.html';
    }
  }
})