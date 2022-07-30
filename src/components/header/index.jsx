import "./header.css"
function Header({setIsLoged}) {
  return (
    <header>
      <div className="titulo">
        <h1 className="nu">NU <span className="spanKenzie">Kenzie</span></h1>
      </div>
      <button className="botaoInicio" onClick={()=>setIsLoged(false)}>Início</button>
    </header>
  );
}

export default Header
