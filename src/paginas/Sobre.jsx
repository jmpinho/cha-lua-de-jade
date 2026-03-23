import "../CSS/Sobre.css";

function Sobre() {
  return (
    <div className="sobre-container">

      <h1>Sobre o Projeto</h1>

      <img 
        src="/imagens/perfil.JPG" 
        alt="Eu"
        className="foto"
      />

      <p>
        Este projeto foi desenvolvido como prova Final do curso em React.
        A ideia foi criar uma pequena loja virtual de chás orientais,
        inspirada na cultura chinesa e no anime Diários de uma Apotecária.
      </p>

      <p>
        Durante o desenvolvimento do projeto e do curso, aprendi a utilizar
        diversas tecnologias e conceitos do desenvolvimento front-end, como
        React, React Router, CSS, consumo de APIs, gerenciamento de estado e
        muito mais. Foi uma experiência enriquecedora que me permitiu aplicar
        os conhecimentos adquiridos em um projeto simples, mas funcional.
      </p>

      <p>
        Este projeto representa minha evolução no desenvolvimento front-end
        e minha jornada aprendendo novas tecnologias para construir
        sites de diversos estilos, com os ensinamentos da Gaby e um pouco do Papai Gepeto :) 
      </p>

    </div>
  );
}

export default Sobre;