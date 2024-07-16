import './styles.css'
import { useForm } from 'react-hook-form'
    

export default function Cep(props) {
    const checkCep = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
        })
    }
    return(
        <div className="cep">
            <nav className="nav">
                <h1>{props.nav}</h1>
                <a href="https://viacep.com.br/">{props.api}</a>
                <a href="https://www.instagram.com/xs.salles/?next=%2F">{props.insta}</a>
                <a href="https://www.linkedin.com/in/pedro-sales-00090a274/">{props.linkedin}</a>
                <a  href="https://github.com/xsalles">{props.git}</a>
            </nav>
            <div className="form">
                <div className="itens-form">
                <div className="title">
                <h1>{props.title}</h1>
            </div>
                    <form>
                        <input placeholder='Seu CEP' type="text" {...register("cep")} onblur={checkCep} />
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
                    <form>
                        <input type="submit"  />
                    </form>
                </div>
            </div>
            <footer className="end">
                <h2>{props.endName}</h2>
                <div className="line"></div>
                <p>Contato: <a href="mailto:xs.salles@gmail.com">{props.email}</a></p>
            </footer>
        </div>   
    )
};


