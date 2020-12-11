import Section from "Components/Section";
import styled from "styled-components";
import Project from "Components/Project.js";
import RoutePointer from "Components/RoutePointer";
import PortfolioImg from "Images/portfolio.png";
import MetubeImg from "Images/metube.png";
import BbangflixImg from "Images/bbangflix.png";
import CTWImg from "Images/ctw.png";
import ProjectsData from "ProjectsData";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 0 0.5em;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
  grid-gap: 1em;
`;

const Projects = () => {
  const { Portfolio, Metube, Bbangflix, CTW } = ProjectsData;
  return (
    <>
      <RoutePointer id="projects" />
      <Section title="Projects">
        <Container>
          <Grid>
            <Project
              id="portfolio"
              title="Portfolio"
              img={PortfolioImg}
              modalContents={Portfolio}
            />
            <Project
              id="metube"
              title="MeTube"
              img={MetubeImg}
              modalContents={Metube}
            />
            <Project
              id="bbangflix"
              title="BBangflix"
              img={BbangflixImg}
              modalContents={Bbangflix}
            />
            <Project id="ctw" title="CTW" img={CTWImg} modalContents={CTW} />
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Projects;
