
import './App.css';
import './responsive.css';
import './components/Mapa.css';
import './components/Header.css';
import './components/Panel.css';
import { Mapa } from './components/Mapa';
import { Header } from './components/Header';
import { Panel } from './components/Panel';

function App() {
  return (
    <div className="App">
      <Header/>
      <Panel/>
      <Mapa/>
    </div>
  );
}

export default App;
