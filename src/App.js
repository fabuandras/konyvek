import './App.css';
import { useState } from "react";
import { konyvLista } from "./adat";
import Konyvek from './components/Konyvek';
import Kosar from './components/Kosar';

function App() {

  const [kosarLista, setKosarLista]=useState([])
  function kosarba(adat) {
    const sl=[...kosarLista]
    sl.push(konyvLista[adat])
    setKosarLista([...sl])
    console.log(kosarLista)
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1>Könyvek</h1>
      </header>

      <section className="kosar">
        <Kosar lista={kosarLista} />
      </section>

      <article>
        <Konyvek konyvLista={konyvLista} kosarbafv={kosarba} />
      </article>

    </div>
  );
}

export default App;
