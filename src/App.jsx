import './App.css'




export default function Cep() {
  return (

    <div className="cep">
      <nav className="nav">
        <h1>Buscador de CEP</h1>
        <a href="https://viacep.com.br/">Site contribuinte</a>
        <a href="https://www.instagram.com/xs.salles/?next=%2F">Instagram do DEV</a>
        <a href="https://www.linkedin.com/in/pedro-sales-00090a274/">LinkedIN</a>
        <a href="https://github.com/xsalles">Git Hub</a>
      </nav>
      <div className="title">
        <h1>FORMULÁRIO DE CEP</h1>
      </div>
      <div className="form">
        <div className="itens-form">
          <form>
            <input placeholder='Seu CEP' type="text" />
          </form>
          <form>
            <input placeholder='Estado' type="text" />
          </form>
          <form>
            <input placeholder='Cidade' type="text" />
          </form>
          <form>
            <input placeholder='Bairro' type="text" />
          </form>
          <form>
            <input placeholder='Rua' type="text" />
          </form>
          <form>
            <input placeholder='Número' type="text" />
          </form>
          
        </div>
      </div>
      <footer className="end">
        <h1>Sales</h1>
      </footer>
    </div>




  )

}


