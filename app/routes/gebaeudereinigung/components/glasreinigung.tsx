import { GlassWater } from "lucide-react"
import ServiceSection from "./service-section"
import glasreinigung from "../../../assets/pictures/glasreinigung.jpg"
import ServiceList from "./service-list"
import ServiceButton from "./service-button"


export default function Glasreinigung() {
  const items = [
    "Fensterreinigung",
    "Rahmenreinigung",
    "Glastüren",
    "Glastrennwände",
    "Schaufenster",
    "Weitere Glasflächen",
  ]

  return (
    <ServiceSection
      id="glasreinigung"
      number="04"
      eyebrow="Glasreinigung"
      title="Klare Sicht. Gepflegter Eindruck."
      icon={GlassWater}
      image={glasreinigung}
      imageAlt="Professionelle Glasreinigung"
      reversed
      dark
    >

      <p>
        Fenster und Glasflächen prägen das Erscheinungsbild eines Gebäudes.
      </p>

      <p>
        Wir reinigen Glasflächen professionell und stimmen Reinigungsumfang
        und Intervalle individuell auf das jeweilige Objekt ab.
      </p>

      <p>
        Neben klassischen Fenstern können auch Glastüren, Trennwände und
        weitere zugängliche Glasflächen in die Reinigung einbezogen werden.
      </p>

      <ServiceList
        title="Leistungsübersicht"
        items={items}
      />

      <ServiceButton
        label="Angebot für Glasreinigung anfragen"
        light
      />

    </ServiceSection>
  )
}