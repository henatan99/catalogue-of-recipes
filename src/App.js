import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import Meals from './containers/meals';
import SearchInput from './components/searchInput';
import SearchMeals from './containers/searchMeals';
import Catalogue from './containers/catalogue';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <main className="main-container">
          <SearchInput />
          <Switch>
            <Route path="/" exact component={Catalogue} />
            <Route path="/Meals/:id" component={Meals} />
            <Route path="/SearchResult/:id" component={SearchMeals} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
