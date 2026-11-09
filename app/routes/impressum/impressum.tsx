
import { Mail, MapPin, FileText } from "lucide-react";
import { Link } from "react-router";

// =========================================================
// Unternehmensdaten
// Hier später die tatsächlichen Angaben eintragen.
// =========================================================

// const companyName = "Westerbock GmbH";
// const companyOwner = "Yakup Aras";
// const companyAddress = "[STRASSE UND HAUSNUMMER]";
// const companyPostalCode = "[POSTLEITZAHL]";
// const companyCity = "[ORT]";
// const companyEmail = "[E-MAIL-ADRESSE]";

const companyName = "Westerbock GmbH";
const companyOwner = "Yakup Aras";
const companyAddress = "[STRASSE UND HAUSNUMMER]";
const companyPostalCode = "[POSTLEITZAHL]";
const companyCity = "[ORT]";
const companyEmail = "[E-MAIL-ADRESSE]";

// =========================================================
// Weitere rechtliche Angaben
// =========================================================

const companyLegalForm = "[RECHTSFORM – FALLS ZUTREFFEND]";
const companyRegister = "[REGISTER UND REGISTERNUMMER – FALLS ZUTREFFEND]";
const companyVatId = "[UST-ID – FALLS VORHANDEN]";

// const companyLegalForm = "";
// const companyRegister = "";
// const companyVatId = "";

// =========================================================
// Meta-Daten
// =========================================================

export function meta() {
  return [
    { title: "Impressum" },
    {
      name: "description",
      content:
        "Impressum und rechtliche Angaben zum Anbieter dieser Website.",
    },
  ];
}

// =========================================================
// Rechtliche Abschnitte
// =========================================================


const legalSections = [
  {
    number: "01",
    title: "Haftung für Inhalte",
    content: (
      <>
        <p>
          Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für
          eigene Inhalte auf diesen Seiten verantwortlich.
        </p>

        <p className="mt-4">
          Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte
          fremde Informationen zu überwachen oder nach Umständen zu forschen,
          die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <p className="mt-4">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis
          einer konkreten Rechtsverletzung möglich.
        </p>

        <p className="mt-4">
          Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir
          diese Inhalte umgehend entfernen.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Haftung für Links",
    content: (
      <>
        <p>
          Unser Angebot enthält gegebenenfalls Links zu externen Websites
          Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
          können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
        </p>

        <p className="mt-4">
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten
          wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
          überprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt
          nicht erkennbar.
        </p>

        <p className="mt-4">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
        </p>

        <p className="mt-4">
          Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende
          Links umgehend entfernen.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Urheberrecht",
    content: (
      <>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht.
        </p>

        <p className="mt-4">
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung außerhalb der Grenzen des Urheberrechts bedürfen
          der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers.
        </p>

        <p className="mt-4">
          Downloads und Kopien dieser Seite sind nur für den privaten,
          nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte
          nicht vom Betreiber erstellt wurden, werden die Urheberrechte
          Dritter beachtet und entsprechende Inhalte als solche
          gekennzeichnet.
        </p>

        <p className="mt-4">
          Sollten Sie dennoch auf eine mögliche Urheberrechtsverletzung
          aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
        </p>

        <p className="mt-4">
          Bei Bekanntwerden von Rechtsverletzungen werden wir entsprechende
          Inhalte umgehend entfernen.
        </p>
      </>
    ),
  },
];


// =========================================================
// Lokale Komponenten
// =========================================================

function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      {children}
    </div>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A9C6E8]">
      {children}
    </p>
  );
}

