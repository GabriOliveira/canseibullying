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
        <section className="alinhar">
          <figure>
            <img
              src={sirene}
              class="pato"
              alt="logo site"
              className="icon-site"
            />
          </figure>
          <aside className="container-inputs">
            <form action="" method="post">
              <aside class="buttons-login">
                <label for=""></label>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input-logar"
                />
              </aside>
              <aside class="buttons-login">
                <label for=""></label>
                <input
                  type="password"
                  placeholder="Senha"
                  className="input-logar"
                />
                <aside className="abaixo-input">
                  <a href="/esquecisenha" className="texto-abaixo">
                    Esqueceu a senha?{" "}
                  </a>

                  <a href="/cadastrar" className="texto-abaixo">
                    Cadastrar{" "}
                  </a>
                </aside>
              </aside>
              <section className="botões-de-ação">
                <aside class="buttons-login">
                  <figure class="button-group-login">
                    <Link to="/" className="botão-cadastro">
                      Entrar
                    </Link>
                  </figure>
                  <figure class="circle-container-login">
                    <Link to="/faq" class="circle-login">
                      ?
                    </Link>
                  </figure>
                </aside>
              </section>
            </form>
          </aside>
        </section>
      </main>
    </>
  );
};

export default Login;
