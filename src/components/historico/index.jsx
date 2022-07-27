import Card from "../Card";
import "./historico.css";

function Historico({ listTransactions, setlistTransactions }) {
  return listTransactions.length === 0 ? (
    <section className="secaoHistorico">
      <div className="filtros">
        <h2 className="resumo">Resumo financeiro</h2>
        <nav>
          <ul className="listaFiltros">
            <li className="lista">Todos</li>
            <li className="lista">Entradas</li>
            <li className="lista">Despesas</li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>Você ainda não possui nenhum lançamento</h1>
        <div className="linhaLonga"></div>
        <div className="linhaCurta"></div>
        <div className="linhaLonga"></div>
        <div className="linhaCurta"></div>
        <div className="linhaLonga"></div>
        <div className="linhaCurta"></div>
      </div>
    </section>
  ) : (
    <section className="secaoHistorico">
    <div className="filtros">
      <h2 className="resumo">Resumo financeiro</h2>
      <nav>
        <ul className="listaFiltros">
          <li className="lista">Todos</li>
          <li className="lista">Entradas</li>
          <li className="lista">Despesas</li>
        </ul>
      </nav>
    </div>
      <div>
        <ul>
          {listTransactions.map((transacao, index) => (
            <Card
              transacao={transacao}
              listTransactions={listTransactions}
              key={index}
              setlistTransactions={setlistTransactions}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Historico;
