class TranslateApi{
    constructor(ingilizceSaka){
        this.baseURL = 'https://translation.googleapis.com/';

        this.aranacakCumle = ingilizceSaka;
        this.axiosNesnesi = axios.create({
            baseURL : this.baseURL,
            params:{
                target: 'tr',
                key: 'Add_Your_Api_Key',
                q: this.aranacakCumle
            }
        });
    }

    async ceviriYap(){
        const ceviri = await this.axiosNesnesi.get('language/translate/v2');
        console.log(ceviri.data.data.translations[0].translatedText);
        return ceviri.data.data.translations[0].translatedText;
    }
}

export default function ceviriYap(ceviriYapilacakMetin) {
    const ceviri =  new TranslateApi(ceviriYapilacakMetin).ceviriYap();
    
}