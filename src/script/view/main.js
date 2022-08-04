import "../component/search-bar";
import "../component/receipe-list";
import DataSource from "../data/data-source.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const receipeListElement = document.querySelector("receipe-list");
	const loadingElement = document.querySelector("#loader-text");

	const onButtonSearchClicked = () => {
		searchRecipe(searchElement.value);
	}

	const searchRecipe = async(keyword) => {
		loadingElement.style.display = 'block';
		try {
			const result = await DataSource.searchRecipe(keyword);
			// console.log(result);
			renderResult(result);
		} catch(error){
			console.error(error);
		}
	}

	searchElement.clickEvent = onButtonSearchClicked;

	const renderResult = (results) => {
		loadingElement.style.display = 'none';
		receipeListElement.receipes = results;
	}

	// tampil default
	searchRecipe('Dessert');
}

export default main;