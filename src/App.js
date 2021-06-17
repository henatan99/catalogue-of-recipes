import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home'
import NavBar from './components/navBar'
import MealPage from './routes/MealPage'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Meal" component={MealPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
