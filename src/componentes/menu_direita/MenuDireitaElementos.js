import styled from 'styled-components';


export const Container = styled.div`
    flex: 3.5;
`;


export const Wrap = styled.div`
    padding: 20px 20px 0 0;
`;


export const ContainerAniversario = styled.div`
    display: flex;
    align-items: center;
`;


export const ImagemAniversario = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`;


export const TextoAniversario = styled.div`
    font-weight: 300;
    font-size: 15px;
`;

export const Propaganda = styled.img`
    width: 100%;
    border-radius: 10px;
    margin: 30px 0;
`;

export const Titulo = styled.h4`
    margin-bottom: 20px;
`;



export const ListaAmigos = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

export const Amigo = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const AmigoImagemContainer = styled.div`
    margin-right: 10px;
    position: relative;
`;

export const AmigoImagem = styled.img`
    width: 40px;
    height: 40px;
    border-radius:50%;
    object-fit: cover;
`;  

export const Online = styled.span`
    width: 12px;
    height: 12px;
    border-radius:50%;
    background-color:limegreen;
    position: absolute;
    top: -2px;
    right: 0px;
    border: 2px solid white;
`;

export const AmigoNome = styled.span`
    font-weight: 500;
`;


