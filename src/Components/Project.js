import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2c3e50;
  color: white;
  position: relative;
  z-index: 9;
  overflow: hidden;
  display: flex;
  :hover .img {
    transform: translate(4em, 4em);
  }
`;

const Image = styled.div.attrs((props) => ({
  className: "img",
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f39c12;
  transition: transform 0.3s ease-in-out;
`;

const Title = styled.span`
  padding: 0.5em;
  font-size: 2rem;
`;

const Project = ({ title, img }) => (
  <Container img={img}>
    <Title>{title}</Title>
    <Image />
  </Container>
);

export default Project;
