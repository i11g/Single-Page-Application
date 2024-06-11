import {render} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'

import {games, request} from '../api/requests.js'
import {templates} from '../templates.js'

let mainElement=document.querySelector('#box #main-content')
let headElement=document.querySelector('#box header')

async function homeView(ctx) {
    let games=await request.games.getMostRecentGames()
    render(templates.getHomeTemplate(games), mainElement)
} 

function navView(ctx, next) {
    render(templates.getNavTemplates(), headElement)
    next(); 
} 

async function logInView(ctx) {
    render(templates.getlogInTemplate(), mainElement)
} 

async function registerView(ctx) {
    render (templates.getRegisterTemplate (), mainElement) 

}  

function logoutView (ctx) {
    request.user.logOut() 
    .then(response=> {
        if(response.status==204) {
            sessionStorage.removeItem('game-user')
            page.redirect('/')
        }
        })
    } 

async function catalogView(ctx) {
    let games=await request.games.getAll
    render(templates.getCatalogTemplate(games), mainElement)
} 

export const viewHandler={
    homeView,
    navView,
    logInView,
    registerView,
    logoutView,
    catalogView
}