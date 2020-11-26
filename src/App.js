import GlobalStyle from "Components/GlobalStyles";
import Header from "Components/Header";
import Contact from "Routes/Contact";
import Intro from "Routes/Intro";
import Profile from "Routes/Profile";
import Projects from "Routes/Projects";
import styled from "styled-components";

const StyleDiv = styled.div.attrs({ classname: "App" })`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <StyleDiv>
      <GlobalStyle />
      <Header />
      <Intro />
      <Profile />
      <Projects />
      <Contact />
    </StyleDiv>
  );
}

export default App;
