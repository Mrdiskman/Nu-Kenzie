import "./saldo.css"

function Saldo({ listTransactions }) {
  const result = listTransactions?.reduce(
    (acc, prev) =>
      prev.tipo === "Entrada" ? acc + prev.valores : acc - prev.valores,
    0 
  );
  return (
    <div className="divSaldo">
      <div className="value">
        <h2 className="tot">Valor total:</h2>
        <p className="saldo">R$ {result}</p>
      </div>
      <span className="spanSaldo">O valor se refere ao saldo</span>
    </div>
  );
}

export default Saldo;
