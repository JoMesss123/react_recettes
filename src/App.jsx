import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query'
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import RecipePage from './pages/RecipePage';

const queryClient = new QueryClient()

function App() {
  return (
  
    <QueryClientProvider client={queryClient}>
    <Routes>
      
        <Route path="/" exact component={HomePage} />
        <Route path="/category/:categoryName" component={CategoryPage} />
        <Route path="/recipe/:recipeId" component={RecipePage} />
      
    </Routes>

    </QueryClientProvider>
   
  );
}

export default App;