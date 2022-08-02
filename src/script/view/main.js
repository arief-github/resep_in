import "../component/search-bar";
import DataSource from "../data/data-source.js";

const main = () => {
	const searchElement = document.querySelector("search-bar");

	const onButtonSearchClicked = () => {
		searchRecipe(searchElement.value);
	}

	const searchRecipe = async(keyword) => {
		try {
			const result = await DataSource.searchRecipe(keyword);
			console.log(result);
		} catch(error){
			console.error(error);
		}
	}

	searchElement.clickEvent = onButtonSearchClicked;

	// tampil default
	searchRecipe('Dessert');
}

export default main;