import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Quicksand";
        src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');
        font-weight: 300;
        font-display: swap;
    }
    html {
    --fullwidth: 100%;
    --pink: #ff80a6;
    --blue: #ff80a6;
    }
    * {
        margin: 0;
        font-family: "Quicksand";
        color: rgb(125, 125, 125);
    }
    .content {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: rgb(238, 237, 237);
    }
`;

export default GlobalStyles;
