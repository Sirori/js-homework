# 네이버 로그인 페이지 구현


---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

## 조건
1. 아이디 혹은 비밀번호의 입력값이 주어진 조건과 맞지 않을 때, 오류 메세지가 출력되게 한다.
2. 일치하는 아이디와 비밀번호를 입력 후 로그인을 했을 때, 주어진 welcome 페이지로 이동이 되게 한다.
   

---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

```js
const email = document.querySelector('.user-email-input');
const pw = document.querySelector('.user-password-input');
const button = document.querySelector('.btn-login');
const idError = document.querySelector('#userEmailError')
const pwError = document.querySelector('#userPasswordError')
```
위 상수들을 주어 html에서 각 클래스들을 호출할 수 있게 하였다.

```js
let emailValue = email.value;
let pwValue = pw.value;
let emailPass = false;
let pwPass = false;
```
각 input에 들어가는 value값을 받아올 수 있는 변수, email과 password값의 참/거짓을 반환할 수 있는 변수를 선언하였다.

```js
if(emailReg(emailValue)){
    idError.classList.remove('is--invalid')

    emailPass = true;
  }else{
    idError.classList.add('is--invalid')

    emailPass = false;
  }
```
if문을 사용하여 email과 password값이 일치하지 않으면 만들어진 is--invalid라는 클래스가 나타날 수 있게 하였다.
(password도 동일하게 만들었다.)

아래에는 return을 주어 emailPass의 true나 false를 반환할 수 있게 하였다.

```js
button.addEventListener('click', (e) =>{
  e.preventDefault();
  if(emailPass && pwPass){
    if(user.id === emailValue && user.pw === pwValue){
      window.location.href = 'welcome.html';
    }
  }
})
```

- 버튼을 클릭하였을 때, 에이전트의 기본 동작이 실행되지 않도록 매개변수에 preventDefault를 주었다.
- 위 코드에서 반환된 emailPass와 pwPass가 true가 되면 아래 구문이 실행될 수 있게 하였는데, 기존에 선언된 user 객체의 id값과 pw값이 일치하면 welcome 페이지로 이동할 수 있도록 하였다.


---
## 결과
