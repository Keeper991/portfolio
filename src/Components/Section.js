import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(prop) => (prop.bg ? prop.bg : "inherit")};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div``;

const Desc = styled.div``;

const Section = ({ bg, title, desc }) => (
  <Container bg={bg}>
    <Title>{title}</Title>
    <Desc>{desc}</Desc>
  </Container>
);

export default Section;
