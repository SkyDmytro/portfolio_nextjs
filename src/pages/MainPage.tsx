import React from "react";
import { SocialsMainPage } from "../components/SocialsMainPage";
import { Title } from "../components/Title";

export const MainPage: React.FC = () => {
  return (
    <section className="bg-darkBlue h-screen" id="home">
      <SocialsMainPage />
      <div className="container h-full flex justify-center items-center">
        <Title />
      </div>
    </section>
  );
};
