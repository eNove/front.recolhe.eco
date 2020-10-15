import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import '../../styles/globalStyles.css'
import './styles.scss'

const Header: React.FC<{ className?: string }> = ({ className}) => {
  return (
    <>
      <header className={className}>
        <nav>
          <ul>
            <li>
              <img src={logo} width="85px" alt="Recolhe.eco" />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="/#cadastro-ponto-coleta">Para Pessoas</a>
            </li>
            <li>
              <a href="/#cadastro-coletor">Para Coletores</a>
            </li>
            <li>
              <a href="/#mapa">No Mapa</a>
            </li>
            <li>
              <a href="/#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
