import {page} from '../node_modules/page/page.mjs'
import { viewHandler } from './viewHandler.js'

function start () {
    page('/', viewHandler);

    page.start
}

export const engine={
    start
}