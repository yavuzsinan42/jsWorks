class Ekran{
    constructor(){
        this.sakaGetirBtn = document.querySelector('.saka-getir-buton');
        this.sakaGetirBtn.addEventListener('click',() =>this.sakaGetir())
    }

    async sakaGetir(){
        const rastgeleResim = await new UnsplashApi().randomResimGetir();
        const rastgeleSaka = await new JokeApi().randomSakaGetir();
        const ceviri = await new TranslateApi(rastgeleSaka).ceviriYap();
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