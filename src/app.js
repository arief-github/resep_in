import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './style/style.css';


// header and information / static content
import "./script/component/header-nav/";
import "./script/component/header-jumbotron/";
import "./script/component/side-footer/";

// import search and dropdown list
import "./script/component/search-bar";
import "./script/component/dropdown-sort";
import "./script/component/receipe-category";

// detail recipe page
import './script/component/detail-header/';
import './script/component/detail-recipe/';

import main from './script/view/main.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

document.addEventListener("DOMContentLoaded", main);