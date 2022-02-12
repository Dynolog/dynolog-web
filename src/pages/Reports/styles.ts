import styled from "styled-components";
import { Block as FormBlock } from "../../components/project/Form/styles";

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
`;

export const Block = styled(FormBlock)`
    height: 15px;
    width: 15px;
    cursor: auto;
    border-radius: 4px;
`