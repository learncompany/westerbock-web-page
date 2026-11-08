import ObjektServiceSection from "./objekt-service-section"
import betreuung from "../../../assets/pictures/grundreinigung.jpg"
import { PackageOpen } from "lucide-react"
import ObjektServiceList from "./objekt-service-list"
import ObjektServiceButton from "./objekt-service-button"

export default function Entruempelung() {

  const items = [
    "Wohnungen",
    "Keller",
    "Dachböden",
    "Büroräume",
    "Gewerbeflächen",
    "Lagerräume",
    "Nebenräume",
  ]

  return (
    <ObjektServiceSection
      id="entruempelung"
      number="03"
      eyebrow="Entrümpelung"
      title="Platz schaffen. Sauber übergeben."
      icon={PackageOpen}
      image={betreuung}
      imageAlt="Räumung und Entrümpelung"
    >

      <p>
        Bei Umzügen, Leerständen, Haushaltsauflösungen oder der Räumung
        gewerblicher Flächen können größere Mengen nicht mehr benötigter
        Gegenstände entstehen.
      </p>

      <p>
        Wir unterstützen bei der Räumung und Entrümpelung von vereinbarten
        Flächen und sorgen anschließend auf Wunsch für eine entsprechende
        Reinigung.
      </p>

      <ObjektServiceList
        title="Mögliche Einsatzbereiche"
        items={items}
      />

      <ObjektServiceButton label="Entrümpelung anfragen" linkUrl="/kontakt"/>

    </ObjektServiceSection>
  )
}