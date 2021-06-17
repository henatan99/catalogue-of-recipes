import '../App.css';
import Catalogue from '../containers/catalogue';
import NavBar from './navBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Catalogue />
      </main>
    </div>
  );
}

export default App;
