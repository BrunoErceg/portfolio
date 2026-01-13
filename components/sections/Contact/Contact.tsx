import { SectionHeader } from '@/components/ui';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

export function Contact() {
  return (
    <section className="scroll-mt-[100px]" id="contact">
      <SectionHeader className="mb-7 md:mb-15">
        <SectionHeader.Tag text="Kontakt" icon={faMessage} />
        <SectionHeader.Title text="Zainteresirani? Javite se! 👋" />
        <SectionHeader.Subtitle text="Javite se putem broja telefona ili kontakt obrasca za dogovor." />
      </SectionHeader>
      <div className="flex flex-col gap-5 rounded-4xl bg-blue-100 p-3 md:p-5 lg:flex-row dark:bg-slate-800">
        <ContactInfo className="mb-10 lg:mb-0" />
        <ContactForm />
      </div>
    </section>
  );
}
