const myForm = document.querySelector('#form');
myForm.addEventListener('submit',eventiYakala);
const isim = document.querySelector('#ad');

//isim.addEventListener('keydown', eventiYakala); //herhangi bir tuşa basıldığında tetiklenir.
//isim.addEventListener('keyup', eventiYakala); //herhangi bir tuş basıldıktan sonra çekilirken tetiklenir.

//isim.addEventListener('keypress', eventiYakala); //herhangi bir tuş basıldıktan sonra çekilirken tetiklenir.

isim.addEventListener('focus', eventiYakala); //İçine tıklanıp veya tab ile geçilip değer yazılacakken tetiklenir.
isim.addEventListener('blur', eventiYakala); //İçi seçildikten sonra çıkınca tetiklenir.

isim.addEventListener('cut', eventiYakala); //input alanından birşey kesilince  tetiklenir.

isim.addEventListener('paste', eventiYakala); //input alanına birşey yapıştırılırsa tetiklenir.

isim.addEventListener('input', eventiYakala); //herhangi bir tuş basıldıktan sonra çekilirken tetiklenir.

const sehirler = document.querySelector('#sehir');
sehirler.addEventListener('change',eventiYakala)

function eventiYakala(e){
   // console.log(isim.value);
    console.log('Event adı:'+e.target.value)
   // document.querySelector('.link').innerText = isim.value;
    e.preventDefault();
}