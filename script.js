const Btn = document.querySelector('.dow');
const URLinput = document.querySelector('.box');


const fondUrl = /https:\/\/(www\.|m\.)youtube\.com\/|https:\/\/youtu\.be\//;

Btn.addEventListener('click', function() {
  if (URLinput.value.match(fondUrl)) {
    sendURL(URLinput.value);
  }
});

let rmv = document.querySelector('.rmv');
let pasted = document.querySelector('.pasted');

URLinput.addEventListener('input', () => {
  if(URLinput.value){
    rmv.style.display = "block"
    pasted.style.display = "none"
  }else{
    rmv.style.display = "none"
    pasted.style.display = "block"
  }
})

rmv.addEventListener('click', () => {
  if(URLinput.value){
    URLinput.value = ""
    rmv.style.display = "none"
    pasted.style.display = "block"
  }
})

pasted.addEventListener('click', async () => {
  const ho9o9las9 = await navigator.clipboard.readText();

  if (ho9o9las9.trim().match(fondUrl)) {
    URLinput.value = ho9o9las9;
    rmv.style.display = "block";
    pasted.style.display = "none";
  }else{
    mess.classList.add('messActive');
    messText.innerText = "You need to copy URL of youtube";
    setTimeout( function() {
      mess.classList.remove('messActive')
    },3000)
  }
});




function sendURL(URL) {
  if (URLinput.value && STT === false){
  window.location.href = `https://apple-concise-sofa.glitch.me/download/${InpAD.value}?URL=${URL}`;
  document.querySelector('.bck-load').style.display = "flex";
  setTimeout( function() {
    document.querySelector('.bck-load').style.display = "none";
  },3000)
}
  if (URLinput.value && STT === true){
    window.location.href = `https://imaginary-aquamarine-meteorology.glitch.me/download/${InpVD.value}?URL=${URL}`;
    document.querySelector('.bck-load').style.display = "flex";
    setTimeout( function() {
      document.querySelector('.bck-load').style.display = "none";
    },3000) 
}
}

let mess = document.querySelector('.mess');
let messText = document.querySelector('.mess .txt');

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

const InpVD = document.querySelector('.ST-video input');
const InpAD = document.querySelector('.ST-audio input');

window.onload = function() {
  BtnVD.click()

  if(URLinput.value){
    rmv.style.display = "block"
    pasted.style.display = "none"
  }
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

window.addEventListener('offline', () => {
  document.querySelector('.bck-load').style.display = "flex";
})

window.addEventListener('online', () => {
  document.querySelector('.bck-load').style.display = "none";
  mess.classList.add('messActive');
  mess.style.border = "1px solid #00FF00"
  messText.style.color = "#00FF00";
  messText.innerText = "The connection is back";
  setTimeout( function() {
    mess.classList.remove('messActive')
    mess.style.border = "1px solid red"
    messText.style.color = "red";
  },3000)
})


window.addEventListener('load', function() {
  if(window.navigator.onLine){
    document.querySelector('.bck-load').style.display = "none";
  }else {
    document.querySelector('.bck-load').style.display = "flex";
  }
});
