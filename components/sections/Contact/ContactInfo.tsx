// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faEnvelopeCircleCheck,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

// UI
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';

const CONTACT_INFO = [
  { text: 'brunoerceg95@gmail.com', icon: faEnvelope },
  { text: '+385 95 360 1028', icon: faPhone },
  { text: 'Danilska 5, Šibenik', icon: faLocationDot },
];

/**
 * A React component that displays contact information.
 * The component is styled with a blue background, rounded corners, and white text.
 * It also has a envelope icon at the bottom right corner.
 *
 * @returns A React component that displays the contact information.
 */
function ContactInfo({ className }: { className?: string }) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-4xl bg-linear-to-br from-blue-400 to-blue-500 p-10 text-lg text-white lg:w-1/3 dark:from-slate-800 dark:to-slate-900">
      <Heading level={3} white>
        Kontakt informacije
      </Heading>
      <Text variant="description" white>
        Slobodno pošaljite poruku ili email
      </Text>
      <ul className="mt-15 space-y-5 text-lg">
        {CONTACT_INFO.map(({ text, icon }) => (
          <li key={text}>
            <FontAwesomeIcon icon={icon} className="mr-2" />
            {text}
          </li>
        ))}
      </ul>
      <FontAwesomeIcon
        icon={faEnvelopeCircleCheck}
        className="absolute -right-10 -bottom-10 rotate-6 text-[200px] text-white/10"
      />
    </div>
  );
}

export default ContactInfo;
