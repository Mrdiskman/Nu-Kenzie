import "./Card.css";


function Card({ transacao, listTransactions, setlistTransactions }) {
  function removeItem() {
    const result = listTransactions.filter((item) => {
      return item.id !== transacao.id;
    });
    setlistTransactions(result);
  }
  return (
    
    <div className={ transacao.tipo==="Entrada"? "entrou": "saiu"}>
      <div className="divInfo">
        <h2 className="description">{transacao.descricao}</h2>
        <span>{transacao.tipo}</span>
      </div>
      <div className="valores">
        <p>R$: {transacao.valores}</p>
        <button onClick={removeItem} className="botaoRmv"></button>
      </div>
    </div>
  );
}

export default Card;
