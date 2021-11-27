import React from 'react'
import {
    Container,
    Wrap,
    ContainerAniversario,
    ImagemAniversario,
    TextoAniversario,
    Propaganda,
    Titulo,
    ListaAmigos,
} from './MenuDireitaElementos'

import AmigoOnline from '../amigo_online/AmigoOnline'

import {Usuarios} from '../../dados'

const MenuDireita = () => {
    return (
        <Container>
            <Wrap>
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

                <ListaAmigos>

                    {Usuarios.map((amigo) => (
                        <AmigoOnline
                            key={amigo.id}
                            amigo={amigo}
                        />
                    ))}

                </ListaAmigos>
            </Wrap>
        </Container>
    )
}

export default MenuDireita
