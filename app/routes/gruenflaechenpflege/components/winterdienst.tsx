import { Snowflake } from "lucide-react"
import GruenServiceSection from "./gruen-service-section"
import winterdienst from "../../../assets/pictures/winterdienst.jpg"
import GruenServiceList from "./gruen-service-list"
import GruenServiceButton from "./gruen-service-button"

export default function Winterdienst() {
  const items = [
    "Gehwege",
    "Eingangsbereiche",
    "Treppen",
    "Zufahrten",
    "Parkflächen",
    "Hofflächen",
  ]

  return (
    <GruenServiceSection
      id="winterdienst"
      number="04"
      eyebrow="Winterdienst"
      title="Zuverlässig durch die kalte Jahreszeit."
      icon={Snowflake}
      image={winterdienst}
      imageAlt="Winterdienst auf einem gepflegten Grundstück"
      reversed
      dark
    >

      <p>
        Schnee und Glätte können Wege, Eingänge, Parkflächen und
        Zufahrten innerhalb kurzer Zeit beeinträchtigen.
      </p>

      <p>
        Im Rahmen unseres Winterdienstes übernehmen wir vereinbarte
        Räum- und Streuarbeiten für die betreuten Flächen.
      </p>

      <p>
        Leistungsumfang und Einsatzbereiche werden vor Beginn der
        Wintersaison eindeutig festgelegt.
      </p>

      <GruenServiceList
        title="Mögliche Bereiche"
        items={items}
      />

      <GruenServiceButton
        label="Winterdienst anfragen"
        light
        linkUrl="/kontakt"
      />

    </GruenServiceSection>
  )
}