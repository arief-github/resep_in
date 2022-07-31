import "./jumbo.css";

class HeaderJumbotron extends HTMLElement {
	connectedCallback() {
		// ambil informasi dari custom elemen tag header-jumbotron
		this.title = this.getAttribute("title") || null;
		this.description = this.getAttribute("description") || null;
		this.action = this.getAttribute("action") || null;

		// jalankan render disini
		this.render();
	}
	render() {
		this.innerHTML = ` 
		<div>
            <div class="jumbotron pt-3 pb-0">
                <div class="row">
                    <div class="col-5 m-md-auto m-lg-auto p-sm-4">
                        <h1>${this.title}</h1>
                        <p class="d-sm-none d-lg-block">${this.description}</p>
                        <a class="btn btn-sm p-0" href="#" role="button">
                            ${this.action} <i class="fa fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    <div class="col-sm-12 col-md-7">
                        <img src="" alt="${this.title}">
                    </div>
                </div>
            </div>
        </div>

		`;
	}
}

customElements.define("header-jumbotron", HeaderJumbotron);