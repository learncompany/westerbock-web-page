
import { Mail } from "lucide-react";
import { Link } from "react-router";
import type { Route } from "./+types/datenschutz";

/* =========================================================
   Unternehmensdaten
   Hier später die tatsächlichen Angaben eintragen.
========================================================= */

const companyName = "";
const companyOwner = "";
const companyAddress = "";
const companyPostalCode = "";
const companyCity = "";
const companyEmail = "";

// =========================================================
// Zentrale Angaben
// =========================================================

const COMPANY_NAME = "";
const OWNER_NAME = "";

// =========================================================
// Meta-Daten
// =========================================================

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Datenschutzerklärung" },
    {
      name: "description",
      content:
        "Informationen zum Datenschutz und zur Verarbeitung personenbezogener Daten.",
    },
  ];
}

// =========================================================
// Lokale Komponenten
// =========================================================

function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">
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
const sections = [
  {
    number: "01",
    title: "Allgemeine Hinweise",
    content: (
      <>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
        Wir behandeln Ihre personenbezogenen Daten vertraulich und
        entsprechend den gesetzlichen Datenschutzvorschriften sowie
        dieser Datenschutzerklärung.

        <br /><br />

        Die Nutzung unserer Website ist grundsätzlich ohne die Angabe
        personenbezogener Daten möglich. Sofern auf unserer Website
        personenbezogene Daten erhoben werden, erfolgt dies ausschließlich
        im Rahmen der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung
        (DSGVO).

        <br /><br />

        Diese Datenschutzerklärung informiert Sie darüber, welche Daten
        beim Besuch unserer Website verarbeitet werden, zu welchen Zwecken
        dies geschieht und welche Rechte Ihnen zustehen.
      </>
    ),
  },
  {
    number: "02",
    title: "Verantwortliche Stelle",
    content: (
      <>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:

        <br /><br />

        <strong>{companyName}</strong>
        <br />
        {companyOwner && (
          <>
            Verantwortliche Person: {companyOwner}
            <br />
          </>
        )}
        {companyAddress}
        <br />
        {companyPostalCode} {companyCity}
        <br />
        Deutschland

        <br /><br />

        E-Mail: {companyEmail}
      </>
    ),
  },
  {
    number: "03",
    title: "Hosting und Server-Log-Dateien",
    content: (
      <>
        Unsere Website wird auf einem eigenen Server betrieben, der bei
        folgendem Anbieter gehostet wird:

        <br /><br />

        <strong>IONOS SE</strong>
        <br />
        Elgendorfer Straße 57
        <br />
        56410 Montabaur
        <br />
        Deutschland

        <br /><br />

        Beim Aufruf unserer Website werden technisch notwendige
        Informationen verarbeitet, die Ihr Browser automatisch an
        den Server übermittelt.

        <br /><br />

        Hierzu können insbesondere gehören:

        <ul className="my-4 list-disc space-y-2 pl-6">
          <li>IP-Adresse des zugreifenden Geräts</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Aufgerufene Seite oder angeforderte Datei</li>
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer-URL, sofern übermittelt</li>
          <li>Technische Status- und Fehlermeldungen</li>
        </ul>

        Wir selbst speichern keine eigenen Server-Log-Dateien und führen
        keine personenbezogene Besucherauswertung durch.

        <br /><br />

        Unabhängig davon kann unser Hostinganbieter IONOS technisch
        erforderliche Verbindungs- und Protokolldaten zur Bereitstellung,
        Sicherheit und Stabilität der Serverinfrastruktur verarbeiten.

        <br /><br />

        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        Unser berechtigtes Interesse besteht in der sicheren und zuverlässigen
        Bereitstellung unserer Website.

        <br /><br />

        Soweit IONOS personenbezogene Daten in unserem Auftrag verarbeitet,
        erfolgt dies auf Grundlage einer Vereinbarung zur Auftragsverarbeitung
        gemäß Art. 28 DSGVO.

        <br /><br />

        Weitere Informationen finden Sie in der{" "}
        <a
          href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#173B70] underline underline-offset-4 hover:text-[#24569A]"
        >
          Datenschutzerklärung von IONOS
        </a>.
      </>
    ),
  },
  {
    number: "04",
    title: "Kontaktformular",
    content: (
      <>
        Auf unserer Website stellen wir ein Kontaktformular zur Verfügung,
        über das Sie mit uns in Verbindung treten können.

        <br /><br />

        Wenn Sie unser Kontaktformular nutzen, verarbeiten wir die von Ihnen
        eingegebenen personenbezogenen Daten.

        <br /><br />

        Hierzu können insbesondere gehören:

        <ul className="my-4 list-disc space-y-2 pl-6">
          <li>Name</li>
          <li>E-Mail-Adresse</li>
          <li>Organisation oder Unternehmen</li>
          <li>Art Ihrer Anfrage</li>
          <li>Betreff Ihrer Nachricht</li>
          <li>Inhalt Ihrer Nachricht</li>
          <li>Weitere freiwillig übermittelte Angaben</li>
        </ul>

        Die Übermittlung der Formulardaten erfolgt direkt über unseren
        eigenen Server. Wir verwenden keine externen Formularanbieter
        für die Verarbeitung der Kontaktanfragen.

        <br /><br />

        Nach Eingang der Anfrage werden die Nachrichten an unsere
        geschäftliche E-Mail-Adresse {companyEmail} weitergeleitet.
        Die Bereitstellung des E-Mail-Postfachs erfolgt über unseren
        Hosting- und E-Mail-Anbieter IONOS SE.

        <br /><br />

        Die Verarbeitung erfolgt ausschließlich zur Bearbeitung Ihrer
        Anfrage und zur Kommunikation mit Ihnen.

        <br /><br />

        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage
        mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt.
        In anderen Fällen erfolgt die Verarbeitung auf Grundlage unseres
        berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.

        <br /><br />

        Die übermittelten Daten werden gelöscht, sobald Ihre Anfrage
        abschließend bearbeitet wurde und keine gesetzlichen
        Aufbewahrungspflichten oder sonstigen berechtigten Gründe
        einer längeren Speicherung entgegenstehen.

        <br /><br />

        Bitte beachten Sie, dass die Übertragung von E-Mails trotz
        üblicher Transportverschlüsselung nicht grundsätzlich einer
        Ende-zu-Ende-Verschlüsselung entspricht.
      </>
    ),
  },
  {
    number: "05",
    title: "E-Mail-Kommunikation",
    content: (
      <>
        Für den Empfang und die Verwaltung unserer geschäftlichen
        E-Mails nutzen wir einen E-Mail-Dienst von IONOS SE.

        <br /><br />

        <strong>IONOS SE</strong>
        <br />
        Elgendorfer Straße 57
        <br />
        56410 Montabaur
        <br />
        Deutschland

        <br /><br />

        Wenn Sie uns per E-Mail kontaktieren oder eine Nachricht über
        unser Kontaktformular senden, werden die dabei übermittelten
        personenbezogenen Daten zur Bearbeitung Ihres Anliegens verarbeitet.

        <br /><br />

        Hierzu können insbesondere Ihre E-Mail-Adresse, Ihr Name,
        der Nachrichteninhalt sowie gegebenenfalls enthaltene Anhänge gehören.

        <br /><br />

        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
        sofern Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen
        zusammenhängt. Andernfalls erfolgt sie auf Grundlage unseres
        berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.

        <br /><br />

        Die Daten werden nur so lange gespeichert, wie dies für die
        Bearbeitung Ihres Anliegens erforderlich ist oder gesetzliche
        Aufbewahrungspflichten bestehen.

        <br /><br />

        Weitere Informationen finden Sie in der{" "}
        <a
          href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#173B70] underline underline-offset-4 hover:text-[#24569A]"
        >
          Datenschutzerklärung von IONOS
        </a>.
      </>
    ),
  },
  {
    number: "06",
    title: "Cookies und Browser-Speicher",
    content: (
      <>
        Unsere Website verwendet nach aktuellem technischen Stand keine
        Cookies.

        <br /><br />

        Ebenso verwenden wir weder Local Storage noch Session Storage
        des Browsers, um personenbezogene Daten oder Informationen über
        das Nutzungsverhalten unserer Besucher zu speichern.

        <br /><br />

        Wir setzen keine Analyse- oder Trackingdienste wie Google Analytics,
        Meta Pixel oder vergleichbare Technologien ein.

        <br /><br />

        Eine Speicherung von Informationen auf Ihrem Endgerät zu Werbe-,
        Analyse- oder Profilingzwecken findet durch unsere Website nicht statt.

        <br /><br />

        Davon unberührt bleiben technisch notwendige Datenverarbeitungen,
        die für die Bereitstellung und Sicherheit unserer Website erforderlich sind.
      </>
    ),
  },
  {
    number: "07",
    title: "Google Site Verification",
    content: (
      <>
        Auf unserer Website verwenden wir einen sogenannten
        Google-Site-Verification-Eintrag.

        <br /><br />

        Dabei handelt es sich um ein technisches Verifizierungs-Meta-Tag
        im HTML-Bereich unserer Website. Dieses dient dem Nachweis der
        Inhaberschaft unserer Website gegenüber Google, beispielsweise
        im Zusammenhang mit der Google Search Console.

        <br /><br />

        Das Meta-Tag enthält einen von Google bereitgestellten
        Verifizierungscode. Es dient ausschließlich der technischen
        Bestätigung der Website-Inhaberschaft.

        <br /><br />

        Durch das Meta-Tag selbst werden keine Cookies gesetzt und keine
        Besucherprofile erstellt. Es handelt sich nicht um Google Analytics
        oder ein vergleichbares Trackingwerkzeug.

        <br /><br />

        Weitere Informationen zum Datenschutz bei Google finden Sie unter:

        <br />

        <a
          href="https://policies.google.com/privacy?hl=de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#173B70] underline underline-offset-4 hover:text-[#24569A]"
        >
          Datenschutzerklärung von Google
        </a>.
      </>
    ),
  },
    {
    number: "08",
    title: "Datenweitergabe und Auftragsverarbeitung",
    content: (
      <>
        Wir behandeln Ihre personenbezogenen Daten vertraulich und geben
        diese grundsätzlich nicht an unbeteiligte Dritte weiter.

        <br /><br />

        Für den technischen Betrieb unserer Website sowie die Bereitstellung
        unserer geschäftlichen E-Mail-Adresse nutzen wir die Dienste der
        IONOS SE.

        <br /><br />

        IONOS kann im Rahmen der technischen Bereitstellung und Verwaltung
        der Server- und E-Mail-Infrastruktur personenbezogene Daten verarbeiten.

        <br /><br />

        Soweit IONOS dabei personenbezogene Daten in unserem Auftrag verarbeitet,
        erfolgt dies auf Grundlage einer Vereinbarung zur Auftragsverarbeitung
        gemäß Art. 28 DSGVO.

        <br /><br />

        Eine Weitergabe an weitere Dritte erfolgt nur, wenn eine gesetzliche
        Verpflichtung besteht, eine entsprechende Einwilligung vorliegt oder
        eine andere gesetzliche Rechtsgrundlage dies erlaubt.
      </>
    ),
  },
  {
    number: "09",
    title: "SSL- bzw. TLS-Verschlüsselung",
    content: (
      <>
        Diese Website nutzt aus Sicherheitsgründen und zum Schutz der
        Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.

        <br /><br />

        Eine verschlüsselte Verbindung erkennen Sie daran, dass die
        Adresszeile Ihres Browsers mit „https://“ beginnt und ein
        entsprechendes Schloss-Symbol angezeigt wird.

        <br /><br />

        Durch die Verschlüsselung können übermittelte Daten während der
        Übertragung vor dem Zugriff durch unbefugte Dritte geschützt werden.
      </>
    ),
  },
  {
    number: "10",
    title: "Speicherdauer",
    content: (
      <>
        Personenbezogene Daten werden nur so lange gespeichert, wie dies
        für den jeweiligen Verarbeitungszweck erforderlich ist.

        <br /><br />

        Sobald der Zweck der Verarbeitung entfällt, werden die betreffenden
        Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
        oder sonstigen rechtlichen Gründe einer Löschung entgegenstehen.

        <br /><br />

        Die konkrete Speicherdauer richtet sich nach der Art der jeweiligen
        Daten und den gesetzlichen Vorgaben.

        <br /><br />

        Für Kontaktanfragen erfolgt die Löschung grundsätzlich nach
        abschließender Bearbeitung, sofern keine gesetzlichen
        Aufbewahrungspflichten oder sonstigen berechtigten Gründe
        einer längeren Speicherung entgegenstehen.
      </>
    ),
  },
  {
    number: "11",
    title: "Ihre Rechte als betroffene Person",
    content: (
      <>
        Im Rahmen der geltenden Datenschutzgesetze stehen Ihnen
        insbesondere folgende Rechte zu:

        <ul className="my-4 list-disc space-y-3 pl-6">
          <li>
            <strong>Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht,
            Auskunft über Ihre bei uns gespeicherten personenbezogenen
            Daten zu erhalten.
          </li>

          <li>
            <strong>Berichtigung (Art. 16 DSGVO):</strong> Sie können die
            Berichtigung unrichtiger oder die Vervollständigung
            unvollständiger Daten verlangen.
          </li>

          <li>
            <strong>Löschung (Art. 17 DSGVO):</strong> Sie können unter
            bestimmten Voraussetzungen die Löschung Ihrer personenbezogenen
            Daten verlangen.
          </li>

          <li>
            <strong>Einschränkung (Art. 18 DSGVO):</strong> Sie können unter
            bestimmten Voraussetzungen die Einschränkung der Verarbeitung
            verlangen.
          </li>

          <li>
            <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können
            verlangen, dass Ihnen bestimmte Daten in einem strukturierten,
            gängigen und maschinenlesbaren Format bereitgestellt werden.
          </li>

          <li>
            <strong>Widerspruch (Art. 21 DSGVO):</strong> Sie können aus
            Gründen, die sich aus Ihrer besonderen Situation ergeben,
            der Verarbeitung auf Grundlage berechtigter Interessen
            widersprechen.
          </li>

          <li>
            <strong>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO):</strong>
            Eine erteilte Einwilligung können Sie jederzeit mit Wirkung
            für die Zukunft widerrufen.
          </li>
        </ul>

        Zur Ausübung Ihrer Rechte können Sie sich jederzeit über die
        angegebenen Kontaktdaten an uns wenden.
      </>
    ),
  },
  {
    number: "12",
    title: "Beschwerderecht bei einer Aufsichtsbehörde",
    content: (
      <>
        Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer
        Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht
        sind, dass die Verarbeitung Ihrer personenbezogenen Daten
        gegen geltendes Datenschutzrecht verstößt.

        <br /><br />

        Für Nordrhein-Westfalen ist insbesondere folgende
        Aufsichtsbehörde zuständig:

        <br /><br />

        <strong>
          Landesbeauftragte für Datenschutz und Informationsfreiheit
          Nordrhein-Westfalen
        </strong>

        <br /><br />

        Kavalleriestraße 2–4
        <br />
        40213 Düsseldorf
        <br />
        Deutschland

        <br /><br />

        <a
          href="https://www.ldi.nrw.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#173B70] underline underline-offset-4 hover:text-[#24569A]"
        >
          www.ldi.nrw.de
        </a>
      </>
    ),
  },
  {
    number: "13",
    title: "Keine automatisierte Entscheidungsfindung",
    content: (
      <>
        Eine automatisierte Entscheidungsfindung einschließlich Profiling
        im Sinne von Art. 22 DSGVO findet über diese Website nicht statt.
      </>
    ),
  },
  {
    number: "14",
    title: "Aktualität dieser Datenschutzerklärung",
    content: (
      <>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
        wenn dies aufgrund rechtlicher, technischer oder organisatorischer
        Änderungen erforderlich wird.

        <br /><br />

        Es gilt jeweils die auf dieser Website veröffentlichte aktuelle Fassung.
      </>
    ),
  },
];

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* Header */}
      <section className="border-b border-slate-200 bg-[#102D55] px-6 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-200">
            Rechtliche Informationen
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Datenschutzerklärung
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100">
            Der Schutz Ihrer persönlichen Daten ist uns wichtig.
            Nachfolgend informieren wir Sie darüber, welche
            personenbezogenen Daten wir verarbeiten und welche
            Rechte Ihnen zustehen.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">

          <div className="mb-12 border-b border-slate-200 pb-8">
            <p className="text-sm leading-7 text-slate-500">
              In den folgenden Abschnitten finden Sie alle wesentlichen
              Informationen zum Datenschutz auf unserer Website.
              Bei Fragen können Sie uns jederzeit kontaktieren.
            </p>
          </div>

          <div className="space-y-12">

            {sections.map((section) => (
              <article
                key={section.number}
                className="border-b border-slate-200 pb-10 last:border-0"
              >

                <div className="flex items-baseline gap-4">

                  <span className="shrink-0 text-sm font-semibold text-[#24569A]">
                    {section.number}
                  </span>

                  <h2 className="text-xl font-semibold tracking-tight text-[#102D55] sm:text-2xl">
                    {section.title}
                  </h2>

                </div>

                <div className="mt-5 text-sm leading-8 text-slate-600 sm:text-base [&_strong]:font-semibold [&_strong]:text-slate-800">
                  {section.content}
                </div>

              </article>
            ))}

          </div>

          {/* Contact */}
          <div className="mt-12 border-t border-slate-200 pt-10">

            <h2 className="text-xl font-semibold text-[#102D55]">
              Fragen zum Datenschutz?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Wenn Sie Fragen zur Verarbeitung Ihrer personenbezogenen
              Daten oder zur Ausübung Ihrer Rechte haben, können Sie
              sich jederzeit an uns wenden.
            </p>

            <Link
              to="/kontakt#kontaktformular"
              className="mt-5 inline-flex items-center rounded-lg bg-[#173B70] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#24569A]"
            >
              Kontakt aufnehmen
            </Link>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs leading-6 text-slate-400">
            {companyName} · Datenschutzerklärung
          </p>
        </div>
      </footer>

    </main>
  );
}