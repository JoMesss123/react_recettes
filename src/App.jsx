import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/category/:categoryName" component={CategoryPage} />
        <Route path="/recipe/:recipeId" component={RecipePage} />
      </Switch>
    </Router>
  );
}

export default App;