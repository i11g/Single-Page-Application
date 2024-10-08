import {html} from'../node_modules/lit-html/lit-html.js'; 

export function getHomeTemplate (games) {
   
    return html `
        <!--Home Page-->
        <section id="welcome-world">

            <div class="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="../images/four_slider_img01.png" alt="hero">

            <div id="home-page">
                <h1>Latest Games</h1>
                <!-- Display div: with information about every game (if any) -->
                ${games&&games.length>0
                    ?games.map(g=>hmtl`
                        <div class="game">
                    <div class="image-wrap">
                        <img src=${g.imageUrl.substring(0,1)=='/'?`..${g.iamgeUrl}`:g.iamgeUrl}>
                    </div>
                    <h3>${g.title}</h3>
                    <div class="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div class="data-buttons">
                        <a href="/details/${g._id}" class="btn details-btn">Details</a>
                    </div>
                </div>`)
                    :html`
                    <!-- Display paragraph: If there is no games  -->
                    <p class="no-articles">No games yet</p>
                    `
                }                          
               
            </div>
        </section> `;
}
    
