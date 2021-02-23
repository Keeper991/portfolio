import styled from "styled-components";
import Section from "Components/Section";
// import avatar from "Images/avatar.jpg";
import {
  avatar,
  js,
  express,
  hooks,
  mongodb,
  react,
  sass,
  sc,
  ts,
  html,
  css,
  mysql,
  nodejs,
} from "Components/Images";
import { COLORS } from "Components/Consts";

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 320px));
  grid-gap: 3em;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.img.attrs({
  src: avatar,
})`
  border-radius: 50%;
  width: 70%;
`;

const Info = styled.div``;

const InfoNameKor = styled.h2`
  display: inline-block;
  font-size: 2rem;
  font-weight: 800;
  margin-right: 0.5em;
`;

const InfoNameEng = styled.span`
  font-weight: 200;
  letter-spacing: 0.1em;
`;

const InfoIntroduce = styled.p`
  margin-top: 1em;
`;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const SkillList = styled.ul`
  margin-bottom: 1em;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1em;
`;

const Skill = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 0.5em;
  }
  & > img {
    width: 2em;
    margin-right: 0.5em;
    border-radius: 0.2em;
    background-color: ${COLORS.white};
  }
`;

const Profile = () => (
  <>
    <Section title="Profile" id="profile">
      <Container>
        <ImgWrapper>
          <Avatar />
        </ImgWrapper>
        <Info>
          <InfoNameKor>박세현</InfoNameKor>
          <InfoNameEng>SeHyeon Park</InfoNameEng>
          <InfoIntroduce>
            프론트엔드 개발자 박세현입니다.
            <br />
            거시기하고 거시기합니다.
          </InfoIntroduce>
        </Info>
        <SkillWrapper>
          <SkillList>
            <SkillTitle>Familiar</SkillTitle>
            <Skill>
              <img src={html} alt="html logo" />
              HTML
            </Skill>
            <Skill>
              <img src={css} alt="css logo" />
              CSS
            </Skill>
            <Skill>
              <img src={js} alt="javascript logo" />
              Javascript
            </Skill>
            <Skill>
              <img src={react} alt="react logo" />
              React
            </Skill>
            <Skill>
              <img src={hooks} alt="react hooks logo" />
              React Hooks
            </Skill>
            <Skill>
              <img src={sc} alt="styled component logo" />
              Styled-Component
            </Skill>
            <Skill>
              <img src={mongodb} alt="mongodb logo" />
              MongoDB
            </Skill>
            <Skill>
              <img src={nodejs} alt="node JS logo" />
              Node.js
            </Skill>
          </SkillList>
          <SkillList>
            <SkillTitle>Tried</SkillTitle>
            <Skill>
              <img src={mysql} alt="my SQL logo" />
              MySQL
            </Skill>
            <Skill>
              <img src={express} alt="express logo" />
              Express
            </Skill>
            <Skill>
              <img src={sass} alt="sass logo" />
              Sass
            </Skill>
            <Skill>
              <img src={ts} alt="typescript logo" />
              TypeScript
            </Skill>
          </SkillList>
        </SkillWrapper>
      </Container>
    </Section>
  </>
);

export default Profile;
