import React from 'react'

import styled from 'styled-components';

import Navbar from '../../componentes/navbar/Navbar';

import MenuDireita from '../../componentes/menu_direita/MenuDireita';

import Mural from '../../componentes/mural/Mural'

import MenuEsquerda from '../../componentes/menu_esquerda/MenuEsquerda';

const Inicio = () => {
    return (
        <>
            <Navbar />

            <InicioContainer>
                <MenuEsquerda />
                <Mural />
                <MenuDireita />
            </InicioContainer>
        </>
    )
}

export default Inicio


const InicioContainer = styled.div`
    display: flex;
`;