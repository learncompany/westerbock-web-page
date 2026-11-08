import { Leaf } from "lucide-react"
import GruenServiceSection from "./gruen-service-section"
import laubreinigung from "../../../assets/pictures/laubenbeseitigung.jpg"
import winterdienst from "../../../assets/pictures/winterdienst.jpg"
import betreuung from "../../../assets/pictures/entruemplung.jpg"
import GruenServiceList from "./gruen-service-list"
import GruenServiceButton from "./gruen-service-button"

export default function Laubbeseitigung() {
  const items = [
    "Gehwege",
    "Eingangsbereiche",
    "Parkplätze",
    "Hofflächen",
    "Grünflächen",
    "Zufahrten",
    "Entsorgung nach Vereinbarung",
  ]

  return (
    <GruenServiceSection
      id="laubbeseitigung"
      number="03"
      eyebrow="Laubbeseitigung"
      title="Saubere Wege und Flächen auch im Herbst."
      icon={Leaf}
      image={laubreinigung}
      imageAlt="Laubbeseitigung auf Außenflächen"
    >

      <p>
        Herabfallendes Laub beeinträchtigt nicht nur das Erscheinungsbild
        einer Außenanlage. Auf Gehwegen und Eingangsbereichen kann nasses
        Laub außerdem zur Rutschgefahr werden.
      </p>

      <p>
        Wir übernehmen die regelmäßige Beseitigung von Laub auf
        vereinbarten Flächen.
      </p>

      <GruenServiceList
        title="Leistungsübersicht"
        items={items}
      />

      <GruenServiceButton label="Laubbeseitigung anfragen" linkUrl="/kontakt"/>

    </GruenServiceSection>
  )
}