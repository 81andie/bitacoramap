
import './App.css';
import './components/Mapa.css';
import './components/Header.css';
import { Mapa } from './components/Mapa';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
     <Mapa/>
    </div>
  );
}

export default App;
