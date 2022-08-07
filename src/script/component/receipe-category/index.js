import DataReceipeCategories from '../../data/receipe-categories.json';
import './receipe-cat.css';

class ReceipeCategories extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        let htmlContent = '';

        // mapping categories
        DataReceipeCategories.categories.map((category, index1) => {
            htmlContent += ` 
				<div class="d-flow-root mt-4">
					<h6 class="pull-left">${category.name}</h6>
				</div>
			`
            // mapping item category
            htmlContent += '<ul class="navbar-nav mr-auto">';
            category.items.map((item, index2) => {
                htmlContent += `
            <li class="nav-sidebar-item">
              ${item}
              <div class="custom-checkbox float-right">
                <input class="custom-control-input" type="checkbox" data-item="${item}" id="checkbox-${index1}-${index2}">
                <label class="custom-control-label" for="checkbox-${index1}-${index2}"></label>
              </div>
            </li>`;
            });
            htmlContent += '</ul>';
        });

        this.innerHTML += htmlContent;
    }
}

customElements.define("receipe-category", ReceipeCategories);