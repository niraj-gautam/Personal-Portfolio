import { Section } from './ui/Section';
import { ContactForm } from './contact/ContactForm';
import { ContactInfo } from './contact/ContactInfo';

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      description="I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to work together or just say hello!"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
