import "./styles-faleConosco.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";
import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";
import Faq from "../Faq";
import { Link } from "react-router-dom";
import sirene from "../../assets/images/sirene.jpg";

const FaleConosco = () => {
  return (
    <main class="container-fale-conosco">
      <section className="container-filho-fc">
      <figure
                       
                       >
                         <img
                           src={sirene}
                           class="pato"
                           alt="logo site"
                           className="icon-site"
                           style={{ width: "100px", height: "110px" }}
                         />
                       </figure>
        <article class="title-fale-conosco">
          
          <h1>Como Podemos Te Ajudar ?</h1>
        </article>
        <form action="" method="post">
          

          <div class="name-fc mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Email"
                />
                <label for="floatingInput">Email</label>
              </div>
              <div class="name-fc mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="RA ou SIAPE"
                />
                <label for="floatingInput">RA ou SIAPE</label>
              </div>

          
          
          <section class="msg">
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
