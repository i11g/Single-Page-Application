import page from '../node_modules/page/page.mjs'
import {request} from '../api/requests.js' 

async function onLoginSubmit(event) {
    event.preventDefault()
    
    let formData= new FormData(event.currenttarget);

    let {email, password } =Object.fromEntries(formData)

    await request.user.login(email, password)
    .then(response=> {
        if(!response.ok) {
            throw new Error('Unable to login');
        }
        return response.json()
    })
    .then(user=> {
        sessionStorage.setItem('game-user', JSON.stringify(user));
        page.redirect('/')
    })
    .catch(error=> {
        alert
    })
}

    export const event= {
        onLoginSubmit
    }

