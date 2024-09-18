import {html, nothing} from "../node_modules/lit-html/lit-html.js"
import { userInfo } from "../utils/userInfo.js" 
import{event} from "../utils/evenHandlers.js" 


export function getDetailsTemplate (game, comments) {
     return html`
       <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl.substring(0,1)=='/'? `..${game.imageUrl}` : game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">
                    ${game.summary}
                </p>
               
                <div class="details-comments">
                    <h2>Comments:</h2>
                    ${comments&&comments.length>0 ? html `
                        <ul>
                       ${comment.map(c=> html`<li class="comment">
                            <p>Content: ${c.comment}</p>
                        </li>`)}
                        
                    </ul>`: html`<p class="no-comment">No comments.</p>` }
                    <ul>                       
                    
                </div>

                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                ${userInfo.getUserObj()&&userInfo.getUserObj()._id==game._ownerId 
                    ? html `<div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a href="/delete/${game._id}" class="button">Delete</a>
                </div>` : nothing }                
            </div>

           ${userInfo.getUserObj()&&userInfo.getUserObj()._id!=game._ownerId 
            ? html`<article class="create-comment">
                <label>Add new comment:</label>
                <form class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`: nothing}           

        </section>

     `
}