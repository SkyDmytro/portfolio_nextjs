import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="bg-blue py-4 absolute w-full">
      <div className="container flex items-center justify-between font-bold">
        <span>Skydan Dmytro</span>
        <nav className="flex gap-10">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};
