import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const fetchCategories = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();
  return data.categories;
};

function HomePage() {
  const { data: categories, isLoading, error } = useQuery('categories', fetchCategories);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching categories</div>;

  return (
    <div>
      <h1>Recette App</h1>
      <h2>Catégories de recettes</h2>
      <ul>
        {categories && categories.map(category => (
          <li key={category.idCategory}>
            <Link to={`/category/${category.strCategory}`}>{category.strCategory}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;