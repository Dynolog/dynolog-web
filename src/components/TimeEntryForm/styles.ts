import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2.5fr 3fr 0.5fr;
    gap: 5px;

    .buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

export const SaveButton = styled.button`
    /* border: none;
    border-radius: 8px;
    font-size: 27px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #d5d5d5;

    &:hover {
        background: ${shade(0.1, "#d5d5d5")};
    } */
`

export const Calendars = styled.div`
    display: flex;
    gap: 5px;
`;