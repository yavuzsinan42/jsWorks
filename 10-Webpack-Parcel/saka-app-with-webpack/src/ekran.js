

const getResimGetir = () => import('./unsplash_api.js');
const getSakaGetir = () => import('./joke_api.js');
const getCeviriYap = () => import('./translate_api.js');

class Ekran{
    constructor(){
        this.sakaGetirBtn = document.querySelector('.saka-getir-buton');
        this.sakaGetirBtn.addEventListener('click',() =>this.sakaGetir())
    }

    async sakaGetir(){
        const rastgeleResim = await (await getResimGetir()).resimGetir();
        const rastgeleSaka = await (await getSakaGetir()).sakaGetir();
        const ceviri = await (await getCeviriYap()).ceviriYap(rastgeleSaka);
       // const rastgeleResim = await resimGetir();
        //const rastgeleSaka = await sakaGetir();
        //const ceviri = await new ceviriYap(rastgeleSaka);
        const tumSonuclar = {
            rastgeleResim,
            rastgeleSaka,
            ceviri
        }
        this.ekranaYazdir(tumSonuclar);
    }

    ekranaYazdir(sonuclar){
        document.querySelector('.sonuc').innerHTML=`<div class="card">
        <div class="card-image">
            <figure class="image is-16by9">
                <img class="deneme" src="${sonuclar.rastgeleResim}"
                    alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="media">

                <div class="media-content">
                    <p class="title is-4 has-text-danger pb-4">${sonuclar.rastgeleSaka}</p>

                </div>
            </div>


        </div>
        <div class="card-content">
            <div class="media">

                <div class="media-content">
                    <p class="title is-4 has-text-success pb-4">${sonuclar.ceviri}</p>

                </div>
            </div>


        </div>
    </div>`
    }
}

export default function uygulamayiBaslat() {
    new Ekran();
}