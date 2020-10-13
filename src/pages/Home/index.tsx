import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';

//import logo from '../../assets/logo.svg'

import { Container, Content, Main } from './styles';

const Home: React.FC = () => {
    const title = useContext(ThemeContext);

    return (
        <Container>
            <Content>
                <header>
                    <h1>Aqui vai o logo</h1>
                </header>

                <Main>
                    
                </Main>
            </Content>
        </Container>
    )
}

export default Home