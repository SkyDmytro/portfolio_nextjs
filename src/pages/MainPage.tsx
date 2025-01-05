import { ReactElement } from 'react';

import { Title } from '../components/MainPageTitle/Title';
import { ScrollAnimationComponent } from '../components/ScrollAnimationComponent/ScrollAnimationComponent';
import { SocialsMainPage } from '../components/SocialsMainPage/SocialsMainPage';

const MainPage = (): ReactElement => {
  return (
    <section className="bg-black h-screen" id="home">
      <SocialsMainPage />
      <div className="container h-full flex justify-center items-center">
        <Title />
      </div>
      <ScrollAnimationComponent />
    </section>
  );
};

export default MainPage;
