import {config} from '../../config'

class OneRepiceService {
	baseUrl = config.baseUrl;
	endpoint = 'lookup.php?i'

    async fetchRecipeById(id) {
    const response = await fetch(`${this.baseUrl}/${this.endpoint}=${id}`);
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		

    return data.meals[0];
  }
}
export default OneRepiceService;

