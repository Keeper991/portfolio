import styled from "styled-components";
import bgImage from "Images/bg_intro.jpg";
import { COLORS } from "Components/Consts";

const Container = styled.div.attrs((props) => ({ id: props.id }))`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10%;
  color: ${COLORS.white};
  background-color: ${COLORS.black};
  z-index: -1;
  ::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImage});
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    opacity: 0.2;
    z-index: -2;
  }
`;

const Title = styled.div`
  font-family: "Anton", sans-serif;
  text-transform: uppercase;
  font-size: 6rem;
  ::first-letter {
    color: ${COLORS.accent};
  }
`;

const Desc = styled.p`
  font-weight: 200;
  font-size: 1.5rem;
  margin-top: 1em;
`;

const Intro = () => (
  <Container id="#">
    <Title>
      Se
      <br />
      hyeon
      <br />
      Park
    </Title>
    <Desc>Front-end Developer</Desc>
  </Container>
);

export default Intro;
