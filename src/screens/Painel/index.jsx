import "./styles.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";

const Painel = () => {
  return (
    <main className="container-painel">
      <section className="box">
        

        <section className="box-do-painel">
        <h1 className="title-painel">Painel de Denúncias</h1>
            <h4 className="title-box">Titulo</h4>
          
          <article className="caixa-texto">
          <aside className="espaço-seta">
          <figure className="alinhar-seta">
        <img alt="seta esquerda" className="seta" src={setaDireita}  />
        </figure>
        </aside>
            <textarea disabled className="textarea-painel">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              maxime, Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Magnam maxime, Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Magnam maxime, Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Magnam maxime, Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Magnam maxime, Lorem ipsum dolor
              sit amet consectetur, adipisiLorem ipsum dolor sit amet
              consectetur, adipisicing elit. Magnam maxime, Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Magnam maxime, Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Magnam maxime, Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Magnam maxime,
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              maxime, Lorem ipsum dolor sit amet consectetur, adipisiLorem ipsum
              dolor sit amet consectetur, adipisicing elit. Magnam maxime, Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Magnam maxime,
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              maxime, Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Magnam maxime, Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Magnam maxime, Lorem ipsum dolor sit amet consectetur,
              adipisiLorem ipsum dolor sit amet consectetur, adipisicing elit.
              Magnam maxime, Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Magnam maxime, Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Magnam maxime, Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Magnam maxime, Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Magnam maxime, Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Magnam maxime, Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Magnam maxime,
            </textarea>
            <aside className="espaço-seta">
            <figure className="alinhar-seta" >
            <img alt="seta direita" className="seta-aocontrario" src={setaDireita}  />
        </figure>
        </aside>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Painel;
