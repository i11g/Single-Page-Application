import page from '../node_modules/page/page.mjs'
import { viewHandler } from './viewHandler.js'

function start () {
    page(viewHandler.navView)
    page('/', viewHandler);
    page ('/login', viewHandler.logInView)
    page('/logout', viewHandler.logoutView)
    page('/register', viewHandler.registerView)
    page('/catalog', viewHandler.catalogView)

    page.start
}

export const engine={
    start
}