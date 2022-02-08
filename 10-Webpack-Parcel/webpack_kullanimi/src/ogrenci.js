import axios from 'axios';

export default class Ogrenci{
    constructor(ad){
        this.ad = ad;
    }
    async adiniSoyle(){
        console.log(`benim adim ${this.ad}`);
        const sonuc = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(sonuc.data);
    }
}