import "./App.css";
import Header from "./components/header";
import Form from "./components/Form";
import Historico from "./components/historico";
import { useState } from "react";
import Saldo from "./components/Saldo";
import LandingPage from "./components/LadingPage";

function App() {
  const [listTransactions, setlistTransactions] = useState([]);
  const [isLoged, setIsLoged] = useState(false);

  return isLoged === false ? (
    <section className="corpo">
      <LandingPage setIsLoged={setIsLoged} />
    </section>
  ) : (
    <section className="App">
      <Header setIsLoged={setIsLoged}/>
      <div className="estrutura">
        <div className="estruturaDoPagamento">
          <Form
            listTransactions={listTransactions}
            setlistTransactions={setlistTransactions}
          />
          <Saldo listTransactions={listTransactions} />
        </div>
        <Historico
          listTransactions={listTransactions}
          setlistTransactions={setlistTransactions}
        />
      </div>
    </section>
  );
}

export default App;
