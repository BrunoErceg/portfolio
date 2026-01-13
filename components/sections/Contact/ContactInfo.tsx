import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faEnvelopeCircleCheck,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Heading, Text } from '@/components/ui';
import { cn } from '@/utils/cn';
import { LINKS, CONTACT } from '@/constants/links';

const CONTACT_INFO = [
  { text: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: faEnvelope },
  { text: CONTACT.phone, href: `tel:${CONTACT.phone}`, icon: faPhone },
  {
    text: CONTACT.address,
    href: LINKS.googleMaps,
    icon: faLocationDot,
  },
];

function ContactInfo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative flex flex-col gap-y-10 overflow-hidden rounded-4xl bg-linear-to-br from-blue-400 to-blue-500 p-7 text-lg md:p-12 dark:from-slate-800 dark:to-slate-900',
        className,
      )}
    >
      <div className="flex flex-col gap-y-1">
        <Heading level={3} white>
          Kontakt informacije
        </Heading>
        <Text variant="description" size="small" white>
          Slobodno pošaljite poruku ili email
        </Text>
      </div>
      <ul className="flex flex-col gap-y-3 text-sm md:text-lg">
        {CONTACT_INFO.map(({ text, href, icon }) => (
          <li key={text} className="text-white/80">
            <FontAwesomeIcon icon={icon} className="mr-2" />
            <a href={href} target="_blank" rel="noopener noreferrer" className="">
              {text}
            </a>
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
