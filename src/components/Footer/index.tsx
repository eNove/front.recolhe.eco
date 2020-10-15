import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import '../../styles/globalStyles.css'
import './styles.scss'

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <ul>
          <li>
            Atribuições:<br />
            ● Vetores criados por freepik - br.freepik.com <br />
          </li>
          <li>
            Conheça a api:<br />
            <a href="http://api.recolhe.eco/api/v1/api-docs/" target="_blank" rel="noopener noreferrer">http://api.recolhe.eco/api/v1/api-docs/</a>
          </li>
          <li>
            <a href="https://github.com/eNove/api.recolhe.eco" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
