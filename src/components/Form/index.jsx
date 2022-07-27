import "./form.css";
import { useState } from "react";

function Form({ listTransactions, setlistTransactions }) {
  // console.log(listTransactions);
  const [descricao, setDescricao] = useState("");
  const [valores, setValores] = useState(0);
  const [tipo, setTipo] = useState("Entrada");

  function idAleatorio() {
    const min = 1;
    const max = 99999;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function criarObj() {
    setlistTransactions([
      ...listTransactions,
      {
        descricao: descricao,
        valores: Number(valores),
        tipo: tipo,
        id: idAleatorio(),
      },
    ]);
  }
  return (
    <form className="formularioDePagamentos">
      <div className="divDescricao">
        <p className="pDesc">Descrição</p>
        <div className="descript">
          <input
            className="InputDescricao"
            placeholder="Digite aqui sua descrição"
            name="descricao"
            type="text"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
          ></input>
        </div>
        <span className="textExemplo">Ex:Compra de roupas</span>
      </div>
      <div className="nomes">
          <p className="pValor">Valor</p>
          <p className="pTipo">Tipo de Valor</p>
        </div>
      <div className="divisoriaDeValores">
        
        <div>
          <input
            className="InputValor"
            name="valores"
            type="text"
            value={valores}
            onChange={(event) => setValores(event.target.value)}
          ></input>
        </div>
        <div>
          <select
            className="tipo"
            name="TipoDeValor"
            id="TipoDeValor"
            onChange={(event) => setTipo(event.target.value)}
          >
            <option className="opcoes" value="Entrada">
              Entrada
            </option>
            <option className="opcoes" value="Despesa">
              Despesa
            </option>
          </select>
        </div>
      </div>
      <button
        className="botaoEnviarValor"
        type="button"
        onClick={() => criarObj()}
      >
        inserir Valor
      </button>
    </form>
  );
}

export default Form;
