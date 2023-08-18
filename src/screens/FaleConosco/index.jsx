import "./styles-faleConosco.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";
import Faq from "../Faq";
import { Link } from "react-router-dom";

const FaleConosco = () => {
  return (
    <main class="container-fale-conosco">
      <section className="container-filho-fc">
        <aside class="title-fale-conosco">
          
          <h1>Como Podemos Te Ajudar ?</h1>
        </aside>
        <form action="" method="post">
          <aside class="name-fc">
            <label for="">Nome</label>
            <input type="text" name="nome" placeholder="Nome" />
          </aside>
          <section class="mail-ra-spa">
            <label for="">E-Mail</label>
            <input
              type="email"
              class="input-double"
              name="email"
              placeholder="E-Mail"
            />
            <label for="">RA </label>
            <input
              type="text"
              class="input-double"
              name="ra"
              placeholder="RA"
            />
          </section>
          
          <section class="area-msg">
            <textarea
              name="mensagem"
              cols="20"
              rows="10"
              placeholder="Mensagem"
            ></textarea>
           
          </section>
          <aside className="engloba-botão">
          <button className="icon-area" type="submit">
              <p>Enviar</p>
            </button>
            </aside>
        </form>
    
      </section>
    </main>
  );
};

export default FaleConosco;
