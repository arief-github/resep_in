import './side-footer.css';

class SideFooter extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: "open"
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = ` 
			   <hr class="my-3">
		        <div class="card-author">
		            <div class="card d-inline-block w-100">
		                <i class="fa fa-dribbble"></i>
		                <a href="https://dribbble.com/shots/6685757-Vacation-House-Cooking-Landing-Page/attachments" target="_blank">
		                    <span>Vacation House Cooking Page - By Cuberto</span>
		                </a>
		            </div>
		            <div class="card d-inline-block w-100 mb-3">
		                <span>Made With 💖 &#169; 2020, Arief Kurniawan</span>
		            </div>
		        </div>
		`
	}
}

customElements.define("side-footer", SideFooter);