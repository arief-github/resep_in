import '../receipe-item';
import './receipe-list.css';

class ReceipeList extends HTMLElement {
	set receipes(items) {
		this._items = items;
		this.render();
	}

	render() {
		this.innerHTML = "";
		this.className= "row row-cols-1 row-cols-sm-2 row-cols-md-3";
		this._items.forEach((item) => {
			const receipeItemElement = document.createElement("receipe-item");
			receipeItemElement.receipe = item;
			this.appendChild(receipeItemElement);	
		})
	}

	renderError(message) {
		this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
	}
}

customElements.define("receipe-list", ReceipeList);