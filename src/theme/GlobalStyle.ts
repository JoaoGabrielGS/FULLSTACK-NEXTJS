import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    // [NextJS Reset]
    html {
        display: flex;
        min-height: 100%;
        flex-direction: column;
    }
    body {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    #__next {
        width: 100%;
        overflow: hidden;
        display: flex;
        flex: 1;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        flex-shrink: 0;
    }
    // =================
    // [Dark Mode Styles]
    body.dark {
        color: #FFF;
        background-color: #111111;
    }
    // ==================
    // [Reset Styles]
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;