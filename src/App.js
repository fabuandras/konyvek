import './App.css';
import { konyvLista } from "./adat";
import Konyvek from './components/Konyvek';

function App() {

  function kosarba(adat) {
    console.log(adat);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyvek</h1>
      </header>
      <article>
        <Konyvek konyvLista={konyvLista} kosarbafv={kosarba} />
      </article>
    </div>
  );
}

export default App;
