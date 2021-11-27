import React from 'react'

import {
    Amigo,
    AmigoImagemContainer,
    AmigoImagem,
    Online,
    AmigoNome
} from './AmigoOnlineElementos'


const AmigoOnline = ({ amigo }) => {
    return (
        <Amigo>
            <AmigoImagemContainer>
                
                <AmigoImagem
                    src={amigo.imagem_perfil}
                />

                <Online></Online>
            </AmigoImagemContainer>
            
            <AmigoNome>{amigo.nome_usuario}</AmigoNome>
        </Amigo>
    )
}

export default AmigoOnline
