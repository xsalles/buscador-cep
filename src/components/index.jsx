import { useState } from 'react'
import './styles.css'

    

export default function Cep() {

    const [cep, setCep] = useState('');
    const [estado, setEstado] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');

    const handleCepChange = async (e) => {
        const cepValue = e.target.value;
        setCep(cepValue);

        if(cepValue.length === 8) {
            try {
                const response = await fetch(`https:/viacep.com.br/ws/${cepValue}/json/`);
                const data = await response.json();

                if(!data.erro) {
                    setEstado(data.uf);
                    setBairro(data.bairro);
                    setCidade(data.localidade);
                    setRua(data.logradouro);
                } else {
                    alert('Cep não encontrado')
                }
            } catch (error) {
                console.error('O cep não foi encontrado', error);
                alert('O cep não foi encontrado!');
            }
        }
    }

    
   
    return(
        <div className="cep">
            <nav className="nav">
                <h1>Buscador de cep</h1>
                <a href="https://viacep.com.br/">ViaCep</a>
                <a href="https://www.instagram.com/xs.salles/?next=%2F">Instagram</a>
                <a href="https://www.linkedin.com/in/pedro-sales-00090a274/">Linkedin</a>
                <a  href="https://github.com/xsalles">GitHub</a>
            </nav>
            <div className="form">
                <div className="itens-form">
                <div className="title">
                <h1>FORMULÁRIO DE CEP</h1>
            </div>
                    <form>
                        <input placeholder='Seu CEP' type="text" value={cep} onChange={handleCepChange}/>
                    </form>
                    <form>
                        <input placeholder='Estado' type="text" value={estado} readOnly />
                    </form>
                    <form>
                        <input placeholder='Cidade' type="text" value={cidade} readOnly />
                    </form>
                    <form>
                        <input placeholder='Bairro' type="text" value={bairro} readOnly />
                    </form>
                    <form>
                        <input placeholder='Rua' type="text" value={rua} readOnly/>
                    </form>
                    <form>
                        <input placeholder='Número' type="text"  />
                    </form>
                    <form>
                        <input type="submit"  />
                    </form>
                </div>
            </div>
            <footer className="end">
                <h2>Pedro henrique Moreira Sales</h2>
                <div className="line"></div>
                <p>Contato: <a href="mailto:xs.salles@gmail.com">xs.salles@gmail.com</a></p>
            </footer>
        </div>   
    )
}



