import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { BurgerMenu } from "./BurgerMenu";
export const HeaderNavigarionMenu = () => {
  const isMobile = useMediaQuery(768);
  return (
    <>
      {isMobile ? (
        <BurgerMenu />
      ) : (
        <nav className="flex gap-10">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </>
  );
};
