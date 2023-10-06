import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";

import patoNormal from "../../assets/images/pato-normal.svg";
import sirene from "../../assets/images/sirene.jpg";
import "./styles-login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <main class="container-login">
      <section className="alinhar">
        <article className="container-inputs">
          <figure>
            <img
              src={sirene}
              class="pato"
              alt="logo site"
              className="icon-site"
            />
          </figure>
          <form action="" method="post">
            <aside className="input-logar">
              {" "}
              <div class="buttons-login form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email</label>
              </div>
              <div class="buttons-login form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Senha</label>
              </div>
              <a href="/esquecisenha" className="link-color">
                Esqueceu a senha?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
              </a>
            </aside>

            <section className="botões-de-ação">
              <figure class="button-group-login ">
                <Link
                  to="/"
                  className="botão-cadastro btn btn-primary btn-lg w-100 p-3  "
                  style={{
                    backgroundColor: "#210b2c",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Entrar
                </Link>
                {/* <a href="/esquecisenha" className="botão-cadastro">
                      Esqueceu a senha?{" "}
                    </a> 
                    
                    
                    
                    */}
                {/* <Button
                  href="/esquecisenha"
                  className="botão-cadastro btn btn-primary btn-lg w-100 p-3  "
                  style={{
                    backgroundColor: "#210b2c",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  Esqueci a senha
                </Button> */}
                <Button
                  className="botão-cadastro btn btn-primary btn-lg w-100 p-3"
                  style={{
                    backgroundColor: "#210b2c",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                  onClick={handleShow}
                >
                  Cadastrar
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  size="lg "
                  aria-labelledby="contained-modal-title-vcenter "
                  centered
                >
                  <Modal.Header className="modal-header">
                    <Modal.Title>
                      <figure
                        style={{
                          display: "flex",
                          alignItems: "center",
                          textAlign: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={sirene}
                          class="pato"
                          alt="logo site"
                          className="icon-site"
                          style={{ width: "100px", height: "110px" }}
                        />
                      </figure>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modal-body ">
                    <div class="buttons-login form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email</label>
                    </div>
                    <div class="buttons-login form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Senha</label>
                    </div>
                    <div class="buttons-login form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">RA ou SIAPE</label>
                    </div>
                    <Button
                      variant="primary"
                      size="lg"
                      style={{
                        backgroundColor: "#210b2c",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Finalizar
                    </Button>{" "}
                  </Modal.Body>
                  {/* style={{
                    backgroundColor: "#210b2c",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }} */}
                </Modal>
              </figure>
              {/* {/* <figure class="circle-container-login ">
                

                  <figure class="circle-container">
                    

                    <Link to="/faq" class="circle-login ">
                      FAQ
                    </Link>
                    
                  </figure> 
              </figure>*/}
            </section>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Login;
