import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos a mi e-commerce de viajes"}/>
    </div>
  )
}

export default App;
