import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ScrollButton } from './components/ScrollButton';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { MainPage } from './pages/MainPage';
import { ProjectsPage } from './pages/ProjectsPage';
import './styles/hoverAnimation.css';

const App = (): JSX.Element => {
  return (
    <>
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
