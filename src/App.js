import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import NavBar from './components/navBar';
import MealsPage from './routes/MealsPage';
import SearchInput from './containers/searchInput';
import SearchResultPage from './routes/SearchResultPage';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <SearchInput />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Meals/:id" component={MealsPage} />
          <Route path="/SearchResult/:id" component={SearchResultPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
