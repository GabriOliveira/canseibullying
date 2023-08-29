import "./styles-feedback.css";


const Feedback = () => {
  return (
    <main class="container-feedback">
      <section className="container-filho-feedback">
        <article class="title-feedback">
          
          <h1>Como Podemos Te Ajudar ?</h1>
        </article>
        <form action="" method="post">
          <article class="form-group-feedback">
            <label for="">Nome</label>
            <input type="text" name="nome" placeholder="Nome" />
          </article>
          <aside class="form-group-double-feedback">
            <label for="">E-Mail</label>
            <input
              type="email"
              class="input-double-feedback"
              name="email"
              placeholder="E-Mail"
            />
            <label for="">RA </label>
            <input
              type="text"
              class="input-double-feedback"
              name="ra"
              placeholder="RA"
            />
          </aside>
          <aside class="form-group submit-group-feedback">
            <textarea
              name="mensagem"
              cols="20"
              rows="10"
              placeholder="Mensagem"
            ></textarea>
           
          </aside>
          <article className="engloba-botão-feedback">
          <button className="icon-area-feedback" type="submit">
              <p>Enviar</p>
            </button>
            </article>
        </form>
       
        
      </section>
    </main>
  );
};

export default Feedback;
