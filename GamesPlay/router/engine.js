import page from '../node_modules/page/page.mjs'
import { viewHandler } from './viewHandler.js'

function start () {
    page(viewHandler.navView)
    page('/', viewHandler);
    page ('/login', viewHandler.logInView)

    page.start
}

export const engine={
    start
}