import { Leaf } from "lucide-react"
import GruenServiceSection from "./gruen-service-section"
import laubreinigung from "../../../assets/pictures/laubenbeseitigung.jpg"
import GruenServiceList from "./gruen-service-list"
import GruenServiceButton from "./gruen-service-button"

export default function Rasenpflege() {
  const items = [
    "Rasenmähen",
    "Pflege von Rasenkanten",
    "Entfernung von Schnittgut",
    "Saisonale Rasenpflege",
    "Pflege größerer Grünflächen",
  ]

  return (
    <GruenServiceSection
      id="rasenpflege"
      number="02"
      eyebrow="Rasenpflege"
      title="Gepflegte Grünflächen brauchen regelmäßige Aufmerksamkeit."
      icon={Leaf}
      image={laubreinigung}
      imageAlt="Gepflegte Rasen- und Grünflächen"
      reversed
      dark
    >

      <p>
        Wir übernehmen die regelmäßige Pflege von Rasenflächen rund um
        Wohnanlagen, Gewerbeobjekte, Einrichtungen und weitere
        Grundstücke.
      </p>

      <p>
        Häufigkeit und Umfang richten sich nach Fläche, Jahreszeit und
        gewünschtem Pflegezustand.
      </p>

      <GruenServiceList
        title="Leistungsübersicht"
        items={items}
      />

      <GruenServiceButton
        label="Rasenpflege anfragen"
        light
      />

    </GruenServiceSection>
  )
}