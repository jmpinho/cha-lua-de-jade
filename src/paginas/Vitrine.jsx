import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../CSS/Vitrine.css";

function Vitrine() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/produtos")
          .then(res => res.json())
          .then(dados => {
            setProdutos(dados);
            setCarregando(false);
          });
      }, []);
    
      if (carregando) {
        return <p>Carregando produtos...</p>;
      }

      return (
        <div className="vitrine-container">
          <h1>Elixires Disponíveis</h1>
      
          <div className="grid">
            {produtos.map(produto => (
              <div className="card" key={produto.id}>
                <div className="imagem-container">
                  <img src={produto.imagem} alt={produto.nome} /> 
                </div>
              
                <h3>{produto.nome}</h3>
              
                <p>{produto.home}</p>

                <div className="card-footer">
                  <strong>
                    R$ {produto.preco.toFixed(2)}
                  </strong>
              
                  <Link to={`/produto/${produto.id}`}>
                    <button>Ver detalhes</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
      
          <Link to="/">
            <button className="voltar">Voltar para Página Inicial</button>
          </Link>
        </div>
      );
}

export default Vitrine;