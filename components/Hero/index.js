import { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { HeroContainer, HeroContent, HeroItems, HeroBtn } from "./HeroElements";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <h1>Most Delicious Donuts Ever!</h1>
          <p>Make Your Tastebuds Satisfied.</p>
          <HeroBtn>Order Now</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
