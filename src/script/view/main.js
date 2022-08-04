import "../component/search-bar";
import "../component/receipe-list";
import DataSource from "../data/data-source.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");
	const receipeListElement = document.querySelector("receipe-list");

	const onButtonSearchClicked = () => {
		searchRecipe(searchElement.value);
	}

	const searchRecipe = async(keyword) => {
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
		receipeListElement.receipes = results;
	}

	// tampil default
	searchRecipe('Dessert');
}

export default main;