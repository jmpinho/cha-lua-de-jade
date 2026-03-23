function NotFound() {

    const pagina = {
      minHeight: "85vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url('/imagens/fundoErro404.png')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
  
    const caixa = {
      backgroundColor: "rgba(0,0,0,0.65)",
      padding: "40px",
      borderRadius: "10px",
      textAlign: "center",
      color: "white",
      maxWidth: "500px"
    };
  
    const titulo = {
      fontSize: "2.5rem",
      marginBottom: "10px"
    };
  
    return (
      <div style={pagina}>
        <div style={caixa}>
          <h1 style={titulo}>Página Não Encontrada</h1>
          <p>Erro 404 - A página que você está procurando não existe.</p>
        </div>
      </div>
    );
  }
  
  export default NotFound;