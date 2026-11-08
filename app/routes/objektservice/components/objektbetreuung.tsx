import { ClipboardCheck } from "lucide-react"
import ObjektServiceSection from "./objekt-service-section"
import bueroreinigung from "../../../assets/pictures/bueroreinigung.jpg"
import ObjektServiceList from "./objekt-service-list"
import ObjektServiceButton from "./objekt-service-button"


export default function Objektbetreuung() {

  const items = [
    "Unterhaltsreinigung",
    "Treppenhausreinigung",
    "Grünflächenpflege",
    "Außenanlagenpflege",
    "Hausmeisterservice",
    "Winterdienst",
    "Kontrollgänge",
    "Weitere vereinbarte Leistungen",
  ]

  return (
    <ObjektServiceSection
      id="objektbetreuung"
      number="02"
      eyebrow="Objektbetreuung"
      title="Ein Ansprechpartner für Ihr gesamtes Objekt."
      icon={ClipboardCheck}
      image={bueroreinigung}
      imageAlt="Ganzheitliche Objektbetreuung"
      reversed
      dark
    >

      <p>
        Mit unserer Objektbetreuung bündeln wir verschiedene
        Dienstleistungen rund um Ihre Immobilie.
      </p>

      <p>
        Statt unterschiedliche Ansprechpartner für Reinigung,
        Außenanlagen und laufende Betreuung zu koordinieren, können
        vereinbarte Leistungen zentral über uns organisiert werden.
      </p>

      <ObjektServiceList
        title="Mögliche Kombination"
        items={items}
        dark
      />

      <ObjektServiceButton
        label="Objektbetreuung anfragen"
        light
        linkUrl="/kontakt"
      />

    </ObjektServiceSection>
  )
}