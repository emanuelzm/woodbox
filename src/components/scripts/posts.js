products.forEach((product) => {
    const article = document.createRange().createContextualFragment(/*html*/ `
        <div class="uk-card uk-card-default uk-width-1-2@m">
            <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <div class="uk-width-expand">
                        <h3 class="uk-card-title uk-margin-remove-bottom">Title</h3>
                        <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
                    </div>
                </div>
            </div>
            <div class="uk-card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div class="uk-card-footer">
                <a href="#" class="uk-button uk-button-text">Read more</a>
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