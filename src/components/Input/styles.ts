import styled from "styled-components";

export const BaseInput = styled.input`
    background: #fafafc;
    font-weight: 500;

    height: 46px;

    box-sizing: border-box;
    padding: 3px 3px 3px 13px;

    border: 1px solid #e6e6f0;
    border-radius: 5px;

    &::placeholder {
      font-weight: 500;
      text-align: center;
      color: #b8b9bf;
      text-transform: uppercase;
    }
`;