import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactPageNew } from '../components/ContactPageNew/ContactPageNew';
import { PageTitle } from '../components/ProjectsPageComponent/ui/PageTitle';

const ContactPage = () => {
  return (
    <section id="contact" className="bg-black pt-14">
      {/* <div className="container flex flex-col gap-24">
        <PageTitle
          title="contact"
          subtitle="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        />
        <ContactForm />
      </div> */}
      <div className="container">
        <ContactPageNew />
      </div>
    </section>
  );
};

export default ContactPage;
