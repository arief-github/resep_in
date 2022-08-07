import DataSource from '../../data/data-source.js';
import './receipe-item.css';

class ReceipeItem extends HTMLElement {
    set receipe(item) {
        this._item = item;
        this.render();
    }

    switchingPage() {
        $('main').hide();
        $('.details').show();
    }

    render() {
        const loadingElement = document.querySelector('#loader-text');
        this.innerHTML = `
            <div class="col mb-4">
                <div class="card card-receipe" data-id="${this._item.id}">
                    <img src="https://spoonacular.com/recipeImages/${this._item.image}" class="card-img card-img-top" alt="${this._item.title}"/>
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${this._item.title}</h5>
                        <p class="card-text">
                            <span class="float-left"><img src="" class="icon-svg"> SERVES ${this._item.servings}</span>
                            <span class="float-right"><i class="fa fa-clock-o"></i> ${this._item.readyInMinutes} MINS</span>
                        </p>
                    </div>  
                </div>
            </div>
        `;

        // DataSource Information Receipe
        const informationReceipe = async (id) => {
            loadingElement.style.display = 'block';
            try {
                const result = await DataSource.informationRecipe(id);
                renderResult(result);
            } catch (message) {
                fallbackResult(message);
            }
        }

        const renderResult = (result) => {
            loadingElement.style.display = 'none';

            // switch back to landingpage
            this.switchingPage();

            // detail item element
            const detailRecipeElement = document.querySelector("detail-recipe");
            detailRecipeElement.currentpage = results.title;

            // image recipe
            $('#detailImage').attr("src", results.image);

            // detail header
            const detailHeaderElement = document.querySelector("detail-header");
            const dataHeader = {
                'title': (results.title ? results.title : 'NaN'),
                'sourcename': (results.sourceName ? results.sourceName : '-'),
                'preparationminutes': (results.preparationminutes ? results.preparationminutes : 0),
                'servings': (results.servings ? results.servings : 0),
                'summary': (results.summary ? results.summary : '-')
            }
            detailHeaderElement.update = dataHeader;

            // Ingredients
            results.extendedIngredients.forEach((item) => {
                $('.ingredients').append(` <li>${item.original}</li> `)
            })

            // Method
            results.analyzedInstructions[0].steps.forEach((item) => {
                $('.methods').append(`<li>${item.step}</li>`)
            })
        }

        const fallbackResult = (message) => {
            loadingElement.style.display = 'none';
            alert(message);
        }

        const cardRecipe = this.querySelector(".card-receipe");
        cardRecipe.addEventListener('click', function() {
            const idReceipe = this.getAttribute("data-id");
            informationReceipe(idReceipe);
            console.log(idReceipe);
        });
    }
}

customElements.define("receipe-item", ReceipeItem);