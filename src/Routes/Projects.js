import Section from "Components/Section";
import styled from "styled-components";
import Project from "Components/Project.js";
import RoutePointer from "Components/RoutePointer";
import PortfolioImg from "Images/portfolio.png";
import MetubeImg from "Images/metube.png";
import BbangflixImg from "Images/bbangflix.png";
import CTWImg from "Images/ctw.png";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 0 5em;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
  grid-gap: 1em;
`;

const Projects = () => (
  <>
    <RoutePointer id="projects" />
    <Section title="Projects">
      <Container>
        <Grid>
          <Project title="Portfolio" img={PortfolioImg} />
          <Project title="MeTube" img={MetubeImg} />
          <Project title="BBangflix" img={BbangflixImg} />
          <Project title="CTW" img={CTWImg} />
        </Grid>
      </Container>
    </Section>
  </>
);

export default Projects;
