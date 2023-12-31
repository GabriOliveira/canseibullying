import "./styles-perfil.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";
import Faq from "../Faq";
import Fulano from "../../assets/images/fulano.png";
import { Link } from "react-router-dom";
const Perfil = () => {
  return (
    <main class="container-perfil">
      <article className="container-filho-perfil">
        <aside className="perfil-e-desc">
          <figure>
            <img className="photo" src={Fulano} alt="foto-perfil" />
          </figure>
          <h2>Fulano de Tal da Silva</h2>
          <p>
            Olá eu sou o Fulaninho e tenho 20 anos Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Accusantium assumenda temporibus
            optio culpa sapiente possimus dolore, nostrum similique delectus
            consectetur odit vitae doloribus fugiat illo natus. Facere harum
            fuga quos!
          </p>
          <aside className="emotions">
            <p className="txt-sent">Fulano de Tal da Silva está se sentindo:</p>
            <figure className="container-emotion">
              <div className="conteudo-emotion"></div>
            </figure>
          </aside>
        </aside>
      </article>
    </main>
  );
};

export default Perfil;
