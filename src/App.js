
import './App.css';
import './responsive.css';
import './components/Mapa.css';
import './components/Header.css';
import './components/Panel.css';
import { Mapa } from './components/Mapa';
import { Header } from './components/Header';
import { Panel } from './components/Panel';
import { MarkersProvider } from './components/MarkersProvider';

function App() {
  return (
    <div className="App">

      <MarkersProvider>
      <Header/>
      <Panel/>
      <Mapa/>
      </MarkersProvider>
    </div>
  );
}

export default App;
