import styled from "styled-components";
import PropTypes from "prop-types";

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

const Section = ({ bg, title, children }) => (
  <Container bg={bg}>
    <Title>{title}</Title>
    <Desc>{children}</Desc>
  </Container>
);

Section.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
