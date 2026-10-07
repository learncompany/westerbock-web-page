import { DoorOpen } from "lucide-react"
import ServiceSection from "./service-section"
import laubreinigung from "../../../assets/pictures/laubenbeseitigung.jpg"
import ServiceList from "./service-list"
import ServiceButton from "./service-button"

export default function Treppenhausreinigung() {
  const items = [
    "Treppen und Podeste",
    "Eingangsbereiche",
    "Handläufe und Geländer",
    "Briefkastenanlagen",
    "Fensterbänke",
    "Aufzugbereiche",
    "Türen",
    "Entfernung von Staub und Spinnweben",
    "Reinigung weiterer Gemeinschaftsflächen",
  ]

  return (
    <ServiceSection
      id="treppenhausreinigung"
      number="02"
      eyebrow="Treppenhausreinigung"
      title="Der erste Eindruck beginnt im Treppenhaus."
      icon={DoorOpen}
      image={laubreinigung}
      imageAlt="Gepflegter Eingangs- und Treppenhausbereich"
      reversed
      dark
    >

      <p>
        Treppenhäuser und Eingangsbereiche werden täglich stark beansprucht
        und gehören gleichzeitig zu den ersten Bereichen, die Bewohner,
        Besucher oder Kunden wahrnehmen.
      </p>

      <p>
        Wir übernehmen die regelmäßige Reinigung von Treppenhäusern in
        Wohngebäuden, Gewerbeimmobilien und weiteren Objekten.
      </p>

      <p>
        Reinigungsumfang und Rhythmus werden individuell vereinbart.
      </p>

      <ServiceList
        title="Leistungsübersicht"
        items={items}
      />

      <ServiceButton
        label="Angebot für Treppenhausreinigung anfragen"
        light
      />

    </ServiceSection>
  )
}