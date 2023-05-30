products.forEach((product) => {
    const article = document.createRange().createContextualFragment(/*html*/ `
        <div>
            <div style="border: 1px solid #111;" class="uk-border-rounded uk-card uk-card-default">
                <div style="border-bottom: 1px solid #111;" class="uk-card-media-top">
                    ${ product.promotion ? `<div style='background: #FBCD17; width: fit-content;' class='uk-card-badge uk-label'> ${product.promotion || ""} </div>` : "" }
                    ${ product.images ?
                        `<div style="display: ${product.images.length >= 2 ? "block" : "none" }" class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow uk-slider="finite: false, set: false;">

                            <ul class="uk-slideshow-items">
                                ${ product.images ? product.images.map((image) => /*html*/ `
                                        <li>
                                            <img src="${image}" alt="">
                                        </li>
                                    `).join("") 
                                : "" }
                            </ul>
                        
                            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
                        
                        </div>` :
                        `<div style="display: ${product.images.length = 1 ? "block" : "none" }" class="uk-position-relative uk-light">
                            <img src="${image}" alt="">
                        </div>`
                    }
                </div>
                <div style="position: relative;" class="uk-card-body">
                    <h3 class="uk-card-title">${product.name}</h3>
                    <p>${product.description}</p>
                    <a style="position: absolute; left: 0; right: 0; bottom: 0; top: 0;" href="${product.link}"></a>
                    <span>Visit &gt</span>
                </div>
            </div>
        </div>
    `);

    const blank_article = document.createRange().createContextualFragment(/*html*/ `
        <div>
            <div style="height: 100%; width: 70%; display: grid; place-items: center; font-weight: bold; border: 1px solid #111;" class="uk-border-rounded uk-card uk-card-default">
                <div style="position: relative;" class="uk-card-body">
                    <a style="position: absolute; left: 0; right: 0; bottom: 0; top: 0;" href="./products"></a>
                    <span>See More &gt</span>
                </div>
            </div>
        </div>
    `);

    document.getElementById("products").children.length < 2 ? document.getElementById("products").append(article) : "";
    document.getElementById("products").children.length == 2 ? document.getElementById("products").append(blank_article) : "";
});   