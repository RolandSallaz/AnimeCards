class AnimeApi{
    constructor(){
        this._url="https://animechan.vercel.app/api"
    }
    _checkResponse(response){
        return response.ok? response.json() : Promise.reject(response.status);
    }
    getTenQuotes(){
        return fetch(`${this._url}/quotes`)
        .then(res=>this._checkResponse(res));
    }
}
const animeApi=new AnimeApi();
export default animeApi;