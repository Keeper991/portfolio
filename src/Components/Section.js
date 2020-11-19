import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  background: ${(prop) => (prop.bg ? prop.bg : "inherit")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10em 0;
`;

const Title = styled.span`
  font-size: 3rem;
  border-bottom: solid #7f8c8d 2px;
  padding: 0.1em 0;
`;

const Desc = styled.div`
  width: 100%;
  margin-top: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
