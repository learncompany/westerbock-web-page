import ObjektServiceSection from "./objekt-service-section";

import betreuung from "../../../assets/pictures/grundreinigung.jpg"
import bueroreinigung from "../../../assets/pictures/bueroreinigung.jpg"
import winterdienst from "../../../assets/pictures/winterdienst.jpg"
import glasreinigung from "../../../assets/pictures/glasreinigung.jpg"
import { SunMedium } from "lucide-react";
import ObjektServiceButton from "./objekt-service-button";

export default function PhotovoltaikReinigung() {
  return (

    <ObjektServiceSection
      id="photovoltaik"
      number="04"
      eyebrow="Photovoltaik Reinigung"
      title="Saubere Module für eine gepflegte Anlage."
      icon={SunMedium}
      image={glasreinigung}
      imageAlt="Reinigung von Photovoltaikmodulen"
      reversed
      dark
    >

      <p>
        Photovoltaikanlagen sind dauerhaft Witterung, Staub, Pollen und
        weiteren Umwelteinflüssen ausgesetzt.
      </p>

      <p>
        Eine fachgerechte Reinigung kann dazu beitragen, hartnäckige
        Ablagerungen zu entfernen und die Anlage dauerhaft gepflegt zu
        halten.
      </p>

      <p>
        Vor der Durchführung prüfen wir die Gegebenheiten und stimmen
        Reinigungsverfahren und Zugänglichkeit auf die jeweilige Anlage ab.
      </p>

      <ObjektServiceButton
        label="Photovoltaik Reinigung anfragen"
        light
      />

    </ObjektServiceSection>
  )
}