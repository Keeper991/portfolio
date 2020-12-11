import { useEffect, useState } from "react";
import styled from "styled-components";
import symbol from "Images/symbol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 1em;
  z-index: 10;
  ${(props) => {
    return props.isScroll
      ? `backdrop-filter: blur(10px); background-color: rgba(236, 240, 241, 0.5);`
      : null;
  }};
  transition: backdrop-filter 0.5s ease, background-color 0.5s ease;
`;

const Symbol = styled.div`
  background-image: url(${symbol});
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  margin: 0.5em 0;
  cursor: pointer;
`;

const MenuList = styled.ul`
  @media (max-width: 500px) {
    display: none;
  }
  display: flex;
  margin-left: 2em;
  font-size: 1.2em;
  font-weight: 600;
  text-shadow: 1px 1px 1px #ffffff, 0px 0px 8px #ffffff;
`;

const MenuItem = styled.li`
  :not(:last-child) {
    margin-right: 1em;
  }
  padding: 1.5em 0.5em;
  cursor: pointer;
`;

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
  const handleScroll = () =>
    window.scrollY > 100 ? setIsScroll(true) : setIsScroll(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header click event
  const scrollTo = (sectionName) => {
    if (typeof sectionName !== "string") return;
    return () => {
      const section = document.getElementById(sectionName);
      section.scrollIntoView({ behavior: "smooth" });
    };
  };

  // balloon menu state
  const [isBalloonOn, setBalloonOn] = useState(false);

  const balloonToggle = () => {
    setBalloonOn(!isBalloonOn);
  };

  return (
    <Container isScroll={isScroll}>
      <Symbol onClick={scrollTo("#")} />
      <MenuList>
        <MenuItem onClick={scrollTo("profile")}>PROFILE</MenuItem>
        <MenuItem onClick={scrollTo("projects")}>PROJECTS</MenuItem>
        <MenuItem onClick={scrollTo("contact")}>CONTACT</MenuItem>
      </MenuList>
      <Burger>
        <BurgerBtn isScroll={isScroll} onClick={balloonToggle}>
          <FontAwesomeIcon icon={faBars} />
        </BurgerBtn>
        <BalloonList isScroll={isScroll} isBalloonOn={isBalloonOn}>
          <BalloonItem onClick={scrollTo("profile")}>Profile</BalloonItem>
          <BalloonItem onClick={scrollTo("projects")}>Projects</BalloonItem>
          <BalloonItem onClick={scrollTo("contact")}>Contact</BalloonItem>
        </BalloonList>
      </Burger>
    </Container>
  );
};

export default Header;
