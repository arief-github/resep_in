export default class DataSource {
    static searchRecipe(keyword) {
        return fetch(` https://api.spoonacular.com/recipes/search?apiKey=c2062832696f4d5c9efdf749ce11b8d1&query=${keyword}&number=12`)
            .then(res => {
                return res.json();
            })
            .then(resJson => {
                if (resJson.results) {
                    return Promise.resolve(resJson.results);
                } else {
                    return Promise.reject(` ${keyword} is not found`);
                }
            })
    }

    static informationRecipe(id) {
        return fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=c2062832696f4d5c9efdf749ce11b8d1`)
            .then(res => {
                return res.json()
            })
            .then(resJson => {
                if (resJson) {
                    return Promise.resolve(resJson);
                } else {
                    return Promise.reject(`${id} is not found`)
                }
            })
    }
}