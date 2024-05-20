import './App.css';
import Mensaje from './Mensaje';

const Mensajex = () => {
  return (
  <h1>
    Hola mundo
  </h1>)
}
function App() {
  const mensaje = 'Hola mundox'
  return (
    <div className="App">
      <Mensaje color="red" title="Estamos en un curso"/>
      <Mensajex/>
     {mensaje + ' evaluacion en jsx'} + 1
    </div>
  );
}

export default App;
