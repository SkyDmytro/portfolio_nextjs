import './App.css';
import CombinedBackground from './components/AnimatedBg/AnimatedBackGround';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ScrollButton } from './components/ScrollButton/ScrollButton';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
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
