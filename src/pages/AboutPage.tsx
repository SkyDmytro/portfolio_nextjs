import Portfolio from '../components/AboutMePage/AboutMePageNew';

const AboutPage = () => {
  return (
    <section id="about" className="bg-black min-h-screen ">
      {/* <div className="container py-14 ">
        <PageTitle
          title="About me"
          subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
        />

        <div className="flex sm:flex-col lg:flex-row justify-evenly sm:gap-10 sm:mt-10 md:mt-24 h-full">
          <GetToKnowMeComponent />
          <MySkillsComponent />
        </div>
      </div> */}
      <div className="container">
        <Portfolio />
      </div>
    </section>
  );
};

export default AboutPage;
