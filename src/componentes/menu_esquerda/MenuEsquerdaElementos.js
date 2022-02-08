import styled from 'styled-components';

export const Container = styled.div`
    flex: 3;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    position: sticky;
    top: 50px;

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgb(179, 179, 179);
    }
`;



export const Wrap = styled.div`
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const Lista = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: #fdfdfd;
    }

    & > svg {
        margin-right: 10px;
        font-size: 20px;
    }
`;

export const Botao = styled.button`
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
`;

export const BarraHorizontal = styled.hr`
    margin: 20px 0;
`

export const ListaAmigos = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const Amigo = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const AmigoImagem = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`;

export const AmigoNome = styled.span``;