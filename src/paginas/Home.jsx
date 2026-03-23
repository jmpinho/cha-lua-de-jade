import { Link } from "react-router-dom";
import xicara from "/imagens/imagem_xicara.png";
import "../CSS/Home.css";

function Home(){
    return(
        <div className="home">

            <div className="home-topo">
                <h1>Chá da Lua de Jade</h1>
                <img src={xicara} alt="imagem logo" />
            </div>
            
            <p>
              Loja de chás orientais com os melhores produtos dos melhores fornecedores.
            </p>

            <Link to="/vitrine">
                <button>Conhecer produtos</button>
            </Link>

        </div>
    )
}

export default Home;