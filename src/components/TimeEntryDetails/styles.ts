import styled, { css } from 'styled-components';

type ContainerProps = {
    editing?: boolean;
}

export const Container = styled.div<ContainerProps>`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        vertical-align: middle;        
    }
`;

export const TotalHours = styled.span`
    font-size: large;
    font-weight: 600;
`