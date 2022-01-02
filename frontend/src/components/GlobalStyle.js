import styled, { createGlobalStyle } from "styled-components";

const GlobalStyleWrapper = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    padding: 0;
    margin: 0;
  }

  body { 
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  position: relative;
  background-color: #e6e9ec;
  // @media (min-width: 375px) {
    
  // }
`;

const Body = styled.div`
  max-width: 375px;
  margin: 0 auto;
  background-color: #FFE6BC;
  min-height: 100vh;
  // @media (min-width: 375px) {
    
  // }
`;

function GlobalStyle({ children }) {
  return (
    <>
      <GlobalStyleWrapper />
      <Container>
        <Body>{children}</Body>
      </Container>
    </>
  );
}

export default GlobalStyle;