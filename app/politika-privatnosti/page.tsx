import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';

export default function politikaPrivatnosti() {
  return (
    <section className="mx-5 mt-10 lg:mx-[30%]">
      <div className="mb-10">
        <Heading level={2} className="mb-3">
          Politika privatnosti
        </Heading>
        <Text variant="description" centered>
          Zadnje ažuriranje: 8. siječnja 2026.
        </Text>
      </div>
      <div className="space-y-10">
        <div>
          <Heading level={3}>1. Podaci koje prikupljamo</Heading>
          <Text>
            Putem kontakt forme prikupljamo vaše ime, email adresu i sadržaj poruke isključivo radi
            komunikacije.
          </Text>
        </div>
        <div>
          <Heading level={3}>2. Svrha obrade</Heading>
          <Text>
            Podatke koristimo samo da bismo odgovorili na vaš upit. Ne koristimo ih za marketing
            niti ih šaljemo trećim stranama.
          </Text>
        </div>
        <div>
          <Heading level={3}>3. Kolačići (Cookies)</Heading>
          <Text>
            Ova stranica ne koristi kolačiće za praćenje, osim onih nužnih za osnovno funkcioniranje
            web stranice.
          </Text>
        </div>
        <div>
          <Heading level={3}>4. Vaša prava</Heading>
          <Text>
            U svakom trenutku možete zatražiti brisanje vaših podataka slanjem upita na:{' '}
            <span className="font-bold">brunoerceg95@gmail.com</span>.
          </Text>
        </div>
      </div>
    </section>
  );
}
