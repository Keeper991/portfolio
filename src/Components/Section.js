import styled from "styled-components";
import PropTypes from "prop-types";
import { COLORS } from "Components/Consts";

const Container = styled.div.attrs((props) => ({
  id: props.id,
}))`
  width: 100%;
  background: ${(prop) => (prop.bg ? prop.bg : COLORS.black)};
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10em 0;
  color: ${COLORS.white};
`;

const Title = styled.span`
  font-family: "Anton", sans-serif;
  ::first-letter {
    color: ${COLORS.accent};
  }
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

const Section = ({ id, bg, title, children }) => (
  <Container id={id} bg={bg}>
    <Title>{title}</Title>
    <Desc>{children}</Desc>
  </Container>
);

Section.propTypes = {
  id: PropTypes.string,
  bg: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
