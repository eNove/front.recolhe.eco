import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import bg1 from '../../assets/s1-bg-1.svg'
import bg2 from '../../assets/s1-bg-2.svg'
import banner from '../../assets/banner.svg'

import '../../styles/globalStyles.css'
import './styles.scss'

//import logo from '../../assets/logo.svg'

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <section className="banner">
          <img className="bg2" src={bg2} width="750" aria-hidden alt="" />
          <img src={banner} height="650px" alt="Facilitamos a coleta de recicláveis" />
          <h1>Facilitamos a <strong>coleta</strong> de recicláveis</h1>
          <strong>conectando pessoas</strong>
          <a href="#cadastro-ponto-coleta" className="button">Quero fazer parte</a>
          <img className="bg1" src={bg1} width="307" aria-hidden alt="" />
        </section>
        <section className="pessoas">
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home
