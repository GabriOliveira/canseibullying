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

          <article className="seguradora-denuncia">
          <h1 className="title-home">Selcione O Tipo de Denuncia:</h1>

                 <article class="agrupar-botoes-home">
                  <Link to="/anonima" class="botão-opções border border-light">
                    <p class="text-responsive">
                      Anônima
                      <img src={patoAnonimo} alt="Pato Anônimo" class="imagem-lado" />
                    </p>

                  </Link>
              

                  <Link to="/normal" class="botão-opções border border-light">
                    <p className="text-responsive">Aberta
                      <img src={patoNormal} alt="Pato Anônimo" class="imagem-lado" />
                      </p>

                  </Link>
                  <Link to="/normal" class="botão-opções border border-light">
                    <p className="text-responsive">Ver Denuncias
                      <img src={patoNormal} alt="Pato Anônimo" class="imagem-lado" />
                      </p>
                  </Link>
                  

                  </article>
                  {/* style={{backgroundColor : '#210b2c'}} */}

          </article>

        </section>
      </main>
    </>
  );
};

export default Home;
