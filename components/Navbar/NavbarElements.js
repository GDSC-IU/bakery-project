import styled from "styled-components";
import { GiDonut } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
export const Navlink = styled.a`
  color: #1f0322;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export const NavMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #1f0322;
  h3 {
    transform: translate(-175%, 100%);
    font-weight: bold;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;
export const Donut = styled(GiDonut)`
  font-size: 3rem;
  transform: translate(-50%, -15%);
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
    font-size: 2rem;
    transform: translate(-25%, 50%);
  }
`;
