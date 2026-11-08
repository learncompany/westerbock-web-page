import { Flower2 } from "lucide-react"
import GruenServiceSection from "./gruen-service-section"
import betreuung from "../../../assets/pictures/entruemplung.jpg"
import GruenServiceList from "./gruen-service-list"
import GruenServiceButton from "./gruen-service-button"

export default function Gartenpflege() {
  const items = [
    "Allgemeine Gartenpflege",
    "Pflege von Grünanlagen",
    "Entfernung von Wildwuchs",
    "Pflege von Beeten",
    "Saisonale Arbeiten",
    "Reinigung von Außenflächen",
    "Weitere Pflegearbeiten nach Vereinbarung",
  ]

  return (
    <GruenServiceSection
      id="gartenpflege"
      number="01"
      eyebrow="Gartenpflege"
      title="Gepflegte Außenanlagen das ganze Jahr."
      icon={Flower2}
      image={betreuung}
      imageAlt="Gepflegte Außenanlage"
    >

      <p>
        Außenanlagen sind die Visitenkarte eines Grundstücks.
      </p>

      <p>
        Wir übernehmen regelmäßige Pflegearbeiten für gewerbliche,
        private, institutionelle und öffentliche Grundstücke.
      </p>

      <p>
        Je nach Bedarf können einzelne Arbeiten oder eine fortlaufende
        Betreuung vereinbart werden.
      </p>

      <GruenServiceList
        title="Leistungsübersicht"
        items={items}
      />

      <GruenServiceButton label="Gartenpflege anfragen" linkUrl={"/kontakt"} />

    </GruenServiceSection>
  )
}