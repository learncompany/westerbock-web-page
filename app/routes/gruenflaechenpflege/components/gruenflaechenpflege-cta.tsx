import { ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "../../../components/ui/button";
import GruenServiceButton from "./gruen-service-button";

export default function GruenflaechenpflegeCTA() {
  return (
    <section className="px-5 pb-24 pt-24 sm:px-8 sm:pb-32">

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0F446A]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(19,144,51,0.5),transparent_32%),radial-gradient(circle_at_10%_100%,rgba(19,144,51,0.15),transparent_35%)]" />

        <div className="absolute -right-32 -top-32 size-[450px] rounded-full border-[60px] border-white/[0.025]" />

        <div className="relative px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3 text-[#6CCF82]">

              <Sparkles className="size-5" />

              <span className="text-sm font-medium">
                Grünflächenpflege aus einer Hand
              </span>

            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">

              Gepflegte Außenanlagen

              <span className="block text-[#6CCF82]">
                beginnen mit dem richtigen Partner.
              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Ob regelmäßige Garten- und Rasenpflege, saisonale
              Laubbeseitigung oder zuverlässiger Winterdienst – wir
              stimmen Umfang und Ablauf individuell auf Ihr Grundstück ab.
            </p>

            {/* <Button
              size="lg"
              className="group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-7 text-white shadow-xl shadow-black/20 hover:opacity-90"
            >

              Angebot anfragen

              <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

            </Button> */}
            <GruenServiceButton label={"Angebot anfragen"} linkUrl={"/kontakt"}/>

            

          </div>

        </div>

      </div>

    </section>
  )
}