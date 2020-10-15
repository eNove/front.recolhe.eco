import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import CadastroColetor from '../pages/CadastroColetor'
import CadastroPontoColeta from '../pages/CadastroPontoColeta'
import Mapa from '../pages/Mapa'

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/cadastro-coletor" component={CadastroColetor} />
    <Route path="/cadastro-ponto-coleta" component={CadastroPontoColeta} />
    <Route path="/mapa" component={Mapa} />
  </Switch>
)

export default Routes
