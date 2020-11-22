import Section from "Components/Section";
import styled from "styled-components";
import Project from "Components/Project.js";

const Container = styled.div``;

const Grid = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
  grid-gap: 1em;
`;

const Projects = () => (
  <Container>
    <Section title="Projects">
      <Grid>
        <Project title="Portfolio" />
        <Project title="MeTube" />
        <Project title="BBangflix" />
        <Project title="CTW" />
      </Grid>
    </Section>
  </Container>
);

export default Projects;
