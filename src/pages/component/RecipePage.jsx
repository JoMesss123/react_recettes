import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import FetchState from '../../components/FetchState/FetchState';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OneRepiceService from '../service/OneRepiceSerice';

const oRS = new OneRepiceService()

function RecipePage() {
  const { recipeId } = useParams();
  const { data: recipe, isLoading, isError, error } = useQuery(['recipe', recipeId], () => oRS.fetchRecipeById(recipeId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching recipe</div>;

  return (
    <Container>
      <FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container>
      {recipe && (
        <div>
          <h2>{recipe.strMeal}</h2>
          <p>Catégorie: {recipe.strCategory}</p>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>Ingrédients:</h3>
          <ul>
            {Object.entries(recipe)
              .filter(([key, value]) => key.startsWith('strIngredient') && value)
              .map(([key, value]) => (
                <li key={key}>{value} - {recipe[`strMeasure${key.slice(13)}`]}</li>
              ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{recipe.strInstructions}</p>
          <Link to={`/category/${recipe.strCategory}`}>Retour à la catégorie</Link>
        </div>
      )}
      </Container>
			</FetchState>
    </Container>
  );
}

export default RecipePage;