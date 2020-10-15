import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import bg2 from '../../assets/s1-bg-2.svg'
import bg3 from '../../assets/s1-bg-3.svg'

import '../../styles/globalStyles.css'
import './styles.scss'

const CadastroPontoColeta: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <img 
          className="bg2-coletor" 
          src={bg2} 
          aria-hidden 
          alt="" 
        />
        <img
          className="bg3-ponto-coleta"
          src={bg3}
          width="370"
          aria-hidden
          alt=""
        />
        <section id="ponto-coleta" className="ponto-coleta">
          <div className="title">
            <h1>
              Cadastre seu <strong>PONTO DE COLETA</strong> e mantenha-se
            </h1>
            <strong>em contato com a comunidade</strong>
          </div>
          <div className="form-ponto-coleta">
            <form
              action="https://eco.us2.list-manage.com/subscribe/post?u=cb1b47ee635770f7dfd54d02a&amp;id=2a46bf00e3"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <label htmlFor="mce-FNAME">Nome</label>
              <input
                type="text"
                name="FNAME"
                id="mce-FNAME"
                aria-required="true"
                className="required"
              />

              <label htmlFor="mce-EMAIL">E-mail</label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                aria-required="true"
                className="required email"
              />

              <label htmlFor="mce-PHONE">Telefone</label>
              <input
                type="text"
                name="PHONE"
                id="mce-PHONE"
                aria-required="true"
                className="required"
              />

              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="b_cb1b47ee635770f7dfd54d02a_2a46bf00e3"
                  tabIndex={-1}
                  defaultValue=""
                />
                <input
                  type="text"
                  name="ORIGEM"
                  tabIndex={-1}
                  defaultValue="CADASTRO_PONTO_COLETA"
                />
              </div>
              <input
                type="submit"
                value="Enviar"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              ></input>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CadastroPontoColeta
