import { Link } from "react-router-dom";
import "./styles-danonim.css";

const Anonima = () => {
  return (
    <main className="container-anom">
      <section className="container-filho-anom" >
        <article className="janela-anom">
          <h1 id="title">Faça sua Denuncia Anonimamente</h1>
          <aside className="input-info-anom">
            <input type="text" placeholder="insira o apelido (opcional)" />
            <input type="text" placeholder="insira o titulo" />
          </aside>
          <aside className="denuncia-anom">
            <textarea
              placeholder="insira a mensagem..."
              className="area-texto-anom"
            ></textarea>
          </aside>
        </article>
        <article className="enviar-agrupar-anonim">
          <button className="option-anonim" type="submit" onClick="/faq">Enviar</button>
        </article>
       
      </section>
    </main>
  );
};

export default Anonima;
