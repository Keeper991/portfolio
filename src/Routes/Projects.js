import Section from "Components/Section";
import styled from "styled-components";
import Project from "Components/Project.js";
import PortfolioImg from "Images/portfolio.jpg";
import MetubeImg from "Images/metube.jpg";
import BbangflixImg from "Images/bbangflix.jpg";
import CTWImg from "Images/ctw.jpg";
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
      <Section title="Projects" id="projects">
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
