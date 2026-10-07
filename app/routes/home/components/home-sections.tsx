import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Building2,
  Leaf,
  Wrench,
  ShieldCheck,
  Sparkles,
  MoveUpRight,
  Image as ImageIcon,
} from "lucide-react"

import logo from "../../../assets/only-b-r-leaf.svg"

import { motion, useScroll, useTransform } from "motion/react"

import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"

import glasreinigung from "../../../assets/pictures/glasreinigung.jpg"
import laubreinigung from "../../../assets/pictures/laubenbeseitigung.jpg"
import winterdienst from "../../../assets/pictures/winterdienst.jpg"
import bueroreinigung from "../../../assets/pictures/bueroreinigung.jpg"

import logoFull from "../../../assets/pictures/logo/berg-rhein-all-copy.png"
import imgSecondary from "../../../assets/pictures/bueroreinigung.jpg"

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

const benefits = [
  {
    number: "01",
    title: "Persönlich",
    text: "Direkte Ansprechpartner statt komplizierter Kommunikationswege.",
  },
  {
    number: "02",
    title: "Zuverlässig",
    text: "Verbindliche Absprachen und eine strukturierte Umsetzung.",
  },
  {
    number: "03",
    title: "Erfahren",
    text: "Acht Jahre praktische Erfahrung in Reinigung und Objektbetreuung.",
  },
  {
    number: "04",
    title: "Flexibel",
    text: "Leistungen, die sich an Objekt, Umfang und Anforderungen orientieren.",
  },
]

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
]

