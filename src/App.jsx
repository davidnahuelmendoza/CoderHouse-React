
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a mi app de React" />
      </div>
  )
}

export default App;
