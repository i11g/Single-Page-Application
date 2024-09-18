import {url} from'../utils/urls.js'
import { userInfo } from '../utils/userInfo'

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @returns user shoudl login if the email and passowrd are correct
 */

function login(email,password) {
    return fetch(url.getLoginUrl(), {
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({
        email,
        password
        })
    })
}  

/**
 * 
 * @returns check status 204
 */
function logOut () {
    return fetch(url.getLogoutUrl(), {
        method:'GET',
        headers: {'X-Authorization' : userInfo.getToken}
    })
} 
/**
 * 
 * @param {string} user 
 * @returns 
 */

function register (user) {
    return fetch (url.getRegisterUrl(), {
        method:'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(user)

    })
} 

export const user={
    login,
    logOut,
    register
}