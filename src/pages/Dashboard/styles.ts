import styled, { css } from 'styled-components';

export type ProjectProps = {
    background?: string;
    color?: string;
};

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
    font-size: 15pt;
`

export const Action = styled.div`
    gap: 0.5rem;
    display: flex;
    justify-content: space-between;
`

export const Project = styled.span<ProjectProps>`
    ${({ background }) => background && css`
        background-color: ${background};
    `}
    ${({ color }) => color && css`
        color: ${color};
    `}

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    font-size: 8pt;
    padding: 5px 12px;
`