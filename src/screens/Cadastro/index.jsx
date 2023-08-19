import "./styles-cadastro.css";

import patoAnonima from "../../assets/images/pato-anonimo.svg";
import sirene from "../../assets/images/sirene.jpg";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
   <main class="container-cadastro">
        <section className="alinhar-cad">
          <figure>
            <img
              src={sirene}
              class="foto-sirene"
              alt="logo site"
            />
          </figure>
          <aside className="container-inputs-cad">
            <form action="" method="post">
              <aside class="buttons-login-cad">
                <label for=""></label>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input-logar-cad"
                />
              </aside>
              <aside class="buttons-login-cad">
                <label for=""></label>
                <input
                  type="password"
                  placeholder="Senha"
                  className="input-logar-cad"
                />
                 </aside>
                 <aside class="buttons-login-cad">
                <label for=""></label>
                <input
                  type="number"
                  placeholder="RA ou SIAPE"
                  className="input-logar-cad"
                />

                 </aside>
                <aside className="abaixo-input-cad">
                  <a href="/esquecisenha" className="texto-abaixo-cad">
                    Esqueceu a senha?{" "}
                  </a>

               
              </aside>
              <section className="botões-de-ação-cad">
                <aside class="buttons-login-cad">
                  <figure class="button-group-login-cad">
                    <Link to="/entrar" className="botão-cadastro-cad">
                      Finalizar
                    </Link>
                  </figure>
                  
                </aside>
              </section>
            </form>
          </aside>
        </section>
      </main>
  );
};

export default Cadastro;
