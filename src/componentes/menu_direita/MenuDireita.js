import React from 'react'
import {
    Container,
    Wrap,

    ContainerAniversario,
    ImagemAniversario,
    TextoAniversario,
    Propaganda,
    Titulo,
    ListaAmigosOnline,

    InfoContainer,
    InfoItem,
    InfoChave,
    InfoValor,

    ListaAmigos
} from './MenuDireitaElementos'

import AmigoOnline from '../amigo_online/AmigoOnline'

import Amigo from './Amigo';

import {Usuarios} from '../../dados'






const MenuDireita = ({ perfil }) => {

    const MenuDireitaInicio = () => {
        return (
            <>
                <ContainerAniversario>
                    <ImagemAniversario
                        src="/assets/presente.png"
                    />

                    <TextoAniversario>
                        <b>João Silva</b> e <b>outros 3 amigos</b> fazem aniversário hoje
                    </TextoAniversario>
                </ContainerAniversario>

                <Propaganda
                    src="/assets/propaganda.png"
                />

                <Titulo>Amigos Online</Titulo>

                <ListaAmigosOnline>

                    {Usuarios.map((amigo) => (
                        <AmigoOnline
                            key={amigo.id}
                            amigo={amigo}
                        />
                    ))}

                </ListaAmigosOnline>
            </>
        )
    }

    const MenuDireitaPerfil = () => {

        return (
            <>
                <Titulo>Informação do Usuário</Titulo>

                <InfoContainer>

                    <InfoItem>
                        <InfoChave>Cidade:</InfoChave>
                        <InfoValor>Rio de Janeiro</InfoValor>
                    </InfoItem>

                    <InfoItem>
                        <InfoChave>De:</InfoChave>
                        <InfoValor>Serra</InfoValor>
                    </InfoItem>

                    <InfoItem>
                        <InfoChave>Relacionamento:</InfoChave>
                        <InfoValor>Solteiro</InfoValor>
                    </InfoItem>
                </InfoContainer>


                <Titulo>Amigos</Titulo>

                <ListaAmigos>
                    <Amigo />
                    <Amigo />
                    <Amigo />
                    <Amigo />
                </ListaAmigos>
            </>
        )
    }

    return (
        <Container>
            <Wrap>
                {perfil ? <MenuDireitaPerfil /> : <MenuDireitaInicio />}
            </Wrap>
        </Container>
    )
}

export default MenuDireita
