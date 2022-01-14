import styled, { css } from 'styled-components';

type ContainerProps = {
    editing?: boolean;
}

export const Container = styled.li<ContainerProps>`
    list-style-type: none;
    background-color: #fafafa;

    width: 100%;
    padding: 0.9rem;
    margin: 20px 0;
    border-radius: 8px;

    /* ${({ editing }) => !editing && css`
        &:hover {
            transform: translateX(10px);
        }    
    `} */

    cursor: pointer;
`;