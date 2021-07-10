import Link from "next/link";
import {
  SidebarContainer,
  SidebarBtn,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
  Icon,
  CloseIcon,
} from "./SidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <Link href="/" passHref>
          <SidebarLink>Donuts</SidebarLink>
        </Link>
        <Link href="/" passHref>
          <SidebarLink>Cupcakes</SidebarLink>
        </Link>
        <Link href="/" passHref>
          <SidebarLink>Full Menu</SidebarLink>
        </Link>
      </SidebarMenu>
      <SidebarBtn>
        <Link href="/" passHref>
          <SidebarRoute>Order Now!</SidebarRoute>
        </Link>
      </SidebarBtn>
    </SidebarContainer>
  );
};

export default Sidebar;
