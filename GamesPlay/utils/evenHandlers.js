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

async function onCreateSubmit(event) {
    event.preventDefault() ;

    let formData=new FormData(event.currentTarget) 

    let {title, category, imageUrl, summary, maxLevel} =Object.fromEntries(formData) 

    if(isValidCreatingOrEditing(title, category, imageUrl, summary, maxLevel)) {
          let item= {
            title,
            category,
            imageUrl,
            summary,
            maxLevel
          }
    
    request.games.create(item)
    .then(response=>{
        if(!response.ok) {
            throw new Error("Canno create a game") 
        }
        return response.json()
    })
    .then (game=> {
        page.redirect('/')
    })
    .catch(error=>alert(error.message))
   } else {
    alert("All fields are required")
   } 
}

function onCommentSubmit(event) {
  event.preventDefault() 

  let formData=new FormData(event.currentTarget)
  let comment=formData.get('comment')

  let gameId=event.currentTarget.getAttribute('gameid')
  
  let form=event.currenttarget 
  
  request.comments.postNew({gameId, comment})
  .then(response=>{
    if(!response.ok) {
        throw new Error("Unable to send comment")
    }
    return response.json()
  })
  .then(comment=>{
    form.reset();
    page.redirect(`/details${gameId}`)
  })
  .catch(error=>
    alert(error.massage)) 
}

export const event= {
        onLoginSubmit,
        onRegisterSubmit,
        onCreateSubmit,
        onCommentSubmit
    } 

function isValidRegister (email,password,repass) {
        if(email==''||password==''||repass==''||repass!=passqord) {
            return false
        }
        return true;
    } 
function isValidCreatingOrEditing(title, category, imageUrl, summary, maxLevel) {
    if(title==''||category==''||maxLevel==''||summary==''||imageUrl=='') {
        return false
    }
    return true 
} 

