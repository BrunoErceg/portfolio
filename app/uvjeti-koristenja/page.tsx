import { Heading, Text } from '@ui';

export const metadata = {
  title: 'Uvjeti Korištenja | Bruno Erceg',
  description: 'Pravila i uvjeti korištenja web stranice brunoerceg.dev.',
};

export default function uvjetiKoristenja() {
  return (
    <section className="mx-5 flex flex-col gap-y-10 lg:mx-[25%]">
      <div>
        <Heading level={2}>Uvjeti korištenja i Zaštita podataka (GDPR)</Heading>
        <Text variant="description">Zadnje ažuriranje: 8. siječnja 2026.</Text>
      </div>
      <div>
        <Heading level={3}>1. Opće odredbe</Heading>
        <Text>
          Korištenjem ovog portfolia pristajete na ove uvjete. Sadržaj je informativnog karaktera i
          služi kao prezentacija mojih radova.
        </Text>
      </div>
      <div>
        <Heading level={3}>2. Intelektualno vlasništvo</Heading>
        <Text>
          Svi radovi, dizajn i kod prikazani na ovoj stranici su moje vlasništvo, osim ako nije
          drugačije navedeno. Zabranjeno je kopiranje ili korištenje materijala bez moje izričite
          dozvole.
        </Text>
      </div>
      <div>
        <Heading level={3}>3. Kontakt forma i Privatnost</Heading>
        <Text>
          Kada ispunite kontakt formu, prikupljam sljedeće podatke: Ime i prezime / Naziv tvrtke,
          E-mail adresa i Sadržaj vaše poruke. Ovi podaci se koriste isključivo kako bih odgovorio
          na vaš upit. Podaci se ne dijele s trećim stranama niti se koriste za newslettere bez
          vašeg pristanka.
        </Text>
      </div>
      <div>
        <Heading level={3}>4. Kolačići (Cookies)</Heading>
        <Text>
          Ova stranica može koristiti osnovne kolačiće za funkcionalnost stranice ili analitiku
          (npr. Google Analytics).
        </Text>
      </div>
      <div>
        <Heading level={3}>5. Odricanje od odgovornosti</Heading>
        <Text>
          Iako se trudim da su sve informacije točne, ne preuzimam odgovornost za eventualne
          pogreške u sadržaju ili privremenu nedostupnost stranice.
        </Text>
      </div>
    </section>
  );
}
