const getBtn = document.getElementById('get');
const postBtn = document.getElementById('post');
const putPatchBtn = document.getElementById('put-patch');
const ayniAndaIstekBtn = document.getElementById('ayni-anda-istek');
const headersBtn = document.getElementById('headers');
const hataBtn = document.getElementById('hata');
const deleteBtn = document.getElementById('delete');

deleteBtn.addEventListener('click', deleteItem);
getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
putPatchBtn.addEventListener('click', putPatchData);
ayniAndaIstekBtn.addEventListener('click', ayniAndaIstekData);
headersBtn.addEventListener('click', customHeader);
hataBtn.addEventListener('click', hataIslemleri);

function getData() {
    /*
    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
        params: {
            _limit:2 
        }
    }).then(response => sonucuEkranaYazdir(response))
    .catch(hata => console.log(hata))
    .then(()=>console.log("get isteği tamamlandı"))
    */

    /*
     axios.get('https://jsonplaceholder.typicode.com/users',{
         params: {
             _limit : 1,
         }
     })
     .then(response => sonucuEkranaYazdir(response))
     .catch(hata => console.log(hata))
     .then(()=>console.log("get isteği tamamlandı"))
 */

    axios('https://jsonplaceholder.typicode.com/users?_limit=2')
        .then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata))
        .then(() => console.log("get isteği tamamlandı"))
}
function postData() {
    /*
    axios.post('https://jsonplaceholder.typicode.com/posts',{
        title: 'Yeni Başlık',
        body: 'Burası Body Kısmı',
        userId: 55
    }).then(response => sonucuEkranaYazdir(response))
    .catch(hata => console.log(hata))*/

    axios.post('https://jsonplaceholder.typicode.com/users', {
        name: 'Yavuz Sinan',
        username: 'yavuzsinan42',
        email: 'deneme@gmail.com',
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata))
}
function putPatchData() {
    /*
    // Düzenlenen veriyi komple silip yerine yeni parametreleri ekler.
    axios.put('https://jsonplaceholder.typicode.com/users/1', {
        name: 'Yavuz Sinan',
        username: 'yavuzsinan42',
        email: 'deneme@gmail.com',
    }).then(response => sonucuEkranaYazdir(response))
    .catch(hata => console.log(hata));
    */
    //Sadece düzenlenen alanları değiştirir. Düzenlenmeyen alanlar aynı kalır
    axios.patch('https://jsonplaceholder.typicode.com/users/1', {
        name: 'Yavuz Sinan',
        username: 'yavuzsinan42',
        email: 'deneme@gmail.com',
    }).then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata));
}

function deleteItem() {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1').then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata));
}
function ayniAndaIstekData() {
    /*
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts'),
    ]).then(response => {
        console.log(response[0].data);
        console.log(response[1].data);
    })*/
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/users'),
        axios.get('https://jsonplaceholder.typicode.com/posts'),
    ]).then(axios.spread((kullanicilar,postlar) => {
         console.log(kullanicilar.data);
         console.log(postlar.data)
         sonucuEkranaYazdir(kullanicilar);
        }));
         

}
axios.interceptors.request.use(config => {  //apiye request atılmadan çalışan kısım her türlü çalışır
    console.log(`${config.url} adresine ${config.method} isteği yapıldı ve timeout ${config.timeout}`)
    return config;
});
axios.interceptors.response.use(response => {
    if(response.status===200){
        response.status=999;
    }
    return response;
}, error => {
    return Promise.reject(error);
})
axios.defaults.headers.common['X-Auth-Token']='apitokendegeri'; //yapılan her isteğe default olarak
const axiosNesnesi = axios.create({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'token': 'sasdasdsad'
    },
})
//token değeri eklemiş olduk
function customHeader() {
    axiosNesnesi.get('/users').then(response=>console.log(response))
    const config = {
        headers: {
            'Content-Type':'application/json',
            Authorization: 'sizintokendegeriniz'
        }
    }
    axios.post('https://jsonplaceholder.typicode.com/users', {
        name: 'Yavuz Sinan',
        username: 'yavuzsinan42',
        email: 'deneme@gmail.com',
    }, config).then(response => sonucuEkranaYazdir(response))
        .catch(hata => console.log(hata))
}
function hataIslemleri() {
    axios('https://jsonplaceholder.typicode.com/userssss?_limit=2')
        .then(response => sonucuEkranaYazdir(response))
        .catch(hata => hatayiYazdir(hata))
        .then(() => console.log("get isteği tamamlandı"))
}

function hatayiYazdir(hata) {

    document.querySelector('.sonuc').innerHTML = ` <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
        <div class="column"><h1 class="subtitle">Sonuc</h1></div>
        <div class="column"><h1 class="title">
        <pre>${JSON.stringify(hata.response.status, null, 2)}</pre>
        </h1></div>
    </div>
    </div>`;
}

function sonucuEkranaYazdir(response) {
    document.querySelector('.sonuc').innerHTML = `
    <div class="notification is-info">
    <div class="columns is-mobile is-vcentered">
        <div class="column"><h1 class="subtitle">Sonuc</h1></div>
        <div class="column"><h1 class="title">${response.status}</h1></div>
    </div>
    </div>



    <div class="section">
        <article class="message is-success">
            <div class="message-header">
                <p>Header</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.headers, null, 4)}</pre>
            </div>
        </article>
    </div>


    <div class="section">
        <article class="message is-warning">
            <div class="message-header">
                <p>Data</p>
            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.data, null, 4)}</pre>
            </div>
        </article>
    </div>


    <div class="section">
        <article class="message is-primary">
            <div class="message-header">
                <p>Config</p>

            </div>
            <div class="message-body has-background-white has-text-dark">
            <pre>${JSON.stringify(response.config, null, 4)}</pre>
            </div>
        </article>
    </div>`;
}
