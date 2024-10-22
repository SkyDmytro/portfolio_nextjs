import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ScrollButton } from "./components/ScrollButton";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { MainPage } from "./pages/MainPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import "./styles/hoverAnimation.css";
import { Seo } from "./components/Seo/Seo";
import app from "./assets/AppPreview.png";

const App = (): JSX.Element => {
  return (
    <>
      <Seo
        title="Skydan Dmytro"
        description="Portfolio website"
        url="https://skydmytro.vercel.app/"
        image={app}
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
