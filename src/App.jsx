import './App.css'


export default function Cep(props) {
    return (

        <div className="cep">
            <nav className="nav">
                <h1>{props.nav}</h1>
                <a href="https://viacep.com.br/">{props.api}</a>
                <a href="https://www.instagram.com/xs.salles/?next=%2F">{props.insta}</a>
                <a href="https://www.linkedin.com/in/pedro-sales-00090a274/">{props.linkedin}</a>
                <a href="https://github.com/xsalles">{props.git}</a>
            </nav>
            <div className="title">
                <h1>{props.title}</h1>
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
                <h2>{props.endName}</h2>
                <div className="line"></div>
                <p>Contato: <a href="mailto:xs.salles@gmail.com">{props.email}</a></p>
            </footer>
        </div>
    )

}


