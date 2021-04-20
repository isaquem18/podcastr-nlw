import styled from 'styled-components';

export const Square = styled.div`
    width: 400px;
    height: 400px;
    border: 2px solid #000;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

`;

export const MiniSquareStyle = styled.div`
    border: 1px solid #00000080; 
    background-color: ${(props) => `${props.color}`};
`;