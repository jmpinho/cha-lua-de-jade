import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../CSS/Detalhe.css";

function DetalheProduto() {

  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [adicionado, setAdicionado] = useState(false);

  const comprarProduto = () => {
    setAdicionado(true);
  };

  useEffect(() => {
    fetch(`http://localhost:3001/produtos/${id}`)
      .then(res => res.json())
      .then(dados => setProduto(dados));
  }, [id]);

  if (!produto) {
    return <p>Carregando produto...</p>;
  }

  return (
    <div className="detalhe-container">
  
      <div className="detalhe-card">
  
      <div className="imagem-area">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="detalhe-img"
        />
      </div>
  
        <div className="detalhe-info">
          <h1>{produto.nome}</h1>
  
          <p>{produto.detalhe}</p>
  
          <h2 className="preco">R$ {produto.preco.toFixed(2)}</h2>
  
          <div className="botoes">
          <button 
            onClick={comprarProduto} 
            className={`btn-comprar ${adicionado ? "sucesso" : ""}`}
          >
            {adicionado ? "Adicionado " : "Comprar"}
          </button>

            <Link to="/Vitrine">
              <button>Voltar</button>
            </Link>
          </div>
        </div>
  
      </div>
  
    </div>
  );
}

export default DetalheProduto;