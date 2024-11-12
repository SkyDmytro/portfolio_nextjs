import { ReactElement } from 'react';

import { ScrollAnimationComponent } from '../components/ScrollAnimationComponent';
import { SocialsMainPage } from '../components/SocialsMainPage';
import { Title } from '../components/Title';

const MainPage = (): ReactElement => {
  return (
    <section className="bg-darkBlue h-screen" id="home">
      <SocialsMainPage />
      <div className="container h-full flex justify-center items-center">
        <Title />
      </div>
      <ScrollAnimationComponent />
    </section>
  );
};

export default MainPage;
