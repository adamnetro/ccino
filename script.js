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

Btn.addEventListener('click', () => {
  if (!URLinput.value) {
    alert("كضحك عليا و دخل رابط");
  }
  if (!URLinput.value.match(fondUrl) && URLinput.value) {
    alert("و صاحبي هذا راح مشي رابط ديال يويتيوب");
  }
});

