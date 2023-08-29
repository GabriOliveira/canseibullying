import "./styles.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";
import Faq from "../Faq";
import { Link } from "react-router-dom";

const EsqueciSenha = () => {
  return (
    <main className="container-esqueci-senha">
     
      <h1>Preencha os campos abaixo:</h1>
      <article className="filho-es">
      
        <aside className="campos">
          <input type="email" alt="email" placeholder="Email" />
          <input type="password" alt="senha" placeholder="Nova Senha" />
          <input type="password" alt="c-senha" placeholder="Confirmar Nova Senha" />
          <button type="submit">Confirmar</button>
        </aside>
      </article>
    </main>
  );
};

export default EsqueciSenha;
