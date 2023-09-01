import { Link } from "react-router-dom";
import "./styles-dnormal.css";


const Normal = () => {
  return (
    < main className="container-normal">
      <section className="container-filho-aberta" >
        <article className="janela-aberta">
          <h1 id="title-aberta">Faça sua Denuncia Anonimamente</h1>
          <aside className="input-info-aberta">
            <input type="text" placeholder="insira o apelido (opcional)" />
            <input type="text" placeholder="insira o titulo" />
          </aside>
          <aside className="denuncia-aberta">
            <textarea
              placeholder="insira a mensagem..."
              className="area-texto-aberta"
            ></textarea>
          </aside>
        </article>
        <article className="enviar-agrupar-aberta">
          <button className="option-aberta" type="submit" onClick="/faq">Enviar</button>
        </article>
    </section>
    </main>
  );
};

export default Normal;
