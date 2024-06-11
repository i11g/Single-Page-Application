import {html} from "../node_modules/lit-html/lit-html.js"

export function getCatalogTemplate(games) {
         return html`<section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
            ${games&&games.length>0 
                ?games.map(g=>html`
                    <div class="allGames">
                <div class="allGames-info">
                    <img src="./images/avatar-1.jpg">
                    <h6>${g.category}</h6>
                    <h2>${g.name}</h2>
                    <a href="#" class="details-button">Details</a>
                </div>                    
                    `): html`<!-- Display paragraph: If there are no games  -->
            <h3 class="no-articles">No articles yet</h3>`
            }         
            
            
        </section>       
         
         `
}