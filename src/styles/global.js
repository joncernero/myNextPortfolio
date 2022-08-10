import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize};

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
  scroll-behavior: smooth;
  height: 100%;
  overflow-x: hidden;
}

body { 
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: linear-gradient(
      125deg,
      ${(props) => props.theme.colors.accent1},
      ${(props) => props.theme.colors.accent5},
      ${(props) => props.theme.colors.accent5},
      ${(props) => props.theme.colors.accent5},
      ${(props) => props.theme.colors.accent5},
      ${(props) => props.theme.colors.accent2}
    );
    background-size: contain; 
    background-repeat: no-repeat;
    background-position: center;
    cursor: default;
}


h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
}

a, a:link, a:visited, a:focus, a:hover, a:active, a:-webkit-any-link {
    text-decoration: none;
}

body a {
  text-decoration: none;
}

li {
    list-style: none;
}

@media screen and (min-width: 280px) and(max-width: 1080px) {
  body::-webkit-scrollbar {
    display: none;
  }
}

body {
  overflow-x: hidden;
}
body,
button {
  font-family: var(--font-family);
}


`;
export default GlobalStyles;
