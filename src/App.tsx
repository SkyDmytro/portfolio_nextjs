import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { MainPage } from "./pages/MainPage";
import { ProjectsPage } from "./pages/ProjectsPage";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <MainPage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
};

export default App;
