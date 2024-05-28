import './App.css'
import Fundo from './assets/fundo.jpg'

export default function App() {
  return (
    
    <div className="CEP">
      
      <div className="title">
        <h1>Buscador de CEP</h1>
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
    </div>




  )

}


