import config from './config'
//  apikey = config.apikey  es igua a ponerlo {apikey} = config.
const { apiKey } = config

// const URL =`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apikey}&format=json`
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`
export default function getArtists(country) {
    //reeemplazar en la url :country por la variable que le estamos pasando
    const url = URL.replace(':country', country)
    return fetch(url)
        .then(res => res.json())
        .then(json => json.topartists.artist)
    // return fetch(URL)
    //     .then(res => res.json())                 // hacemos la peticion al api de leftfm
    //     .then(json => json.topartists.artist)   //esta linea nos retornara la lista de  todos los artistas
}