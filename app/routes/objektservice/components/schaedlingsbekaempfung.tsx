import { ShieldCheck } from "lucide-react";
import ObjektServiceSection from "./objekt-service-section";
import winterdienst from "../../../assets/pictures/winterdienst.jpg"
import ObjektServiceButton from "./objekt-service-button";

export default function Schaedlingsbekaempfung() {

  return (
    <ObjektServiceSection
      id="schaedlingsbekaempfung"
      number="05"
      eyebrow="Schädlingsbekämpfung"
      title="Professionelle Unterstützung bei Schädlingsbefall."
      icon={ShieldCheck}
      image={winterdienst}
      imageAlt="Professionelle Unterstützung bei Schädlingsbefall"
    >

      <p>
        Schädlingsbefall erfordert schnelles und fachgerechtes Handeln.
      </p>

      <p>
        Entsprechende Leistungen werden ausschließlich durch hierfür
        qualifizierte Personen beziehungsweise geeignete Fachpartner
        durchgeführt.
      </p>

      <p>
        Nach Feststellung der Situation wird entschieden, welche
        Maßnahmen fachlich erforderlich und zulässig sind.
      </p>

      <p>
        Unser Ziel ist eine diskrete, zuverlässige und nachvollziehbare
        Abwicklung.
      </p>

      <ObjektServiceButton label="Anfrage Schädlingsbekämpfung" linkUrl="/kontakt"/>

    </ObjektServiceSection>
  )
}