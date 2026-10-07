import { Building2 } from "lucide-react"
import ServiceSection from "./service-section"
import bueroreinigung from "../../../assets/pictures/bueroreinigung.jpg"
import ServiceList from "./service-list"
import ServiceButton from "./service-button"

export default function Bueroreinigung() {
  const items = [
    "Arbeitsflächen",
    "Bodenflächen",
    "Besprechungsräume",
    "Empfangsbereiche",
    "Teeküchen",
    "Sanitäranlagen",
    "Gemeinschaftsbereiche",
    "Abfallentsorgung",
    "Weitere Leistungen nach Vereinbarung",
  ]

  return (
    <ServiceSection
      id="bueroreinigung"
      number="03"
      eyebrow="Büroreinigung"
      title="Saubere Arbeitsplätze für einen professionellen Alltag."
      icon={Building2}
      image={bueroreinigung}
      imageAlt="Saubere und gepflegte Büroräume"
    >

      <p>
        Saubere Büroräume tragen zu einem angenehmen Arbeitsumfeld bei
        und hinterlassen bei Mitarbeitern, Kunden und Geschäftspartnern
        einen professionellen Eindruck.
      </p>

      <p>
        Wir übernehmen die regelmäßige Reinigung von Büroflächen und
        stimmen unsere Einsatzzeiten auf die betrieblichen Abläufe
        unserer Auftraggeber ab.
      </p>

      <ServiceList
        title="Leistungsübersicht"
        items={items}
      />

      <ServiceButton label="Büroreinigung anfragen" />

    </ServiceSection>
  )
}