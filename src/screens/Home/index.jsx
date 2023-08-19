import "./styles-home.css";

import patoAnonimo from "../../assets/images/pato-anonimo.svg";
import iconePessoa from "../../assets/images/icone-pessoa.svg";
import patoNormal from "../../assets/images/pato-normal.svg";

import Footer from "../../components/Footer/index";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="container-home">

        <section className="tipo-de-denuncia">

          <section className="seguradora-denuncia">
          <h1 className="title-home">Selcione O Tipo de Denuncia:</h1>

                 
                  <Link to="/anonima" class="botão-opções">
                    <p class="text-responsive text-esquerda">
                      Anônima
                      <img src={patoAnonimo} alt="Pato Anônimo" class="imagem-lado" />
                    </p>

                  </Link>
              

                  <Link to="/normal" class="botão-opções">
                    <p className="text-responsive text-direita">Aberta
                      <img src={patoNormal} alt="Pato Anônimo" class="imagem-lado" />
                      </p>
                  </Link>
                 
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
