import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";

import patoNormal from "../../assets/images/pato-normal.svg";
import sirene from "../../assets/images/sirene.jpg";
import "./styles-login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main class="container-login">
        <figure>
        <img src={sirene} class="pato" alt="logo site" className="icon-site"/>
        </figure>
        <section className="container-inputs">
        <form action="" method="post">
          <aside class="buttons-login">
            <label for="" ></label>
            <input type="email" placeholder="E-mail" />
          </aside>
          <aside class="buttons-login">
            <label for=""></label>
            <input type="password" placeholder="Senha" />
            <p>
              <a href="#">Esqueceu a senha? </a>
            </p>
          </aside>
          <aside class="buttons-login">
            <figure class="button-group-login">
              <button type="submit" className="botão-cadastro"> <Link to="/" className="no-decoration">Entrar</Link></button>
            </figure>
          </aside>
          <aside class="buttons-login">
            <figure class="button-group-login">
             <button type="submit" className="botão-cadastro"> <Link to="/cadastrar" className="no-decoration">Cadastrar-se</Link></button>
            </figure>
            <figure class="circle-container-login">
        <Link to="/faq" class="circle-login">?</Link>
        </figure>
          </aside>
        </form>
        </section>
        
      </main>
    </>
  );
};

export default Login;
