import "./styles.css";
import setaDireita from "../../assets/images/seta-direita-submit.svg";

const Painel = () => {
  return (
    <main className="container-painel">
      <section className="box">
        

        <section className="box-do-painel">
        <h1 className="title-painel">Painel de Denúncias</h1>
            <h4 className="title-box">Titulo</h4>
          
          <aside className="caixa-texto">
          <figure className="seta-esquerda">
        <img alt="seta esquerda" src={setaDireita}  />
        </figure>
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
            <figure className="seta-painel">
            <img alt="seta direita" src={setaDireita}  />
        </figure>
          </aside>
        </section>
      </section>
    </main>
  );
};

export default Painel;
