const Btn = document.querySelector('.dow');
const URLinput = document.querySelector('.box');

const fondUrl = /https:\/\/(www\.)youtube\.com\//;

Btn.addEventListener('click', function() {
  if (URLinput.value.match(fondUrl)) {
    sendURL(URLinput.value);
  }
});

function sendURL(URL) {
  if (URLinput.value){
  window.location.href = `https://gg--adamnetro.repl.co/download?URL=${URL}`;
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

