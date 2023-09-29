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
        <article class="title-fale-conosco">
          
          <h1>Como Podemos Te Ajudar ?</h1>
        </article>
        <form action="" method="post">
          <article class="name-fc">
            <label for="">Nome</label>
            <input type="text" name="nome" placeholder="Nome" />
          </article>
          <section class="mail-ra-spa">
            <label for="">E-Mail</label>
            <input
              type="email"
              class="input-double-fc"
              name="email"
              placeholder="E-Mail"
            />
            <label for="">RA </label>
            <input
              type="text"
              class="input-double-fc"
              name="ra"
              placeholder="RA"
            />
          </section>
          
          <section class="area-msg">
            <textarea
              name="mensagem"
              cols="20"
              rows="10"
              placeholder="Escreva sua mensagem..."
            ></textarea>
            
           
          </section>
          
        </form>
        <article className="engloba-botão">
          
            <button type="button" class=" button-fc btn btn-primary btn-lg w-100 p-3 border border-light " style={{backgroundColor : '#210b2c', fontSize : '1.5rem', fontWeight : 'bold' }}>Enviar</button>
            </article>
      </section>
    </main>
  );
};

export default FaleConosco;
