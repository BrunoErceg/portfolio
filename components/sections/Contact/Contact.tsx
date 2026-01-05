import Heading from '@/components/ui/Heading';
import Tag from '@/components/ui/Tag';
import Text from '@/components/ui/Text';
import { faEnvelope, faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section className="mb-20">
      <div className="mb-10">
        <Tag text="Kontakt" icon={faMessage} centered variant="heading" className="block" />
        <Heading level={2} centered>
          Zainteresirani? Kontaktirajte me
        </Heading>
        <Text variant="subheading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. officiis quos.
        </Text>
      </div>
      <div className="flex flex-col gap-5 rounded-4xl bg-blue-100 p-5 lg:flex-row">
        <div className="relative mb-10 flex flex-col overflow-hidden rounded-4xl bg-linear-to-br from-blue-400 to-blue-500 p-10 text-lg text-white lg:mb-0 lg:w-1/3">
          <Heading level={3} color="white">
            Kontakt informacije
          </Heading>
          <Text variant="description" color="white">
            Slobodno posaljite poruku ili Email
          </Text>
          <ul className="mt-15 space-y-5 text-lg">
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              brunoerceg95@gmail.com
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +385 95 360 1028
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
              Danilska 5, Šibenik
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faEnvelopeCircleCheck}
            className="absolute -right-10 -bottom-10 rotate-6 text-[200px] text-white/10"
          />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
