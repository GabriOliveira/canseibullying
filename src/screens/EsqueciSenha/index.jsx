import "./styles.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";
import Faq from "../Faq";
import { Link } from "react-router-dom";
import iconmail from "../../assets/images/mail-icon.png";
const EsqueciSenha = () => {
  return (
    <main className="container-esqueci-senha">
      <h1>Preencha o campo</h1>
      <article className="filho-es">
        <img src={iconmail} style={{ width: "150px", height: "135px" }} />
        <aside className="campos">
          <input type="email" alt="email" placeholder="Email" />
          <button
            type="submit"
            className="btn btn-primary btn-lg border border-light"
          >
            Confirmar
          </button>
        </aside>
      </article>
    </main>
  );
};

export default EsqueciSenha;
