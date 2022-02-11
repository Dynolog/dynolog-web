import styled from 'styled-components';

export const Container = styled.div``;

export const Card = styled.div`
    margin-top: 5px;

    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    
    background-color: #fafafa;
    border-radius: 8px;

    .timeContainer {
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
    }
    `

export const Description = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;    
`

export const Time = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Action = styled.div`
gap: 0.5rem;
    display: flex;
    justify-content: space-between;
`