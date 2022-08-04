import "../component/search-bar";
import "../component/receipe-list";
import DataSource from "../data/data-source.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const receipeListElement = document.querySelector("receipe-list");
	const loadingElement = document.querySelector("#loader-text");
	const clearFilterElement = document.querySelector("#clearFilter");

	const onButtonSearchClicked = () => {
		searchRecipe(searchElement.value);
	}

	const searchRecipe = async(keyword) => {
		loadingElement.style.display = 'block';
		try {
			const result = await DataSource.searchRecipe(keyword);
			// console.log(result);
			renderResult(result);
		} catch(message){
			// console.error(error);
			fallbackResult(message);
		}
	}

	searchElement.clickEvent = onButtonSearchClicked;

	const renderResult = (results) => {
		loadingElement.style.display = 'none';
		receipeListElement.receipes = results;
	}

	const fallbackResult = (message) => {
		loadingElement.style.display = 'none';
		receipeListElement.renderError(message);
	}

	// tampil default
	searchRecipe('Dessert');

	// fitur filter
	// filter categories
	const checkBox = document.querySelectorAll("input[type=checkbox]");
	checkBox.forEach((item) => {
		item.addEventListener('click', function() {
			const category = this.getAttribute("data-item");
			searchRecipe(category);
		})
	});

	// clear filter categories
	clearFilter.addEventListener("click", function() {
		const checkBox = document.querySelectorAll("input[type=checkbox]");
		checkBox.forEach((item) => {
			item.checked = false;
		})
	});
}

export default main;