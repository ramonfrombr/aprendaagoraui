import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 170px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;

export const Wrap = styled.div`
    padding: 10px;
`;

export const Cabecalho = styled.div`
    display: flex;
    align-items: center;
`;

export const Imagem = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

export const Input = styled.input`

    border: none;
    width: 80%;

    &:focus {
        outline: none;
    }
`;

export const Rodape = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BarraHorizontal = styled.hr`
    margin: 20px;
`;

export const Opcoes = styled.div`
    display: flex;
    margin-left: 20px;
`;

export const Opcao = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    
    & > svg {
        font-size: 18px;
        margin-right: 3px;
    }
`;

export const OpcaoTexto = styled.div`
    font-size: 14px;
    font-weight: 500;
`;

export const BotaoCompartilhar = styled.button`
    border: none;
    padding: 7px;
    border-radius: 5px;
    background-color:green;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    color: white;
`;

/*

export const Container = styled.div``;

export const Container = styled.div``;

export const Container = styled.div``;
*/
