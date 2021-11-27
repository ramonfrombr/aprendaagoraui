import React from 'react'

import {
    Container,
    Wrap,
    Cabecalho,
    Imagem,
    Input,
    BarraHorizontal,
    Rodape,
    Opcoes,
    Opcao,
    OpcaoTexto,
    BotaoCompartilhar

} from './EscreverComponentes'

import PermMediaIcon from '@mui/icons-material/PermMedia';

import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

import LabelIcon from '@mui/icons-material/Label';

const Escrever = () => {
    return (
        <Container>
            <Wrap>
                <Cabecalho>
                    
                    <Imagem
                        src="/assets/pessoa/4.jpeg"
                    />
                    <Input
                        placeholder="Faça uma pergunta."
                    />
                </Cabecalho>
            
                <BarraHorizontal />

                <Rodape>
                    <Opcoes>
                        <Opcao>
                            <PermMediaIcon htmlColor="tomato" />
                            <OpcaoTexto>Foto ou Vídeo</OpcaoTexto>
                        </Opcao>

                        <Opcao>
                            <LabelIcon htmlColor="blue" />
                            <OpcaoTexto>Tag</OpcaoTexto>
                        </Opcao>

                        <Opcao>
                            <EmojiEmotionsIcon htmlColor="goldenrod" />
                            <OpcaoTexto>Sentimento</OpcaoTexto>
                        </Opcao>

                    </Opcoes>
                    
                    <BotaoCompartilhar>Compartilhar</BotaoCompartilhar>
                </Rodape>
            </Wrap>
        </Container>
    )
}

export default Escrever
