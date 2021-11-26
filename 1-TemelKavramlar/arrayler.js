 let arabaMarkalari = ["Toyota","Mercedes","Ferrari"];
 console.log(arabaMarkalari);
 console.log(arabaMarkalari.toString());
 console.log(arabaMarkalari[1]);

 arabaMarkalari[3] ="Supra"
 console.log(arabaMarkalari.toString());

 console.log(arabaMarkalari.length);

 for(let i=0; i<arabaMarkalari.length;i++){
     console.log(arabaMarkalari[i]);
 }

 for (let index of arabaMarkalari){
     console.log(index);
 }
 let yeniDizi = [1,"emre",true];
 for (let index of yeniDizi){
    console.log(index);
}