export function HomeSectionsWithImages() {
  return (
    <main className="bg-white text-[#0F446A]">

      {/* =====================================================
          INTRO / STATEMENT
      ===================================================== */}

      <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">

        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#139033]/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-0 top-1/3 -z-10 size-[400px] rounded-full bg-[#0F446A]/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_0.9fr]">

            <div>

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-10 bg-gradient-to-r from-[#139033] to-[#12641A]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6F7782]">
                  Bergisch Rheinische Gebäudedienste
                </span>

              </div>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">

                Wir halten

                <span className="block bg-gradient-to-r from-[#139033] via-[#12641A] to-[#0F446A] bg-clip-text text-transparent">
                  Immobilien
                </span>

                in Bewegung.

              </h2>

            </div>

            <div className="lg:pb-2">

              <p className="text-lg leading-8 text-[#6F7782]">
                Reinigung, Grünflächenpflege und Objektservice – drei
                Bereiche, ein zuverlässiger Ansprechpartner.
              </p>

              <div className="mt-7 flex items-center gap-3">

                <div className="size-2 rounded-full bg-[#139033] shadow-[0_0_15px_#139033]" />

                <span className="text-sm font-medium text-[#0F446A]">
                  8 Jahre praktische Erfahrung
                </span>

              </div>

            </div>

          </div>

          {/* Decorative image strip */}

          <div className="relative mt-20 h-[280px] overflow-hidden rounded-[2.5rem] bg-[#0F446A]">

            <motion.img
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="/images/intro/immobilie.jpg"
              alt="Gepflegte Immobilie"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0F446A]/85 via-[#0F446A]/30 to-[#139033]/30" />

            <div className="absolute inset-0 flex items-end p-7 sm:p-10">

              <div className="max-w-xl text-white">

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6CCF82]">
                  Ganzheitliche Betreuung
                </span>

                <p className="mt-3 text-xl font-medium sm:text-2xl">
                  Von der ersten Reinigung bis zur langfristigen
                  Objektbetreuung.
                </p>

              </div>

            </div>

            <div className="absolute right-6 top-6 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white backdrop-blur-md">
              {/* <ImageIcon className="size-5 text-white/80" /> */}
              <img src={logo} className="size-8" />
            </div>

          </div>

        </div>
      </section>


      {/**
 * TRANSITION
 * 
 */}
      {/* <section className="w-fit w-full h-24 bg-linear-to-b from-white to-[#0F446A] min-h-24">
        Hola
      </section> */}

      {/* =====================================================
          SERVICE SYSTEM
      ===================================================== */}


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


      {/* =====================================================
          IMAGE + EXPERIENCE
      ===================================================== */}

      <section className="relative overflow-hidden py-28 sm:py-36">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

            {/* IMAGE COMPOSITION */}

            <div className="relative min-h-[600px]">

              {/* Main image */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 top-0 h-[450px] w-[82%] overflow-hidden rounded-[2.5rem]"
              >

                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1 }}
                  src={logoFull}
                  alt="Team der Bergisch Rheinische Gebäudedienste"
                  className="h-full w-full object-contain p-1"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F446A]/80 via-transparent to-[#139033]/20" />

                <div className="absolute bottom-7 left-7">

                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Erfahrung
                  </span>

                  <p className="mt-1 text-7xl font-bold tracking-tight text-white">
                    8+
                  </p>

                  <p className="text-sm text-white/70">
                    Jahre praktische Erfahrung
                  </p>

                </div>

              </motion.div>


              {/* Secondary image */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 right-0 h-[270px] w-[55%] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl"
              >

                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  src={imgSecondary}
                  alt="Betreutes Objekt"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F446A]/70 to-transparent" />

                <div className="absolute bottom-5 left-5 flex items-center gap-3">

                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#139033] text-white">
                    <ShieldCheck className="size-5" />
                  </div>

                  <span className="text-sm font-medium text-white">
                    Persönlicher Service
                  </span>

                </div>

              </motion.div>


              {/* Decorative green shape */}

              <motion.div
                animate={{
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 top-20 -z-10 size-48 rounded-full border-[35px] border-[#139033]/10"
              />

            </div>


            {/* CONTENT */}

            <div className="flex flex-col justify-center">

              <Badge
                variant="outline"
                className="w-fit border-[#139033]/30 bg-[#139033]/5 text-[#12641A]"
              >
                Unser Anspruch
              </Badge>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">

                Nicht nur eine

                <span className="block bg-gradient-to-r from-[#139033] to-[#12641A] bg-clip-text text-transparent">
                  Dienstleistung.
                </span>

              </h2>

              <p className="mt-7 text-lg leading-8 text-[#6F7782]">
                Wir verstehen Gebäudedienstleistungen als langfristige
                Partnerschaft. Deshalb setzen wir auf zuverlässige Abläufe,
                direkte Kommunikation und ein Ergebnis, das dauerhaft
                überzeugt.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">

                {benefits.map((benefit) => (

                  <div key={benefit.number} className="group">

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-xs text-[#139033]">
                        {benefit.number}
                      </span>

                      <div className="h-px flex-1 bg-slate-200 transition-colors group-hover:bg-[#139033]/30" />

                    </div>

                    <h3 className="mt-4 font-semibold text-[#0F446A]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6F7782]">
                      {benefit.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE MOSAIC
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F5F8F6] py-28 sm:py-36">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <div className="flex flex-col justify-center">

              <Badge
                variant="outline"
                className="w-fit border-[#139033]/30 bg-white text-[#12641A]"
              >
                Ganzheitlicher Service
              </Badge>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">

                Innen.

                <span className="block text-[#139033]">
                  Außen.
                </span>

                Rundum.

              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-[#6F7782]">
                Von der Reinigung im Gebäude bis zur Pflege der
                Außenflächen und der technischen beziehungsweise
                organisatorischen Betreuung.
              </p>

            </div>


            {/* Mosaic */}

            <div className="grid grid-cols-2 gap-3 sm:gap-5">

              <ImageTile
                src={glasreinigung}
                alt="Gebäudereinigung"
                className="h-65 sm:h-85"
                label="Reinigung"
              />

              <ImageTile
                src={laubreinigung}
                alt="Gartenpflege"
                className="mt-12 h-65 sm:h-85"
                label="Grünflächen"
              />

              <ImageTile
                src={winterdienst}
                alt="Objektservice"
                className="h-55 sm:h-70"
                label="Objektservice"
              />

              <ImageTile
                src={bueroreinigung}
                alt="Professionelle Gebäudedienstleistung"
                className="mt-12 h-55 sm:h-70"
                label="Details"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICE MATRIX
      ===================================================== */}

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


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="relative overflow-hidden py-28 sm:py-36">

        <div className="absolute left-1/2 top-1/2 -z-10 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#139033]/5 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <Badge
              variant="outline"
              className="border-[#139033]/30 bg-[#139033]/5 text-[#12641A]"
            >
              Zusammenarbeit
            </Badge>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">

              Klarer Ablauf.

              <span className="block bg-gradient-to-r from-[#139033] to-[#12641A] bg-clip-text text-transparent">
                Kein unnötiger Aufwand.
              </span>

            </h2>

          </div>


          <div className="relative mt-20">

            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#139033]/30 to-transparent lg:block" />

            <div className="grid gap-12 lg:grid-cols-4">

              {[
                ["01", "Anfrage", "Sie teilen uns kurz mit, was Sie benötigen."],
                ["02", "Kennenlernen", "Wir besprechen Anforderungen und Rahmenbedingungen."],
                ["03", "Konzept", "Sie erhalten eine passende und transparente Lösung."],
                ["04", "Umsetzung", "Wir übernehmen die vereinbarten Leistungen zuverlässig."],
              ].map(([number, title, text]) => (

                <div key={number} className="relative text-center">

                  <div className="relative mx-auto flex size-20 items-center justify-center rounded-full border border-[#139033]/20 bg-white shadow-xl shadow-[#0F446A]/5">

                    <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-[#139033] to-[#12641A] text-sm font-bold text-white shadow-lg">
                      {number}
                    </div>

                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-[#0F446A]">
                    {title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#6F7782]">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA IMAGE
      ===================================================== */}

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

    </main>
  )
}


/* =========================================================
   IMAGE TILE
========================================================= */

function ImageTile({
  src,
  alt,
  label,
  className = "",
}: {
  src: string
  alt: string
  label: string
  className?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className={`group relative overflow-hidden rounded-[2rem] ${className}`}
    >

      <motion.img
        src={src}
        alt={alt}
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0F446A]/80 via-transparent to-[#139033]/10" />

      <div className="absolute bottom-5 left-5">

        <span className="rounded-full border border-white/20 bg-[#0F446A]/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          {label}
        </span>

      </div>

      <div className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">

        <ArrowUpRight className="size-4 text-white" />

      </div>

    </motion.div>
  )
}
