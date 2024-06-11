import {url} from '../utils/urls.js'

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

    export const games = {
        getMostRecentGames,
        getAll
    }
