import "./styles.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";
import Faq from "../Faq";
import { Link } from "react-router-dom";
import iconmail from "../../assets/images/iconmail.svg";
import { Button } from "react-bootstrap";
const EsqueciSenha = () => {
  return (
    <main className="container-esqueci-senha"> 
      <article className="filho-es">
        <img src={iconmail} style={{ width: "30%", backgroundColor : '#D5FFE6', borderRadius : '50%', padding : '10px', border :'black solid' , filter : 'invert(1)'}}  />
          <h4>Informe o Email o qual deseja redefinir a senha:</h4>
        <aside className="campos">
        <div class="buttons-eq form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email</label>
              </div>
              <Button
                  className="botão-cadastro btn btn-primary "
                  style={{
                    backgroundColor: "#210b2c",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Cadastrar
                </Button>
        </aside>
      </article>
    </main>
  );
};

export default EsqueciSenha;
