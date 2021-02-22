import styled from "styled-components";
import PropTypes from "prop-types";
import Modal, { activeModal } from "./Modal";

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

const Container = styled.div.attrs((props) => ({
  id: props.id,
}))`
  width: 100%;
  height: 100%;
  background-color: #2c3e50;
  position: relative;
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
  color: white;
  padding: 0.5em;
  font-size: 2rem;
`;

const ModalHeader = styled.div`
  border-bottom: 0.1em solid #34495e;
  line-height: 1.5em;
  padding-bottom: 0.2em;
`;

const ModalTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5em;
`;

const Block = styled.div`
  display: inline-block;
  background-color: #ecf0f1;
  border: #bdc3c7 solid 1px;
  border-radius: 5px;
  color: #34495e;
  padding: 0 0.5em;
  font-size: 0.8rem;
  margin-right: 0.2em;
  line-height: 1rem;
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;

const ModalMain = styled.main`
  padding: 1em 0;
`;

const ModalMainTitle = styled.div`
  color: #34495e;
  opacity: 0.5;
  font-size: 1.5rem;
  margin-bottom: 0.5em;
  &:not(:first-child) {
    margin-top: 1em;
  }
`;

const ModalMainDesc = styled.div`
  line-height: 1.5em;
`;

const StyleUl = styled.ul`
  list-style-type: circle;
  margin-left: 1.5em;
`;

const StyleLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.2em;
  }
`;

const Project = ({ id, title, img, modalContents }) => {
  const {
    name,
    githubURL,
    siteURL,
    usedTech,
    description,
    purpose,
    experience,
  } = modalContents;
  return (
    <Container id={id} onClick={activeModal(id)}>
      <Title>{title}</Title>
      <Image img={img} />
      <Modal>
        <ModalHeader>
          <ModalTitle>{name}</ModalTitle>
          {siteURL ? <Block>{siteURL}</Block> : null}
          {githubURL ? (
            <Block>
              <a href={githubURL} target="_blank" rel="noreferrer">
                {githubURL}
              </a>
            </Block>
          ) : null}
        </ModalHeader>
        <ModalMain>
          <ModalMainTitle>Description</ModalMainTitle>
          <ModalMainDesc>{description}</ModalMainDesc>
          <ModalMainTitle>Used Skills</ModalMainTitle>
          <ModalMainDesc>
            {usedTech.map((tech) => (
              <Block key={tech}>{tech}</Block>
            ))}
          </ModalMainDesc>
          <ModalMainTitle>Purpose</ModalMainTitle>
          <ModalMainDesc>{purpose}</ModalMainDesc>
          <ModalMainTitle>Experience</ModalMainTitle>
          <ModalMainDesc>
            <StyleUl>
              {experience.map((exp, i) => (
                <StyleLi key={i}>{exp}</StyleLi>
              ))}
            </StyleUl>
          </ModalMainDesc>
        </ModalMain>
      </Modal>
    </Container>
  );
};

Project.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  modalContents: PropTypes.object,
};

export default Project;
