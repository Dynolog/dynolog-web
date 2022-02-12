import styled, { css } from 'styled-components';

export type ProjectProps = {
    background?: string;
    color?: string;
};

export const Container = styled.div``;

export const Card = styled.div`
    margin-top: 10px;

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

    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
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

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`