import { styled as materiaStyled, Tooltip as MaterialTooltip, tooltipClasses } from "@mui/material";
import styled, { css } from "styled-components";

export type BlockProps = {
    backgroundColor?: string;
}

export const ColorContainer = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const Block = styled.div<BlockProps>`
    height: 40px;
    border-radius: 6px;
    ${({ backgroundColor }) => css`
        background-color: ${backgroundColor ?? '#7B70EA'};
    `}
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`

export const Tooltip = materiaStyled(({ className, ...props }) => (
    <MaterialTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
    },
}));