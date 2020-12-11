import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
  className: "modal",
}))`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-top: 2em;
  background-color: rgba(44, 62, 80, 0.9);
  backdrop-filter: blur(5px);
  z-index: 999;
  justify-content: center;
  align-items: center;
  cursor: auto;
`;

const Content = styled.div`
  width: 100%;
  max-width: 800px;
  max-height: 100%;
  overflow: scroll;
  background-color: #fefefe;
  padding: 2em;
  margin: 3em auto;
  border-radius: 1em;
`;

const Modal = ({ children }) => {
  const handleClick = (event) => {
    event.stopPropagation();
    const {
      target,
      target: { classList },
    } = event;
    if (classList.contains("modal")) {
      target.style.display = "none";
      const body = document.getElementsByTagName("body")[0];
      body.style.overflow = "visible";
    }
  };
  return (
    <Container onClick={handleClick}>
      <Content>{children}</Content>
    </Container>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const activeModal = (parentId) => {
  return () => {
    const modal = document.querySelector(`#${parentId} .modal`);
    modal.style.display = "flex";
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";
  };
};
