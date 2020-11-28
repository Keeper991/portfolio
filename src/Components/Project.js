import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.img
      ? `background-image: url(${props.img}); background-size: cover;`
      : `background-color: #bdc3c7`};
  transition: all 0.3s linear;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2c3e50;
  color: white;
  position: relative;
  z-index: 9;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  :hover ${Image} {
    transform: scale(1.1, 1.1);
    filter: blur(5px);
    opacity: 0.6;
  }
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  padding: 0.5em;
  font-size: 2rem;
`;

const Project = ({ title, img }) => (
  <Container>
    <Title>{title}</Title>
    <Image img={img} />
  </Container>
);

Project.propTypes = {
  img: PropTypes.string,
};

export default Project;
