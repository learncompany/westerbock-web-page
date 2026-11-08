import { SprayCan } from "lucide-react"
import ServiceSection from "./service-section"
import winterdienst from "../../../assets/pictures/winterdienst.jpg"
import ServiceButton from "./service-button"
import ServiceList from "./service-list"

export default function Grundreinigung() {
  const items = [
    "Bodenflächen",
    "Sanitärbereiche",
    "Küchenbereiche",
    "Leerstände",
    "Objekte nach Mieterwechsel",
    "Stark beanspruchte Räume",
    "Saisonale Intensivreinigungen",
  ]

  return (
    <ServiceSection
      id="grundreinigung"
      number="06"
      eyebrow="Grundreinigung"
      title="Wenn normale Reinigung nicht mehr ausreicht."
      icon={SprayCan}
      image={winterdienst}
      imageAlt="Intensive professionelle Reinigung"
    >

      <p>
        Bei stärkeren oder über längere Zeit entstandenen Verschmutzungen
        kann eine intensive Grundreinigung erforderlich sein.
      </p>

      <p>
        Dabei werden Flächen und Bereiche deutlich umfassender bearbeitet
        als bei einer regelmäßigen Unterhaltsreinigung.
      </p>

      <p>
        Vor Beginn prüfen wir den Zustand und legen gemeinsam mit dem
        Auftraggeber den notwendigen Umfang fest.
      </p>

      <ServiceList
        title="Geeignet beispielsweise für"
        items={items}
      />

      <ServiceButton label="Grundreinigung anfragen" linkUrl="/kontakt" />

    </ServiceSection>
  )
}