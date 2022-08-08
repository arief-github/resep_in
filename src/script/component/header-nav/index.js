import './nav.css';
import BrandIcon from '../../../assets/images/favicon.png';

class HeaderNav extends HTMLElement {
	connectedCallback() {
		this.innerHTML = ` 
			<header class="container my-3">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="#">
                    <img src="${BrandIcon}" class="brand-icon"> Resep.in
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Receipes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hotline</a>
                        </li>
                        <li class="nav-item d-sm-none d-md-none d-lg-block">
                            <a class="nav-link" href="#">
                            <i class="fa fa-search"></i>
                            </a>
                        </li>
                    </ul>
                    <div class="navbar-action d-sm-none d-md-none d-lg-block">
                        <span class="badge badge-dark rounded-circle">0</span>
                        <button type="button" class="btn rounded-pill">Log in</button>
                        <button type="button" class="btn btn-dark rounded-pill">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </header>
		 `
	}
}

customElements.define("header-nav", HeaderNav);