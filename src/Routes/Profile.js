import styled from "styled-components";
import RoutePointer from "Components/RoutePointer";
import Section from "Components/Section";
import avatar from "Images/avatar.jpg";

const Container = styled.div``;

const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2em;
`;

const Avatar = styled.img.attrs({
  src: avatar,
})`
  width: 100%;
  align-self: center;
`;

const Description = styled.pre`
  background-color: #2c3e50;
  color: white;
  font-family: monospace;
  font-weight: 600;
  line-height: 2em;
  padding: 2em;
`;

const Curly = styled.div`
  color: #9b59b6;
`;

const Parentheses = styled.span`
  color: #e74c3c;
`;

const Key = styled.span`
  color: #f1c40f;
`;

const Squre = styled.span`
  color: #3498db;
`;

const ConsoleLog = styled.div`
  border-bottom: 1px #7f8c8d solid;
  width: 100%;
  padding: 0.5em 0;
  margin-bottom: 0.5em;
`;

const Profile = () => (
  <Container>
    <RoutePointer id="profile" />
    <Section title="Profile">
      <InnerContainer>
        <Avatar />
        <Description>
          <ConsoleLog>
            &gt; console.<Squre>log</Squre>
            <Parentheses>(</Parentheses>Sehyeon_Park<Parentheses>)</Parentheses>
          </ConsoleLog>
          <Curly>{`{`}</Curly>
          <Key>{`   name:`}</Key> "박세현",
          <br />
          <Key>{`   birth:`}</Key> "1991-11-23",
          <br />
          <Key>{`   skills:`}</Key> <Squre>[</Squre>
          {`
      "HTML", "CSS",
      "JavaScript", "React",
      "MySQL", "MongoDB", ...`}
          <br />
          <Squre>{`   ]`}</Squre>
          <br />
          <Key>{`   company:`}</Key> "",
          <br />
          <Key>{`   goal:`}</Key> "Full-stack Developer",
          <Curly>{`}`}</Curly>
        </Description>
      </InnerContainer>
    </Section>
  </Container>
);

export default Profile;
