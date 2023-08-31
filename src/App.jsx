import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import { Route, Routes} from 'react-router-dom';
import HomePage from './pages/component/HomePage';
import CategoryPage from './pages/component/CategoryPage';
import RecipePage from './pages/component/RecipePage';


const queryClient = new QueryClient()

function App() {
  return (
  
    <QueryClientProvider client={queryClient}>
    <Routes>
      
        <Route path="/" element={<HomePage/> } />
        <Route path="/category/:categoryName" element={<CategoryPage/>} />
        <Route path="/recipe/:recipeId" element={<RecipePage/>} />
      
    </Routes>

    </QueryClientProvider>
   
  )
}

export default App;