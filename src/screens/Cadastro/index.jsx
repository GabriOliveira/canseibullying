import "./styles-cadastro.css";

import patoAnonima from "../../assets/images/pato-anonimo.svg";
import sirene from "../../assets/images/sirene.jpg";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <main className="container-pai">
<section className="organizar-cadastro">
       <aside class="container-cadastro">
        <form action="" method="post">
          <aside className="form-group-cadastro">
            <label for=""></label>
            <input type="email" placeholder="E-mail" />
         
            <label for=""></label>
            <input type="password" placeholder="Senha" />
      
          
            <label for=""></label>
            <input type="text" placeholder="RA ou SIAPE" />
            <p>
              <a href="/entrar">Já é cadastrado?</a>
            </p>
            </aside>
           
          <aside class="form-group-cadastro">
            <button type="submit" class="button-group">
              {" "}
              Finalizar
            </button>
          </aside>
        </form>
       
      </aside>
      </section>
    </main>
  );
};

export default Cadastro;
