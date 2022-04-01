
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a mi app de React" />
      <ItemCount initial={1} stock={10} />
    </div>
  )
}

export default App;
