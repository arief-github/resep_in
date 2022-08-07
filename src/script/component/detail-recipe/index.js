import "./detail-style.css";

class DetailRecipe extends HTMLElement {
    set currentPage(value) {
        this.setAttribute('currentpage', value);
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    switchingPage() {
        $('#backToHomePage').click(function() {
            $('main').show();
            $('.details').hide();
        })
    }

    render() {
        this.currentpage = this.getAttribute("currentpage");
        this.innerHTML = ` 
			<nav class="d-flow-root aria-label="detailrecipe">
				<ol class="detailrecipe mt-2 float-left">
					<li class="detailrecipe-item"> <a href="#">Recipe</a></li>
					<li class="detailrecipe-item active" aria-current="page">${this.currentPage}</li>
				</ol>
				<button id="backToHomePage" class="btn btn-outline-danger rounded=pill float-right" ><i class="fa fa-arrow-left"></i> Back</button>
			</nav>
		`;

		this.switchingPage();
    }
}

customElements.define("detail-recipe", DetailRecipe);