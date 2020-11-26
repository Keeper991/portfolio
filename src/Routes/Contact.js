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
`;

const IconWrapper = styled.div`
  width: 3em;
  padding: 1em;
  display: flex;
  justify-content: center;
  font-size: 1.5em;
`;

const Contact = () => (
  <>
    <Section title="Contact">
      <Container>
        <List>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon icon={faMobileAlt} />
            </IconWrapper>
            010 7479 2516
          </Item>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconWrapper>
            nesmile23@gmail.com
          </Item>
          <Item>
            <IconWrapper>
              <FontAwesomeIcon icon={faGithub} />
            </IconWrapper>
            Keeper991
          </Item>
        </List>
      </Container>
    </Section>
  </>
);

export default Contact;
