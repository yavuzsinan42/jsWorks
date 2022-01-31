const btnTextGetir = document.getElementById('btn-text-getir');
const btnJsonGetir = document.getElementById('btn-json-getir');
const btnApidenJsonGetir = document.getElementById('btn-apiden-getir');
const btnJsonEkle = document.getElementById('btn-json-veri-ekle');

btnJsonGetir.addEventListener('click', getJSON);
btnTextGetir.addEventListener('click',getText);
btnApidenJsonGetir.addEventListener('click',getJSONfromAPI);
btnJsonEkle.addEventListener('click', jsonVeriEkle);
const sonucDiv = document.getElementById('sonuc');

function getJSONfromAPI(e){
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(sonuc=>ekranaYazdir(sonuc))
}

function getJSON(e){
    e.preventDefault();
    fetch('ogrenciler.json')
    .then(response => response.json())
    .then(sonuc => {
        let cikti ='';
        sonuc.forEach(ogr => {
            
            cikti += `ogrenci adi ${ogr.ad} id: ${ogr.id} \n`
        })
        sonucDiv.innerText=cikti;
    })
}

function getText(e){
   e.preventDefault();
   /*
   const fetchSonuc=fetch('deneme.txt');
   fetchSonuc.then((response)=> {
       const rText= response.text();
       rText.then(sonuc => console.log(sonuc))
   })
   console.log(fetchSonuc);
   */
  fetch('deneme.txt').then(response=> response.text()
                    .then(sonuc => sonucDiv.innerText=sonuc))
}
function ekranaYazdir(data){
    let cikti = '';
    data.forEach(user => {
        cikti += `<li>${user.name}</li>`
    })
    sonucDiv.innerHTML= cikti;
}
/* //Promise Hali
function jsonVeriEkle(e){
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alanı',
            userId: 5
        }),
        headers: {'Content-Type': 'application/json'}
    }).then(response => response.json()).then(sonuc=>console.log(sonuc))
}
*/
async function jsonVeriEkle(e){
    e.preventDefault();

   const response= await fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        body: JSON.stringify({
            title: 'deneme',
            body: 'body alanı',
            userId: 5
        }),
        headers: {'Content-Type': 'application/json'}
    })
    const sonuc = await response.json();
    console.log(sonuc);
}