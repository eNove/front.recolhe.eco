import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import bg1 from '../../assets/s1-bg-1.svg'
import bg2 from '../../assets/s1-bg-2.svg'
import bg3 from '../../assets/s1-bg-3.svg'
import banner from '../../assets/banner.svg'
import pessoas from '../../assets/pessoas.png'
import coletores from '../../assets/coletores.svg'
import mapa from '../../assets/mapa.svg'

import '../../styles/globalStyles.css'
import './styles.scss'

var mainStyle = {
  backgroundImage: `url(${bg2})`
}

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <main style={mainStyle}>
        <img className="bg1" src={bg1} width="250" aria-hidden alt="" />
        <img className="bg3" src={bg3} width="300" aria-hidden alt="" />
        <section className="banner">
          <img src={banner} height="650px" alt="Facilitamos a coleta de recicláveis" />
          <h1>Facilitamos a <strong>coleta</strong> de recicláveis</h1>
          <strong>conectando pessoas</strong>
          <a href="#cadastro-ponto-coleta" className="button">Quero fazer parte</a>
        </section>
        <section id="cadastro-ponto-coleta" className="pessoas">
          <img src={pessoas} height="400px" alt="para pessoas" />
          <h2>Para Pessoas</h2>
          <p>
            Por ano cada pessoa gera pelo menos 380 kilos de lixo,
            segundo a Abrelpe, e mesmo com o aumento da cobertura
            da coleta ainda deixamos 6,3 milhões de toneladas abandonadas no 
            meio ambiente. Você pode fazer a sua parte separando o lixo de forma 
            adequada e regitrando sua residência, condomínio ou empresa.
          </p>
          <Link to="/cadastro-ponto-coleta" className="button">Quero fazer parte</Link>
        </section>
        <section id="cadastro-coletor" className="coletores">
          <img src={coletores} height="300px" alt="para coletores" />
          <h2>Para Coletores</h2>
          <p>
          O “reconhecimento do resíduo sólido reutilizável e reciclável 
          como um bem econômico e de valor social, gerador de 
          trabalho e renda e promotor de cidadania” é um dos 
          princípios da Política Nacional de Resíduos Sólidos (PNRS).
          O coletor é peça fundamental, se registre como coletor, 
          associação, cooperativa ou ONGs.
          </p>
          <Link to="/cadastro-coletor" className="button">Quero fazer parte</Link>
        </section>
        <section id="mapa" className="mapa">
          <h2>No Mapa</h2>
          <img src={mapa} height="300px" alt="no mapa" />
          <p>
            ● Conheça os pontos de coleta da sua cidade <br />
            ● Registre sua casa, condomínio ou empresa como um ponto <br />
            ● Veja os coletores registrados e agende uma coleta <br />
            ● Aprenda mais sobre a cadeia de reciclagem na sua região <br />
          </p>
          <Link to="/mapa" className="button">Acessar agora</Link>
        </section>
        <section id="contato" className="contato">
          <h2>Contato</h2>
          <p>
          Como uma Social Tech, facilitar o encontro entre 
          coletores, ONGs e associações com pessoas 
          físicas, condomínios e empresa é a nossa
          principal missão. <br />
          Se você ficou com dúvidas, tem alguma sugestão
          ou gostaria de colaborar de alguma forma
          entre em contato conosco!
          </p>
          <form action="https://eco.us2.list-manage.com/subscribe/post?u=cb1b47ee635770f7dfd54d02a&amp;id=2a46bf00e3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <label htmlFor="mce-FNAME">Nome</label>
            <input type="text" name="FNAME" id="mce-FNAME" aria-required="true" className="required" />
            <label htmlFor="mce-EMAIL">E-mail</label>
            <input type="email" name="EMAIL" id="mce-EMAIL" aria-required="true" className="required email" />
            <label htmlFor="mce-MESSAGE">Mensagem</label>
            <textarea name="MESSAGE" id="mce-MESSAGE" rows={5} className="required"></textarea>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response"></div>
              <div className="response" id="mce-success-response"></div>
            </div>    
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div className="hidden" aria-hidden="true">
              <input type="text" name="b_cb1b47ee635770f7dfd54d02a_2a46bf00e3" tabIndex={-1} defaultValue="" />
              <input type="text" name="ORIGEM" tabIndex={-1} defaultValue="CONTATO" />
            </div>
            <input type="submit" value="Enviar" name="subscribe" id="mc-embedded-subscribe" className="button"></input>
          </form>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
