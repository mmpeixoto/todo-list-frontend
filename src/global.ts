import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #f8f2f5;
        --red: #E52e4D;
        --red-opacity: #E52e4D80;
        --green: #33CC95;
        --green-opacity: #33CC9580;
        --blue: #5429CC;
        --light-blue: #6933FF;
        --text-title: #363f5f;
        --text: #969cb3;
        --shapes: #FFF;
        --text-light: #A09CB1;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button, .checkmark {
        cursor: pointer;
    }

    [disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }
`;
