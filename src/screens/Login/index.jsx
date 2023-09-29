import iconePessoaBarraNavegacao from "../../assets/images/icone-pessoa-barra-navegacao.svg";
import iconePessoaSorrindo from "../../assets/images/icone-pessoa-sorrindo-navegacao.svg";
import iconeCartaNavegacao from "../../assets/images/icone-carta-navegacao.svg";

import patoNormal from "../../assets/images/pato-normal.svg";
import sirene from "../../assets/images/sirene.jpg";
import "./styles-login.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

      <main class="container-login">

        <section className="alinhar">
        <figure>
            <img
              src={sirene}
              class="pato"
              alt="logo site"
              className="icon-site"
            />
          </figure>
          <article className="container-inputs">
            
            <form action="" method="post">
              <article class="buttons-login">
                <label for=""></label>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input-logar"
                />
              </article >
              <article class="buttons-login">
                <label for=""></label>
                <input
                  type="password"
                  placeholder="Senha"
                  className="input-logar"
                />

              </article >
              <article class="buttons-login">
                <label for=""></label>
                <input
                  type="text"
                  placeholder="RA ou SIAPE"
                  className="input-logar"
                />
                
              </article >
              <section className="botões-de-ação">
                <article class="buttons-login d-flex align-items-center d-grid gap-2 w-100  p-5 ">
                  <figure class="button-group-login flex-column mb-3   ">
                    <Link to="/" className="botão-cadastro btn btn-primary btn-lg w-100 p-3 border border-light " style={{ backgroundColor: '#210b2c', fontSize: '1.5rem', fontWeight: 'bold' }}>
                      Entrar
                    </Link>
                    {/* <a href="/esquecisenha" className="botão-cadastro">
                      Esqueceu a senha?{" "}
                    </a> 
                    
                    
                    
                    */}
                  <Button href="/esquecisenha" className="botão-cadastro btn btn-primary btn-lg w-100 p-3 border border-light " style={{ backgroundColor: '#210b2c', fontSize: '1.5rem', fontWeight: 'bold' }} >
                      Esqueci a senha
                    </Button>
                    <Button className="botão-cadastro btn btn-primary btn-lg w-100 p-3 border border-light " style={{ backgroundColor: '#210b2c', fontSize: '1.5rem', fontWeight: 'bold' }} onClick={handleShow}>
                      Cadastrar
                    </Button>
                    
                    
                    <Modal show={show} onHide={handleClose}
                      size="lg "
                      aria-labelledby="contained-modal-title-vcenter "
                      centered
                    >
                      <Modal.Header className="modal-header" >
                        <Modal.Title>Cadastro</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="modal-body "  >
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Email "
                          className="mb-3"
                          style={{ backgroundColor: 'transparent', color: 'white' }}
                        >
                          <Form.Control type="email" placeholder="name@example.com" style={{ backgroundColor: 'transparent', color: 'white' }} />
                        </FloatingLabel>
                        
                        
                        <FloatingLabel controlId="floatingPassword" label="Senha" className="mb-3" style={{ backgroundColor: 'transparent', color: 'white' }}>
                          <Form.Control type="password" placeholder="Password" style={{ backgroundColor: 'transparent', color: 'white' }} />
                        </FloatingLabel>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="RA ou SIAPE "
                          className="mb-3"
                          style={{ backgroundColor: 'transparent', color: 'white' }}
                        >
                          <Form.Control type="email" placeholder="name@example.com" style={{ backgroundColor: 'transparent', color: 'white' }} />
                        </FloatingLabel>

                      </Modal.Body>
                      <button className="botão-cadastrobtn btn-primary btn-lg w-100 p-3 border border-light  " style={{ backgroundColor: '#210b2c', fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>Finalizar</button>
                    </Modal>
                  </figure>
                </article >
                <figure class="circle-container-login ">
                  <Link to="/faq" class="circle-login btn-lg fs-1 text-center">
                    ?
                  </Link>
                  
                </figure>
                

              </section>
            </form>
          </article >
        </section>
      </main>
  );
};

export default Login;
