const Btn = document.querySelector('.dow');
const URLinput = document.querySelector('.box');

const fondUrl = /https:\/\/(www\.|m\.)youtube\.com\/|https:\/\/youtu\.be\//;

Btn.addEventListener('click', function() {
  if (URLinput.value.match(fondUrl)) {
    sendURL(URLinput.value);
  }
});


let boxFileName = document.querySelector('.itm-add-nmfile')
let boxFileNameBTN = document.querySelector('.itm-add-nmfile form a')
let boxFileNameBOX = document.querySelector('.itm-add-nmfile form input')
let mess = document.querySelector('.mess');
let messText = document.querySelector('.mess .txt');

function sendURL(URL) {
  if (URLinput.value && STT === false){
  window.location.href = `https://apple-concise-sofa.glitch.me/download?URL=${URL}`;
  }
  if (URLinput.value && STT === true){
    window.location.href = `https://imaginary-aquamarine-meteorology.glitch.me/download?URL=${URL}`;
    }
}




Btn.addEventListener('click', () => {
  if (!URLinput.value) {
    mess.classList.add('messActive');
    messText.innerText = "You have to enter the link in the box";
    setTimeout( function() {
      mess.classList.remove('messActive')
    },3000)
  }
  if (!URLinput.value.match(fondUrl) && URLinput.value) {
    mess.classList.add('messActive');
    messText.innerText = "This URL is not for YouTube";
    setTimeout( function() {
      mess.classList.remove('messActive')
    },3000)
  }
});



const BtnTPFL = document.querySelectorAll('.type-file aside a')
var DFstyle;

BtnTPFL.forEach(BtnTPFL => {
  BtnTPFL.addEventListener('click', () => {
    if(DFstyle){
      DFstyle.style = ""
    }
    BtnTPFL.style = "background-color: rgb(76, 0, 216); border-radius: 7px;"
    DFstyle = BtnTPFL;
  })
})

const BtnVD = document.querySelector('.type-file aside .VD');
const BtnAD = document.querySelector('.type-file aside .AD');
const STvideo = document.querySelector('.ST-video');
const STaudio = document.querySelector('.ST-audio');

let STT = false;

BtnVD.addEventListener('click', () => {
  if(!STT){
  STvideo.style.display = "block"
  STaudio.style.display = "none"
  STT = true;
}
})

BtnAD.addEventListener('click', () => {
  if(STT){
  STvideo.style.display = "none"
  STaudio.style.display = "block"
  STT = false;
}
})

window.onload = function() {
  BtnVD.click()
}


const openST = document.querySelector('.openST');
const bkTPFL = document.querySelector('.bck-type-file');
const clsST = document.querySelector('.clsST');

openST.addEventListener('click', () => {
  bkTPFL.style.display = "flex"
  openST.style.display = "none"
  clsST.style.display = "block"
})

clsST.addEventListener('click', () => {
  bkTPFL.style.display = "none"
  openST.style.display = "block"
  clsST.style.display = "none"
})

