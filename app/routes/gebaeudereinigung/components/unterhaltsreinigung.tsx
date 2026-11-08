import { ClipboardCheck } from "lucide-react"
import ServiceSection from "./service-section"
import bueroreinigung from "../../../assets/pictures/bueroreinigung.jpg"
import ServiceList from "./service-list"
import ServiceButton from "./service-button"

export default function Unterhaltsreinigung() {
  const items = [
    "Bürogebäude",
    "Schulen",
    "Bildungseinrichtungen",
    "Praxen",
    "Soziale Einrichtungen",
    "Gewerbeobjekte",
    "Wohnanlagen",
    "Gemeinschaftsflächen",
    "Sanitärbereiche",
  ]

  return (
    <ServiceSection
      id="unterhaltsreinigung"
      number="01"
      eyebrow="Unterhaltsreinigung"
      title="Regelmäßige Sauberkeit für dauerhaft gepflegte Räume."
      icon={ClipboardCheck}
      image={bueroreinigung}
      imageAlt="Professionelle Unterhaltsreinigung"
    >

      <p>
        Die Unterhaltsreinigung bildet die Grundlage für dauerhaft saubere
        und hygienische Räumlichkeiten.
      </p>

      <p>
        Wir übernehmen wiederkehrende Reinigungsarbeiten in individuell
        vereinbarten Intervallen.
      </p>

      <p>
        Dabei kann die Reinigung täglich, mehrmals wöchentlich,
        wöchentlich oder in anderen abgestimmten Abständen durchgeführt
        werden.
      </p>

      <p>
        Vor Beginn der Zusammenarbeit definieren wir gemeinsam, welche
        Räume und Flächen gereinigt werden und welche Leistungen
        regelmäßig durchgeführt werden sollen.
      </p>

      <ServiceList
        title="Geeignet für"
        items={items}
      />

      <ServiceButton linkUrl="/kontakt" label="Angebot für Unterhaltsreinigung anfragen" />

    </ServiceSection>
  )
}