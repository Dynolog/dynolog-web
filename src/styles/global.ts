import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
      --red: #E52E4D;
      --green: #33CC95;
      --blue: #5429CC;
      --blue-light: #6933FF;
      --text-title: #363F5F;
      --text-body: #969CB3;
      --background: #F0F2F5;
      --shape: #FFFFFF;
      font-size: 16px;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       outline: none;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a {
        text-decoration: none;
    }

    .react-datetime-picker__wrapper, .react-time-picker__wrapper {
        background: #fafafc;
        font-weight: 500;

        height: 46px;

        box-sizing: border-box;
        padding: 3px 3px 3px 13px;

        border: 1px solid #e6e6f0 !important;
        border-radius: 5px;
    }
`;