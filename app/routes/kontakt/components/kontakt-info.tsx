import { Mail, MapPin, Phone } from "lucide-react";
import KontaktInfoCard from "./kontakt-info-card";

export default function KontaktInfo() {
  return (
    <section className="bg-[#F5F8F6] py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid gap-6 md:grid-cols-3">

          <KontaktInfoCard
            icon={Phone}
            title="Persönlich sprechen"
            text="Sie möchten lieber direkt mit uns sprechen? Wir beantworten Ihre Fragen gerne persönlich."
            action="Rückruf anfordern"
          />

          <KontaktInfoCard
            icon={Mail}
            title="Anfrage senden"
            text="Beschreiben Sie uns kurz Ihr Objekt und Ihren Bedarf. Wir melden uns anschließend bei Ihnen."
            action="Jetzt Angebot anfragen"
          />

          <KontaktInfoCard
            icon={MapPin}
            title="Regional für Sie da"
            text="Unser Schwerpunkt liegt in Wuppertal, Köln, dem Bergischen Land und dem Rheinland."
            action="Region entdecken"
          />

        </div>

      </div>

    </section>
  )
}