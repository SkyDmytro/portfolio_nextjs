import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollButton } from "./components/ScrollButton";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { MainPage } from "./pages/MainPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import "./styles/hoverAnimation.css";
import { Seo } from "./components/Seo/Seo";

const App = (): JSX.Element => {
  return (
    <>
      <Seo
        title="Skydan Dmytro"
        description="Portfolio website"
        url="https://skydmytro.vercel.app/"
        image="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/skydmytro.vercel.app/Skydan%20Dmytro/Portfolio%20website/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F3da578a1-6fcd-43d8-ae8e-f3fff78c73b6.png%3Ftoken%3DWedvKgGbQkFgZ0hb9e2BLTbXPWjPjNlnIabEvhAa8Gk%26height%3D625%26width%3D1200%26expires%3D33265524857/og.png"
        imageAlt="Portfolio website image preview"
      />
      <Header />
      <MainPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
      <ScrollButton />
    </>
  );
};

export default App;
