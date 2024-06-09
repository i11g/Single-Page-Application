import {url} from '../utils/urls.js'

async function getMostRecentGames() {
    return await fetch(url.getGamesUrl())
    .then(response=>response.json)
    .then(items=>items)
    } 

    export const games = {
        getMostRecentGames
    }
