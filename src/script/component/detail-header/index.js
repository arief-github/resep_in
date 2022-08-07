import './detail-header.css';

class DetailHeader extends HTMLElement {
    set update(value) {
        // make attribute and get the value
        this.setAttribute('title', value.title);
        this.setAttribute('sourcename', value.sourcename);
        this.setAttribute('preparationminutes', value.preparationminutes);
        this.setAttribute('servings', value.servings);
        this.setAttribute('summary', value.summary);
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // get value on atttibutes
        this.title = this.getAttribute('title') || null;
        this.sourcename = this.getAttribute('sourcename') || null;
        this.preparationminutes = this.getAttribute("preparationminutes") || null;
        this.servings = this.getAttribute('servings') || null;
        this.summary = this.getAttribute('summary') || null;

        this.innerHTML = `
			     <h5>${this.title}</h5>
			        <p class="author">${this.sourcename}</p>
			        <div class="row recipe-details">
			          <div class="col-12 col-md-4">
			            <img src="" class="icon-detail-svg">
			            <span>COOK : ${this.preparationminutes} MINS</span>
			          </div>
			          <div class="col-12 col-md-4">
			            <img src="" class="icon-detail-svg">
			            <span>EASY</span>
			          </div>
			          <div class="col-12 col-md-4">
			            <img src="" class="icon-detail-svg">
			            <span>SERVES ${this.servings}</span>
			          </div>
			          <div class="col-12 mt-3 text-justify">
			            <p>${this.summary}</p>
			          </div>
        		</div>
		`
    }
}

customElements.define('detail-header', DetailHeader);