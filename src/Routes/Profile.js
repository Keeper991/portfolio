import styled from "styled-components";
import Section from "Components/Section";
import avatar from "Images/avatar.jpg";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 0 5em;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 320px));
  grid-gap: 3em;
  justify-content: center;
`;

const Avatar = styled.img.attrs({
  src: avatar,
})`
  width: 100%;
  align-self: center;
`;

const Comment = styled.pre`
  font-size: 3rem;
  background-color: #ecf0f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.5em;
  font-style: italic;
`;

const Inform = styled.pre`
  background-color: #2c3e50;
  color: white;
  font-family: monospace;
  font-weight: 600;
  line-height: 2em;
  padding: 1.5em;
  :last-child {
    grid-column: 1 / -1;
  }
`;

const Curly = styled.span`
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
  <>
    <Section title="Profile" id="profile">
      <Container>
        <Grid>
          <Avatar />
          <Comment>
            <span>"</span>
            <div>Wanna Be</div>
            <div>a Full-Stack</div>
            <div>Developer</div>
            <span>"</span>
          </Comment>
          <Inform>
            <ConsoleLog>
              &gt; console.<Squre>log</Squre>
              <Parentheses>(</Parentheses>information
              <Parentheses>)</Parentheses>
            </ConsoleLog>
            <Curly>{`{`}</Curly>
            <br />
            <Key>{`  name:`}</Key> "박세현",
            <br />
            <Key>{`  birth:`}</Key> "1991-11-23",
            <br />
            <Key>{`  skills:`}</Key> <Squre>[</Squre>
            {`
    "HTML", "CSS",
    "JavaScript", "React",
    "MySQL", "MongoDB", ...`}
            <br />
            <Squre>{`  ]`}</Squre>
            <br />
            <Key>{`  company:`}</Key> "Fill this area",
            <br />
            <Curly>{`}`}</Curly>
          </Inform>
        </Grid>
      </Container>
    </Section>
  </>
);

export default Profile;
