import { useEffect, useState } from "react";
import styled from "styled-components";
import symbol from "Images/symbol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { COLORS } from "Components/Consts";

const Container = styled.div`
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 1em;
  z-index: 10;
  ${(props) => {
    return props.isScroll
      ? `backdrop-filter: blur(10px); background-color: ${COLORS.blackTP};`
      : null;
  }};
  transition: backdrop-filter 0.2s;
`;

const MenuList = styled.ul`
  @media (max-width: 500px) {
    display: none;
  }
  margin-left: 1em;
  display: flex;
  align-items: center;
  font-size: 1.2em;
  color: ${COLORS.white};
`;

const MenuItem = styled.li`
  :not(:last-child) {
    margin-right: 1em;
  }
  display: flex;
  align-items: center;
`;

const Symbol = styled.div`
  background-image: url(${symbol});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  width: 3em;
  height: 3em;
`;

const MenuLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
  padding: 1.5em 0.5em;
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const SymbolLink = styled(HashLink)`
  text-decoration: none;
  border-radius: 50%;
  margin: 0.5em;
`;

// mobile environment menu
const Burger = styled.div`
  @media (max-width: 500px) {
    display: flex;
  }
  position: relative;
  display: none;
  margin-left: auto;
`;

const BurgerBtn = styled.button`
  ${(props) => (props.isScroll ? `color: #7f8c8d;` : `color: #ffffff;`)}
  font-size: 1.5em;
  transition: color 0.5s ease;
  background-color: inherit;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BalloonList = styled.ul`
  ${(props) => (props.isBalloonOn ? "display: flex;" : "display:none;")}
  position: absolute;
  top: calc(100% + 1em);
  right: -50%;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5em;
  line-height: 2em;
  font-size: 1.2em;
  border-bottom-left-radius: 1em;
  ${(props) => {
    return props.isScroll
      ? `color: #7f8c8d; background-color: rgba(236, 240, 241, 1); box-shadow: -1px 3px 10px rgba(0, 0, 0, .3)`
      : "color: #ffffff";
  }};
  transition: color 0.5s ease, background-color 0.5s ease;
`;

const BalloonItem = styled.li`
  cursor: pointer;
`;

const Header = () => {
  // Header background style
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 100 ? setIsScroll(true) : setIsScroll(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // balloon menu state
  const [isBalloonOn, setBalloonOn] = useState(false);

  const balloonToggle = () => {
    setBalloonOn(!isBalloonOn);
  };

  return (
    <Container isScroll={isScroll}>
      <SymbolLink smooth to="#">
        <Symbol />
      </SymbolLink>
      <MenuList>
        <MenuItem>
          <MenuLink smooth to="/#profile">
            PROFILE
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink smooth to="/#projects">
            PROJECTS
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink smooth to="/#contact">
            CONTACT
          </MenuLink>
        </MenuItem>
      </MenuList>
      <Burger>
        <BurgerBtn isScroll={isScroll} onClick={balloonToggle}>
          <FontAwesomeIcon icon={faBars} />
        </BurgerBtn>
        <BalloonList isScroll={isScroll} isBalloonOn={isBalloonOn}>
          <BalloonItem>
            <MenuLink smooth to="/#profile">
              Profile
            </MenuLink>
          </BalloonItem>
          <BalloonItem>
            <MenuLink smooth to="/#projects">
              Projects
            </MenuLink>
          </BalloonItem>
          <BalloonItem>
            <MenuLink smooth to="/#contact">
              Contact
            </MenuLink>
          </BalloonItem>
        </BalloonList>
      </Burger>
    </Container>
  );
};

export default Header;
