import styled from "styled-components";
import RoutePointer from "Components/RoutePointer";
import bgImage from "Images/bg_intro.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #95a5a6;
  color: white;
  padding: 0 5em;
  position: relative;
  z-index: 1;
  ::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImage});
    background-size: cover;
    opacity: 0.5;
    z-index: -1;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  text-shadow: 0.1em 0.1em 0.2em #2c3e50;
`;

const Desc = styled.p`
  margin-top: 1em;
  text-shadow: 0.1em 0.1em 0.2em #2c3e50;
`;

const Intro = () => (
  <Container>
    <RoutePointer id="#" />
    <Title>Sehyeon Park</Title>
    <Desc>Make a more various and funny world.</Desc>
  </Container>
);

export default Intro;
