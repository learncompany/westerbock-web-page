import { Badge } from "../../../components/ui/badge";
import ServiceButton from "./service-button";
import { Card } from "../../../components/ui/card";
import { Check, Hammer } from "lucide-react";

export default function Baureinigung() {
  return (
    <section
      id="baureinigung"
      className="relative overflow-hidden bg-[#F5F8F6] py-28 sm:py-36"
    >

      <div className="absolute right-0 top-0 size-[500px] rounded-full bg-[#139033]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

          <div>

            <Badge
              variant="outline"
              className="border-[#139033]/30 bg-white text-[#12641A]"
            >
              05 · Baureinigung
            </Badge>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
              Sauber übergeben.
              <span className="block text-[#139033]">
                Bereit für den nächsten Schritt.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#6F7782]">
              Baureinigung umfasst die Reinigung von Flächen und Bereichen
              im Zusammenhang mit Bau-, Umbau- oder Renovierungsarbeiten.
              Der konkrete Leistungsumfang wird individuell auf das
              jeweilige Objekt und den Baufortschritt abgestimmt.
            </p>

            <div className="mt-9">

              <ServiceButton label="Angebot für Baureinigung anfragen" />

            </div>

          </div>


          <div className="relative">

            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#139033]/5 blur-xl" />

            <Card className="relative overflow-hidden rounded-[2.5rem] border-0 bg-[#0F446A] p-8 text-white shadow-2xl sm:p-10">

              <div className="flex size-14 items-center justify-center rounded-2xl bg-[#139033]/20">
                <Hammer className="size-7 text-[#6CCF82]" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Individuell abgestimmt
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                Bei Bau- und Renovierungsprojekten können Anforderungen
                und Zeitpläne sehr unterschiedlich sein. Deshalb stimmen
                wir Umfang und Ablauf individuell auf Ihr Projekt ab.
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <div className="mt-7 space-y-4">

                {[
                  "Individuelle Abstimmung",
                  "Berücksichtigung des Baufortschritts",
                  "Flexible Leistungsplanung",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/75"
                  >

                    <span className="flex size-5 items-center justify-center rounded-full bg-[#139033]/20">
                      <Check className="size-3 text-[#6CCF82]" />
                    </span>

                    {item}

                  </div>

                ))}

              </div>

            </Card>

          </div>

        </div>

      </div>

    </section>
  )
}