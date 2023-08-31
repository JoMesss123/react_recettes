import React from 'react';
import FetchState from '../../components/FetchState/FetchState';
import Container from 'react-bootstrap/Container';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import OneCategorieService from '../service/OneCategorieService';

const cS = new OneCategorieService()

function CategoryPage() {
const { categoryName } = useParams();
const { data: recipes, isLoading, isError, error } = useQuery(['recipes', categoryName], () =>
cS.fetchRecipesByCategory(categoryName));

if (isLoading) return <div>Loading...</div>;
if (error) return <div>Error fetching recipes</div>;

return (
<Container fluid className='d-grid min-vh-100'>
  <FetchState isLoading={isLoading} isError={isError} error={error}>
    <Container>
      <h2>Recettes de la catégorie: {categoryName}</h2>
      <ul>
        {recipes && recipes.map(recipe => (
        <li key={recipe.idMeal}>
          <Link to={`/recipe/${recipe.idMeal}`}> <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          {recipe.strMeal}
          </Link>
        </li>
        ))}
      </ul>
      <Link to="/">Retour aux catégories</Link>
    </Container>
  </FetchState>
</Container>
);
}

export default CategoryPage;