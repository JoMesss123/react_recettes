import {config} from '../../config'

class CategorieService {
	baseUrl = config.baseUrl;
	endpoint = '/categories.php'

    async fetchCategories() {
    const response = await fetch('${this.baseUrl}/${this.endpoint}');
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
		const data = await response.json();
		

    return categories;
  }
}
export default CategorieService;