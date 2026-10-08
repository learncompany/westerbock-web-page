import { MoveUpRight } from "lucide-react";
import { Badge } from "../../../components/ui/badge";

const audiences = [
  "Unternehmen",
  "Hausverwaltungen",
  "Eigentümer",
  "Wohnungsunternehmen",
  "Schulen",
  "Bildungseinrichtungen",
  "Soziale Einrichtungen",
  "Öffentliche Auftraggeber",
  "Gewerbekunden",
  "Privatkunden",
];


export default function ServiceMatrix() {
    return (
        <section className="bg-slate-50 py-24 sm:py-32">

            <div className="mx-auto max-w-7xl px-5 sm:px-8">

                <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                    <div>

                        <Badge
                            variant="outline"
                            className="border-[#0F446A]/20 bg-white text-[#0F446A]"
                        >
                            Für Ihre Immobilie
                        </Badge>

                        <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#0F446A] sm:text-5xl">

                            Was auch immer

                            <span className="block text-[#139033]">
                                gebraucht wird.
                            </span>

                        </h2>

                        <p className="mt-6 text-base leading-7 text-[#6F7782]">
                            Unsere Leistungen richten sich an Unternehmen,
                            Hausverwaltungen, Eigentümer, Wohnungsunternehmen,
                            Bildungseinrichtungen, soziale Einrichtungen,
                            öffentliche Auftraggeber und Gewerbekunden.
                        </p>

                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">

                        {audiences.map((item, index) => (

                            <div
                                key={item}
                                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#139033]/30 hover:shadow-lg hover:shadow-[#0F446A]/5"
                            >

                                <div className="flex items-center gap-4">

                                    <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#139033]/10 to-[#12641A]/10 text-xs font-semibold text-[#139033]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-sm font-medium text-[#0F446A]">
                                        {item}
                                    </span>

                                </div>

                                <MoveUpRight className="size-4 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#139033]" />

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    )
}
