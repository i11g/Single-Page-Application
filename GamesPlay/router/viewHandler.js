import {render} from '../node_modules/lit-html/lit-html.js'
import {page} from '../node_modules/page/page.mjs'

import {games} from '../api/requests.js'
import {templates} from '../templates.js'

let mainElement=document.querySelector('#box #main-content')
let headElement=document.querySelector('#box header')

async function homeView(ctx) {
    return await request.games,getMostRecentGames()
    render(templates.getHomeTemplate(games), mainElement)
}

export const viewHandler={
    homeView
}