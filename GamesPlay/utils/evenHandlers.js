import page from '../node_modules/page/page.mjs'
import {request} from '../api/requests.js' 
import { userInfo } from './userInfo.js';

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

   async function onRegisterSubmit (event) {
      event.preventDefault(); 
      
      let formData=new FormData(event.currentTarget);
      
      let {email, password} =Object.fromEntries(formData);

      let repass=formData.get('confirm-password') 
      if(isValidRegister(email,password,repass)) {
        let userInfo={
            email,
            password,
            repass
        }
      
      request.user.register(userInfo)
      .then(response=> {
        if(!response.ok) {
              throw new Error("Geristration is not sucsesfull")
        }
        return response.json()    
      })
      .then(data=> {
        sessionStorage.setItem('game-user', JSON.stringify(data))
        page.redirect('/')
      })
      .catch(error=> {
        alert(error.message)
      })  
    }
    else {
        "No empty fileds are allowed"
    }
}

    export const event= {
        onLoginSubmit,
        onRegisterSubmit
    } 

    function isValidRegister (email,password,repass) {
        if(email==''||password==''||repass==''||repass!=passqord) {
            return false
        }
        return true;
    }

