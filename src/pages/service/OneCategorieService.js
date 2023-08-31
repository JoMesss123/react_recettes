import {config} from '../../config'

class OneCategorieService {
	baseUrl = config.baseUrl;
	endpoint = 'filter.php?c'

    async fetchRecipesByCategory(category) {
    const response = await fetch(`${this.baseUrl}/${this.endpoint}=${category}`);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		

    return data.meals;
  }
}
export default OneCategorieService;

