import { ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "../../../components/ui/button";


export default function CtaImage() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0F446A]">

          <img
            src="/images/cta/property.jpg"
            alt="Gepflegtes Objekt"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0F446A]/95 via-[#0F446A]/80 to-[#12641A]/55" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(19,144,51,0.5),transparent_30%)]" />

          <div className="relative px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3 text-[#6CCF82]">

                <Sparkles className="size-5" />

                <span className="text-sm font-medium">
                  Gemeinsam für ein gepflegtes Objekt
                </span>

              </div>

              <h2 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">

                Bereit für einen

                <span className="block bg-gradient-to-r from-[#6CCF82] to-white bg-clip-text text-transparent">
                  zuverlässigen Partner?
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Ob regelmäßige Reinigung, Grünflächenpflege oder umfassender
                Objektservice – sprechen Sie uns an und erzählen Sie uns von
                Ihrem Vorhaben.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-[#139033] to-[#12641A] px-7 text-white shadow-xl shadow-black/20 hover:opacity-90"
                >
                  Anfrage stellen

                  <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>

                <Button
                  size="lg"
                  variant="ghost"
                  className="px-7 text-white hover:bg-white/10 hover:text-white"
                >
                  Leistungen ansehen

                  <ChevronRight className="ml-2 size-4" />
                </Button>

              </div>

            </div>

          </div>

        </div>

      </section>
  )
}
