import { Wrench } from "lucide-react"
import ObjektServiceSection from "./objekt-service-section"
import betreuung from "../../../assets/pictures/grundreinigung.jpg"
import ObjektServiceList from "./objekt-service-list"
import ObjektServiceButton from "./objekt-service-button"

export default function Hausmeisterservice() {

  const items = [
    "Regelmäßige Objektbegehungen",
    "Kontrolle von Gemeinschaftsflächen",
    "Kontrolle von Beleuchtung und Zugängen",
    "Kleinere zulässige Arbeiten",
    "Meldung festgestellter Schäden",
    "Koordination notwendiger Fachunternehmen",
    "Kontrolle der Außenbereiche",
    "Unterstützung bei Ordnung und Sauberkeit",
  ]

  return (
    <ObjektServiceSection
      id="hausmeisterservice"
      number="01"
      eyebrow="Hausmeisterservice"
      title="Einer, der das Objekt im Blick behält."
      icon={Wrench}
      image={betreuung}
      imageAlt="Professionelle Objektbetreuung"
    >

      <p>
        Ein zuverlässig betreutes Gebäude benötigt regelmäßige Kontrollen
        und Ansprechpartner, die sich um anfallende Aufgaben kümmern.
      </p>

      <p>
        Unser Hausmeisterservice unterstützt Eigentümer,
        Hausverwaltungen, Unternehmen und Einrichtungen bei der laufenden
        Betreuung ihrer Immobilien.
      </p>

      <ObjektServiceList
        title="Mögliche Leistungen"
        items={items}
      />

      <p className="!mt-6 text-sm">
        Die Durchführung handwerklicher Arbeiten erfolgt selbstverständlich
        nur im Rahmen der jeweils zulässigen Tätigkeiten.
      </p>

      <ObjektServiceButton label="Hausmeisterservice anfragen" />

    </ObjektServiceSection>
  )
}