// =========================================================
// Impressum-Seite
// =========================================================

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* Header */}
      <section className="border-b border-slate-200 bg-[#102D55] px-6 py-20 text-white sm:py-24">
        <PageContainer>

          <SectionLabel>
            Rechtliche Informationen
          </SectionLabel>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Impressum
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100">
            Hier finden Sie die gesetzlich vorgeschriebenen Angaben
            zu unserem Unternehmen sowie Informationen zur
            Verantwortlichkeit und Haftung unseres Internetauftritts.
          </p>

        </PageContainer>
      </section>

      {/* Anbieterkennzeichnung */}
      <section className="px-6 py-16 sm:py-20">
        <PageContainer>

          <div className="mb-10">
            <SectionLabel>
              01 · Anbieterkennzeichnung
            </SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#102D55] sm:text-4xl">
              Angaben zum Anbieter
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Die folgenden Angaben informieren darüber, wer für
              diesen Internetauftritt verantwortlich ist.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">

            {/* Unternehmensdaten */}
            <article className="border-b border-slate-200 pb-8 sm:border-b-0 sm:border-r sm:pr-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102D55] text-white">
                <FileText size={21} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#102D55]">
                Anbieter
              </h3>

              <div className="mt-5 space-y-2 text-sm leading-7 text-slate-600">

                <p className="font-semibold text-slate-800">
                  {companyName}
                </p>

                <p>
                  {companyOwner}
                </p>

                <p>
                  {companyAddress}
                  <br />
                  {companyPostalCode} {companyCity}
                  <br />
                  Deutschland
                </p>

                <p>
                  {companyLegalForm}
                </p>

              </div>
            </article>

            {/* Kontaktangaben */}
            <article>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF1F9] text-[#173B70]">
                <MapPin size={21} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#102D55]">
                Kontakt
              </h3>

              <div className="mt-5 space-y-5">

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-[#24569A]" />

                  <p className="text-sm leading-7 text-slate-600">
                    <span className="font-semibold text-slate-800">
                      {companyName}
                    </span>
                    <br />
                    {companyAddress}
                    <br />
                    {companyPostalCode} {companyCity}
                    <br />
                    Deutschland
                  </p>
                </div>
              </div>
            </article>

          </div>

          {/* Weitere Angaben */}
          <div className="mt-10 border-t border-slate-200 pt-8">

            <h3 className="text-lg font-semibold text-[#102D55]">
              Weitere Angaben
            </h3>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Vertretungsberechtigte Person
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {companyOwner}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Rechtsform
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {companyLegalForm}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Registereintrag
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {companyRegister}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Umsatzsteuer-ID
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {companyVatId}
                </p>
              </div>

            </div>
          </div>

        </PageContainer>
      </section>

      {/* Rechtliche Hinweise */}
      <section className="border-t border-slate-200 bg-white px-6 py-16 sm:py-20">
        <PageContainer>

          <div className="mb-12">
            <SectionLabel>
              02 · Rechtliche Hinweise
            </SectionLabel>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#102D55] sm:text-4xl">
              Rechtliche Grundlagen
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
              Nachfolgend finden Sie wichtige Hinweise zur Nutzung
              unserer Website und zu den bereitgestellten Inhalten.
            </p>
          </div>

          <div className="space-y-12">

            {legalSections.map((section) => (
              <article
                key={section.number}
                className="border-b border-slate-200 pb-10 last:border-0"
              >

                <div className="flex items-baseline gap-4">

                  <span className="shrink-0 text-sm font-semibold text-[#24569A]">
                    {section.number}
                  </span>

                  <h3 className="text-xl font-semibold tracking-tight text-[#102D55] sm:text-2xl">
                    {section.title}
                  </h3>

                </div>

                <div className="mt-5 text-sm leading-8 text-slate-600 sm:text-base [&_strong]:font-semibold [&_strong]:text-slate-800">
                  {section.content}
                </div>

              </article>
            ))}

          </div>

        </PageContainer>
      </section>

      {/* Kontakt */}
      <section className="border-t border-slate-200 px-6 py-16 sm:py-20">
        <PageContainer>

          <div className="border-b border-slate-200 pb-10">

            <h2 className="text-xl font-semibold text-[#102D55]">
              Fragen zu unserem Impressum?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Bei Fragen zu unserem Internetauftritt oder rechtlichen
              Anliegen können Sie sich jederzeit an uns wenden.
            </p>

            <Link
              to="/kontakt#kontaktformular"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#173B70] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24569A]"
            >
              <Mail size={17} />
              Kontakt aufnehmen
            </Link>

          </div>

        </PageContainer>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8">
        <PageContainer>

          <p className="text-xs leading-6 text-slate-400">
            {companyName} · Impressum
          </p>

        </PageContainer>
      </footer>

    </main>
  );
}
