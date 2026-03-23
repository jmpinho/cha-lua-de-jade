import { useState } from "react";
import "../CSS/Contato.css";

function Contato() {

  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");

  function enviarFormulario(evento) {
    evento.preventDefault();
    setMensagem(`Cadastro de ${nome} realizado com sucesso!`);
  }

  return (
    <div className="contato-container">
      <h1>Contato</h1>

      <p>
        Preencha seus dados para receber novidades do estoque e concorrer
        a chance de ter uma consulta com a Apotecária mais famosa do Palácio Interno.
      </p>

      <img src="/imagens/MaoMao.png" alt="Apotecária" />

      <form onSubmit={enviarFormulario}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Telefone" />

        <button type="submit">Enviar</button>
      </form>

      <p>{mensagem}</p>
    </div>
  );
}

export default Contato;
