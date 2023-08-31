import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchRecipeById = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
};

function RecipePage() {
  const { recipeId } = useParams();
  const { data: recipe, isLoading, error } = useQuery(['recipe', recipeId], () => fetchRecipeById(recipeId));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching recipe</div>;

  return (
    <div>
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
    </div>
  );
}

export default RecipePage;