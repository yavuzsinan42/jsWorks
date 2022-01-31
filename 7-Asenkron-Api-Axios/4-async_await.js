function getUser(id){
    console.log(`${id} idli kullanıcının bilgisi getiriliyor`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({ad:'Yavuz',id:id});
        },2000);
    });
}

function getCourses(userName){
    console.log(`${userName} isimli Kullanıcının Kursları Getiriliyor`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["java","python","c"]);
        },2000)
    })
}

function getComments(kursAdi){
    console.log(`${kursAdi} isimli Kursun Yorumları Getiriliyor.`);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Kurs Çok Faydalı");
        },2000)
    })
}
/*
getUser(123).then(user=>console.log(user));
getCourses('Yavuz').then(kurslar=>console.log(kurslar))
*/
/*
getUser(12).then(user=>{
    getCourses(user.ad).then(kurslar=>console.log(kurslar))
})
*/
/*
getUser(12).then(user=>{
    getCourses(user.ad).then(kurslar=>{
        getComments(kurslar[1]).then(yorumlar=>console.log(yorumlar))
    })
})
//Alternatif Kullanım
getUser(12)
    .then(user=>getCourses(user.ad))
    .then(kurs=> getComments(kurs[0]))
    .then(comments=>console.log(comments))
    .catch(hata =>console.log(hata))
    */
   
async function yorumlariGoster(){
    //Burada Hata yakalamak için sadece catch kullanamıyoruz. Try Catch bloğu kullanmamız gerekli
    /*
    const userObje= await getUser(452); // await ile belirtilen işlem bitmeden alt satıra geçilmez
    const kurslar=await getCourses(userObje.ad);
    const yorum = await getComments(kurslar);
    console.log(yorum);
    */
   try {
    const userObje= await getUser(452); // await ile belirtilen işlem bitmeden alt satıra geçilmez
    const kurslar=await getCourses(userObje.ad);
    const yorum = await getComments(kurslar);
    console.log(yorum);
   } catch (error) {
       console.log("Hata Çıktı: "+error);
   }
}
yorumlariGoster()