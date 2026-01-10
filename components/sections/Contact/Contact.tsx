import ContactForm from './ContactForm';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';

/**
 * A React component that displays the Contact section.
 * It contains the ContactHeader, ContactInfo, and ContactForm components.
 * The component is styled to have a blue background and white text, with a rounded shape and padding.
 * The component is also responsive and changes its layout to a row on large screens.
 */
function Contact() {
  return (
    <section className="scroll-mt-[100px]" id="contact">
      <ContactHeader className="mb-7 md:mb-15" />
      <div className="flex flex-col gap-5 rounded-4xl bg-blue-100 p-3 md:p-5 lg:flex-row dark:bg-slate-800">
        <ContactInfo className="mb-10 lg:mb-0" />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
