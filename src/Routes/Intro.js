import styled from "styled-components";
// import Section from "../Components/Section";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: gray;
  color: white;
  padding: 0 5em;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const Desc = styled.p`
  margin-top: 1em;
`;

const Intro = () => (
  <Container>
    <Title>Sehyeon Park</Title>
    <Desc>Make a more various world.</Desc>
  </Container>
);

export default Intro;
