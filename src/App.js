
import './App.css';
import './responsive.css';
import './components/Mapa.css';
import './components/Header.css';
import './components/Panel.css';
import { Mapa } from './components/Mapa';
import { Header } from './components/Header';
import { Panel } from './components/Panel';
import { MarcadoresProviders } from './components/MarcadoresProviders';

function App() {
  return (
    <div className="App">

      <MarcadoresProviders>
      <Header/>
      <Panel/>
      <Mapa/>
    </MarcadoresProviders>
    </div>
  );
}

export default App;
