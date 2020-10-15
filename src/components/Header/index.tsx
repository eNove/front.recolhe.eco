import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/no-image.png'

import '../../styles/globalStyles.css'
import './styles.css'

const Header: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <img src={logo} width="100px" alt="Recolhe.eco" />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cadastro-coletor">Cadastro do Coletor</Link>
            </li>
            <li>
              <Link to="/cadastro-orgao">Cadastro do Ponto de Coleta</Link>
            </li>
            <li>
              <Link to="/mapa">Mapa</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
