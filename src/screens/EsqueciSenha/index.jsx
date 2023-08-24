import "./styles.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";
import Faq from "../Faq";
import { Link } from "react-router-dom";

const EsqueciSenha = () => {
  return (
    <>
      <div class="container-esqueci-senha">
        <div class="title-fale-es">
          
          <h1>Como Podemos Te Ajudar ?</h1>
        </div>
        <form action="" method="post">
          <div class="form-group-es">
            <label for="">Nome</label>
            <input type="text" name="nome" placeholder="Nome" />
          </div>
          <div class="form-group-double-es">
            <label for="">E-Mail</label>
            <input
              type="email"
              class="input-double-es"
              name="email"
              placeholder="E-Mail"
            />
            <label for="">RA </label>
            <input
              type="text"
              class="input-double-es"
              name="ra"
              placeholder="RA"
            />
          </div>
          <div class="form-group submit-group-es">
            <textarea
              name="mensagem"
              cols="20"
              rows="10"
              placeholder="Mensagem"
            ></textarea>
           
          </div>
          <div className="engloba-botão-es">
          <button className="icon-area" type="submit-es">
              <p>Enviar</p>
            </button>
            </div>
        </form>
        <div class="circle-container-es">
          <Link to="/faq" class="circle-es">? </Link>
          
        </div>
       
      </div>
    </>
  );
};

export default EsqueciSenha;
