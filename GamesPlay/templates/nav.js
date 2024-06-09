import {html} from '../node_modules/lit-html/lit-html.js';
import { userInfo  } from '../utils/userInfo.js'; 

export function getNavTemplates() {
    return html`    
    <h1><a class="home" href="#">GamesPlay</a></h1>
    <nav>
       <a href="catalog">All games</a>
        <!-- Logged-in users --> 
        ${userInfo.getUserObj() 
            ? html`
            <div id="user">
                <a href="#">Create Game</a>
                <a href="#">Logout</a>
            </div>
            `
            :html`                 
            <!-- Guest users -->
            <div id="guest">
                <a href="#">Login</a>
                <a href="#">Register</a>
            </div>            
            `}        
    </nav>`;   
    
}