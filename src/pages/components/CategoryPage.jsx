import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchRecipesByCategory = async (category) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const data = await response.json();
  return data.meals;
};

function CategoryPage() {
  const { categoryName } = useParams();
  const { data: recipes, isLoading, error } = useQuery(['recipes', categoryName], () => fetchRecipesByCategory(categoryName));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching recipes</div>;

  return (
    <div>
      <h2>Recettes de la catégorie: {categoryName}</h2>
      <ul>
        {recipes && recipes.map(recipe => (
          <li key={recipe.idMeal}>
            <Link to={`/recipe/${recipe.idMeal}`}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              {recipe.strMeal}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/">Retour aux catégories</Link>
    </div>
  );
}

export default CategoryPage;