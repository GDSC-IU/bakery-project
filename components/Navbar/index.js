import Link from "next/link";
import { Bars, Nav, Navlink, NavMenu, Donut } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Link href="/" passHref>
        <Navlink>D. Donuts</Navlink>
      </Link>
      <NavMenu onClick={toggle}>
        <h3>Menu</h3>
        <Donut />
        <Bars />
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
