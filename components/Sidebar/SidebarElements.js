import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 350px;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s;
  background-color: #1f0322;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const CloseIcon = styled(FaTimes)`
  color: white;
  transition: 0.2s;

  &:hover {
    transform: rotate(180deg);
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s;
  color: white;
  cursor: pointer;

  &:hover {
    color: #e31837;
    transition: 0.2s;
  }
`;

export const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarRoute = styled.a`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #010606;
    transition: 0.2s;
    background: white;
  }
`;
