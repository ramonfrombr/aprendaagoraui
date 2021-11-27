import React from 'react'
import {
    Container,
    Wrap,
    Lista,
    Item,
    ListaAmigos,
    Botao,
    BarraHorizontal,
    Amigo,
    AmigoImagem,
    AmigoNome
} from './MenuEsquerdaElementos'

import ForumIcon from '@material-ui/icons/Forum';


import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TranslateIcon from '@mui/icons-material/Translate';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';


//import PsychologyIcon from '@material-ui/icons/Psychology';

import { Us, Br, Es, Fr, It, De, Cn, Jp } from 'react-flags-select';


const MenuEsquerda = () => {
    return (
        <Container>
            <Wrap>
                <Lista>
                    <Item><Us /> Inglês</Item>
                    <Item><Br /> Português</Item>
                    <Item><Fr /> Francês</Item>
                    <Item><It /> Italiano</Item>
                    <Item><De /> Alemão</Item>
                    <Item><Cn /> Chinês</Item>
                    <Item><Jp /> Japonês</Item>
                    
                    <Item><ForumIcon /> Bate-papo</Item>
                    <Item><DynamicFeedIcon /> Mural</Item>
                    <Item><PsychologyIcon /> Gramática</Item>
                    <Item><RecordVoiceOverIcon /> Pronúncia</Item>
                    <Item><TranslateIcon /> Dicionário</Item>
                    <Item><MenuBookIcon /> Livro de Frases</Item>
                </Lista>

                <Botao>Exibir Mais</Botao>

                <BarraHorizontal />

                <ListaAmigos>
                    <Amigo>
                        <AmigoImagem
                            src='/assets/pessoa/2.jpeg'
                        />
                        <AmigoNome>Jane Doe</AmigoNome>
                    </Amigo>

                    <Amigo>
                        <AmigoImagem
                            src='/assets/pessoa/2.jpeg'
                        />
                        <AmigoNome>Jane Doe</AmigoNome>
                    </Amigo>

                    <Amigo>
                        <AmigoImagem
                            src='/assets/pessoa/2.jpeg'
                        />
                        <AmigoNome>Jane Doe</AmigoNome>
                    </Amigo>

                    <Amigo>
                        <AmigoImagem
                            src='/assets/pessoa/2.jpeg'
                        />
                        <AmigoNome>Jane Doe</AmigoNome>
                    </Amigo>
                </ListaAmigos>
            </Wrap>
        </Container>
    )
}

export default MenuEsquerda
