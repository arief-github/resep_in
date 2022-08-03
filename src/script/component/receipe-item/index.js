import DataSource from '../../data/data-source.js';
import './receipe-item.css';

class ReceipeItem extends HTMLElement {
    set receipe(item) {
        this._item = item;
        this.render();
    }

    render() {
        this.innerHTML = `
			<div class="col mb-4">
				<div class="card card-receipe data-id="${this._item.id}">
					<img src="https://spoonacular.com/receipeImages/${this._item.image}" class="card-img card-img-top" alt="${this._item.title}"/>
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
            try {
            	const result = await DataSource.informationReceipe(id);
            	renderResult(result);
            } catch (message) {

            }
        }
    }
}

customElements.define("receipe-item", ReceipeItem);