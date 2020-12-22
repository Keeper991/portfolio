import Section from "Components/Section";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
`;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  align-items: center;
  & > span {
    margin-left: 0.5em;
  }
`;

const IconWrapper = styled.div`
  font-size: 1.5em;
  width: 1em;
  padding: 1em 0;
  display: flex;
  justify-content: center;
`;

const Contact = () => (
  <>
    <Section title="Contact" id="contact">
      <Container>
        <List>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon icon={faMobileAlt} />
            </IconWrapper>
            <span>010 7479 2516</span>
          </Item>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconWrapper>
            <span>nesmile23@gmail.com</span>
          </Item>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon icon={faGithub} />
            </IconWrapper>
            <span>Keeper991</span>
          </Item>
        </List>
      </Container>
    </Section>
  </>
);

export default Contact;
