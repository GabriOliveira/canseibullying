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
          

          <div class="name-fc form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email</label>
              </div>

          <section class="mail-ra-spa">
          <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email</label>
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
