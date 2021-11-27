import React from 'react'
import {
    Container,
    Wrap
} from './MuralElementos'

import {Publicacoes} from '../../dados'


import Escrever from '../escrever/Escrever'
import Publicacao from '../publicacao_mural/Publicacao'


const Mural = () => {
    return (
        <Container>
            <Wrap>
                <Escrever />
                {Publicacoes.map( p => (
                    <Publicacao
                        key={p.id}
                        publicacao={p}
                    />
                ))}
            </Wrap>
        </Container>
    )
}

export default Mural
