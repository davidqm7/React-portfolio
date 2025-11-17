import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg};
    line-height: 1.5;
  }
  main { padding-top: ${({ theme }) => theme.layout.headerHeight}; }
  h1,h2,h3,h4,h5,h6 { margin: 0 0 0.5rem; }
  p { margin: 0 0 1rem; }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  button {
    font-family: inherit;
  }
  section {
    padding: 80px 20px;
  }
`;

export default GlobalStyles;