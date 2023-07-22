# 엘리멘탈 포스터


---

썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성합니다.

## 조건
1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 건다.
  a. 이벤트 위임
  b. 반복문
2. 각 li 태그를 클릭하면 배경 색상과 메인 비주얼 이미지를 변경할 수 있도록 한다.
(배경색 변경 시, colorB의 기본값은 #000 으로 한다. )
3. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경한다.
4. 함수를 분리한다.
  a. `setBgColor` 함수
  b. `setImage` 함수
  c. `setNameText` 함수


---
- attr, css, data, getNode라는 함수들을 각각 만들어 사용하였다.
  
```js
const container = getNode('.container');
const visual = getNode('.visual');
const nav = getNode('.nav');
const visualImage = getNode('.visual img');
const li = getNodes('.nav li');
const body = getNode('body');
const nickName = getNode('.nickName');
```

getNode 함수를 실행하여 각 요소들을 변수에 할당하였다.

```js
if(!second){
    node.style.background = `linear-gradient(to bottom, ${first}, #000)`}
    else{
    node.style.background = `linear-gradient(to bottom, ${first}, ${second})}`
```

- setBgColor 함수에서는 매개변수를 node, first, second로 설정하여 second 값이 입력되지 않았을 경우에는 #000 으로 설정될 수 있게 하였다.
- 값이 모두 들어왔을 경우에는 data 파일에 있는 첫번째와 두번째(first, second)의 값이 gradient의 시작 색상과 끝 색상이 들어올 수 있도록 style을 설정하였다.


```js
  attr(target, 'src', `./assets/${data[index - 1].name.toLowerCase()}.jpeg`)
  attr(target, 'alt', data[index -1].alt)
```

- setImage 함수에서는 target, index라는 매개변수를 받게 하였고, target의 src속성과 alt 속성이 각 data에 저장된 값으로 들어올 수 있도록 하였다.


```js
node.textContent = data[index -1].name
```

- setNameText함수에서는 해당 요소의 제목을 data 객체의 name값이 들어올 수 있도록 하였다.


```js
  let target = e.target.closest('li');
  let button = e.target.closest('button');
  
  if(!target || !button) return;
  
  const index = attr(target,'data-index');


  li.forEach(li => removeClass(li,'is-active'));


  addClass(target,'is-active')

  setBgColor(body, data[index -1].color[0], data[index -1].color[1])
  setImage(visualImage, index);
  setNameText(nickName, index);
```

- 실행되는 함수인 handleSlider에서는 target과 button을 각각 변수에 담았으며, target값이나 button 값이 들어오지 않았을 경우, 함수의 실행이 종료되게 하였다.
- li 태그에 is-active 클래스를 제거해주는 과정을 반복문을 실행하여 다른 요소를 클릭했을 때는 is-active가 사라질 수 있도록 하였고, 이후 클릭이 된 요소에는 is-active 클래스가 들어올 수 있도록 하였다.
- 위에서 만들었던 함수들이 제대로 실행될 수 있도록 실행함수를 넣어주었다.

```js
nav.addEventListener('click',handleSlider);
```

마지막 실행부 부분이다.

---
## 결과물

![화면_기록_2023-07-23_오전_12_29_15_AdobeExpress](https://github.com/Sirori/js-homework/assets/116864776/d2ee087f-d225-414a-a44a-61d1c31c3c25)

