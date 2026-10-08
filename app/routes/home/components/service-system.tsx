import { ArrowUpRight, Building2, Check, ChevronRight, Leaf, Wrench } from 'lucide-react'
import { motion } from 'motion/react'
import { Badge } from '../../../components/ui/badge'
import { Card } from '../../../components/ui/card'

import glasreinigung from "../../../assets/pictures/glasreinigung.jpg"
import winterdienst from "../../../assets/pictures/winterdienst.jpg"
import bueroreinigung from "../../../assets/pictures/bueroreinigung.jpg"

const companyServices = [
  {
    id: "01",
    title: "Gebäudereinigung",
    short: "Sauberkeit",
    description:
      "Professionelle Reinigungskonzepte für Büros, Gewerbeimmobilien, Wohnanlagen und öffentliche Einrichtungen.",
    icon: Building2,
    image: glasreinigung,
    imageAlt: "Professionelle Gebäudereinigung",
    items: [
      "Unterhaltsreinigung",
      "Büroreinigung",
      "Treppenhausreinigung",
      "Glasreinigung",
      "Baureinigung",
      "Grundreinigung",
    ],
  },
  {
    id: "02",
    title: "Grünflächenpflege",
    short: "Außenbereiche",
    description:
      "Gepflegte Außenanlagen zu jeder Jahreszeit – zuverlässig, flexibel und passend zu Ihrer Immobilie.",
    icon: Leaf,
    image: winterdienst,
    imageAlt: "Gepflegte Grünflächen",
    items: [
      "Gartenpflege",
      "Rasenpflege",
      "Laubarbeiten",
      "Winterdienst",
    ],
  },
  {
    id: "03",
    title: "Objektservice",
    short: "Betreuung",
    description:
      "Zuverlässige Unterstützung rund um Ihre Immobilie mit unterschiedlichen Leistungen aus einer Hand.",
    icon: Wrench,
    image: bueroreinigung,
    imageAlt: "Professionelle Objektbetreuung",
    items: [
      "Hausmeisterservice",
      "Objektbetreuung",
      "Entrümpelung",
      "Photovoltaik",
      "Schädlingsbekämpfung",
    ],
  },
]

export default function ServiceSystem() {
  return (
    <section className="relative overflow-hidden bg-[#0F446A] py-24 text-white sm:py-32">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(19,144,51,0.28),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(19,144,51,0.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <Badge className="border border-white/10 bg-white/10 text-white hover:bg-white/10">
                Unser Leistungssystem
              </Badge>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Drei Bereiche.
                <span className="block text-[#6CCF82]">
                  Ein Anspruch.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Wir verbinden unterschiedliche Dienstleistungen rund um
                Ihre Immobilie zu einem klaren und zuverlässigen
                Gesamtkonzept.
              </p>

            </div>

            <div className="hidden lg:block">

              <div className="flex size-20 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur">
                <ArrowUpRight className="size-7 text-[#6CCF82]" />
              </div>

            </div>

          </div>


          {/* Service cards */}

          <div className="mt-16 grid gap-5 lg:grid-cols-3">

            {companyServices.map((service) => {

              const Icon = service.icon

              return (
                <Card
                  key={service.id}
                  className=" pt-0 group relative overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.06] text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#6CCF82]/30 hover:bg-white/[0.09]"
                >

                  {/* IMAGE */}

                  <div className="relative h-64 overflow-hidden">

                    <motion.img
                      src={service.image}
                      alt={service.imageAlt}
                      initial={{ scale: 1.05 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full w-full object-cover"
                    />

                    {/* Image gradient */}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F446A] via-[#0F446A]/20 to-transparent" />

                    {/* Green gradient */}

                    <div className="absolute inset-0 bg-gradient-to-br from-[#139033]/20 via-transparent to-transparent opacity-70" />

                    {/* Number */}

                    <span className="absolute right-6 top-6 font-mono text-sm text-white/60">
                      {service.id}
                    </span>

                    {/* Icon */}

                    <div className="absolute bottom-6 left-6 flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-[#0F446A]/80 shadow-xl backdrop-blur-md">
                      <Icon className="size-6 text-[#6CCF82]" />
                    </div>

                  </div>


                  <div className="relative p-7 sm:p-9">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6CCF82]">
                      {service.short}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/55">
                      {service.description}
                    </p>

                    <div className="my-7 h-px bg-white/10" />

                    <div className="space-y-3">

                      {service.items.map((item) => (

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

                    <div className="mt-8 flex items-center gap-2 text-sm font-medium text-[#6CCF82]">
                      Mehr erfahren
                      <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>

                  </div>

                </Card>
              )
            })}

          </div>

        </div>
      </section>
  )
}
