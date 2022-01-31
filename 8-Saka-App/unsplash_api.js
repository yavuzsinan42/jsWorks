//k-NSAAStscu7HyYdDq70fIQcWyW6tJ9NMOPs8BByaAE
class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID k-NSAAStscu7HyYdDq70fIQcWyW6tJ9NMOPs8BByaAE'
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID
            },
            params: {
                query: 'joke',
                count: 1
            }
        })
    }

    async randomResimGetir() {
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data[0].urls.regular);
            return resimResponse.data[0].urls.regular;
        } catch (error) {
            console.log(error);
            return 'https://bulma.io/images/placeholders/1280x960.png';
        }
    }
}