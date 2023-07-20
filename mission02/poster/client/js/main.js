
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const container = getNode('.container');
const visual = getNode('.visual');
const nav = getNode('.nav');
const visualImage = getNode('.visual img');
const li = getNodes('.nav li');
const body = getNode('body');
const nickName = getNode('.nickName');


function setBgColor(node, first, second){
  if(typeof node === 'string') node = getNode(node);
  if(!second){
    node.style.background = `linear-gradient(to bottom, ${first}, #000)`}else{
    node.style.background = `linear-gradient(to bottom, ${first}, ${second})`
  }
}

function setImage(target, index){
  if (typeof node === "string") node = getNode(node);

  attr(target, 'src', `./assets/${data[index - 1].name.toLowerCase()}.jpeg`)
  attr(target, 'alt', data[index -1].alt)
}

function setNameText(node, index){
  if (typeof node === "string") node = getNode(node);
  node.textContent = data[index -1].name
}

function handleSlider(e){
  e.preventDefault();
  
  let target = e.target.closest('li');
  let button = e.target.closest('button');
  console.log(target);
  
  if(!target || !button) return;
  
  const index = attr(target,'data-index');


  li.forEach(li => removeClass(li,'is-active'));


  addClass(target,'is-active')

  setBgColor(body, data[index -1].color[0], data[index -1].color[1])
  setImage(visualImage, index);
  setNameText(nickName, index);

}


nav.addEventListener('click',handleSlider);