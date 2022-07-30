import "./style.css";
import img from "../fotos/Group.png"
function LandingPage({ setIsLoged }) {
  return (
    <div className="tudo">
      <div className="escrito">
        <h1 className="titulo">
          Nu <span className="spanDoTitulo">Kenzie</span>
        </h1>
        <h2 className="tiluloDois">Centralize o controle das suas finanças</h2>
        <p className="paragrafo">de forma rápida e segura</p>
        <button className="botaoDoInicio" onClick={() => setIsLoged(true)}>Iniciar</button>
      </div>
        <img src={img} alt="" className="fotoInicio"/>
    </div>
  );
}

export default LandingPage;
