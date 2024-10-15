import { PageTitle } from "../components/PageTitle";
import { ContactForm } from "../components/ContactForm";

export const ContactPage = () => {
  return (
    <section id="contact" className="bg-blue pt-10">
      <div className="container py-10 flex flex-col gap-24">
        <PageTitle
          title="contact"
          subtitle="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
        />
        <ContactForm />
      </div>
    </section>
  );
};
