import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 1em;
`;

const Avatar = styled.div`
  background-color: gray;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  margin-right: 2em;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
`;

const Item = styled.li`
  font-size: 1.2em;
  :not(:last-child) {
    margin-right: 1em;
  }
  padding: 1.5em 0.5em;
`;

const Header = () => (
  <Container>
    <Avatar />
    <List>
      <Item>Introduce</Item>
      <Item>Projects</Item>
      <Item>Contact</Item>
    </List>
  </Container>
);

export default Header;
