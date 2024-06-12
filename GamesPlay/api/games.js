import {url} from '../utils/urls.js'
import { userInfo } from '../utils/userInfo.js'

async function getMostRecentGames() {
    return await fetch(url.getGamesUrl()+ '?sortBy=_createdOn%20desc&distinct=category')
    .then(response=>response.json)
    .then(items=>items)
    } 

async function getAll() {
    return await fetch(url.getGamesUrl() + '?sortBy=_createdOn%20desc')
    .then(response=>response.json())
    .then(items=>items)
}  

function create(item) {
    return fetch(url.getGamesUrl(), {
        method: 'POST',
        headers : {
            'content - type': 'application/json',
            'X-Authorization' : userInfo.getToken()
        },
        body : JSON.stringify(item)
    })
}


export const games = {
        getMostRecentGames,
        getAll,
        create
    }
