import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Flower2,
  Leaf,
  Snowflake,
  Sparkles,
} from "lucide-react"

import { motion } from "motion/react"

import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"

import laubreinigung from "../../../assets/pictures/laubenbeseitigung.jpg"
import winterdienst from "../../../assets/pictures/winterdienst.jpg"
import betreuung from "../../../assets/pictures/entruemplung.jpg"


/* =========================================================
   PAGE
========================================================= */

export default function GruenflaechenpflegeSections() {
  return (
    <main className="bg-white text-[#0F446A]">

      <GruenflaechenpflegeHero />

      <Gartenpflege />

      <Rasenpflege />

      <Laubbeseitigung />

      <Winterdienst />

      <GruenflaechenpflegeCTA />

    </main>
  )
}


/* =========================================================
   HERO
========================================================= */

function GruenflaechenpflegeHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F446A] text-white h-screen">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(19,144,51,0.32),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(19,144,51,0.16),transparent_35%)]" />

      <div className="absolute -right-40 -top-40 size-[500px] rounded-full border-[70px] border-white/[0.025]" />

      <div className="absolute -bottom-60 left-1/3 size-[650px] rounded-full border-[90px] border-[#139033]/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:py-44">

        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-10 bg-[#6CCF82]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                Grünflächenpflege
              </span>

            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">

              Gepflegte

              <span className="block text-[#6CCF82]">
                Außenbereiche.
              </span>

            </h1>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pb-2"
          >

            <p className="max-w-xl text-lg leading-8 text-white/65">
              Pflege, Erhalt und saisonale Betreuung von Grünflächen,
              Außenanlagen und Grundstücken – zuverlässig und passend
              zu Ihrem Bedarf.
            </p>

            <div className="mt-8 flex items-center gap-3">

              <div className="flex size-10 items-center justify-center rounded-xl bg-[#139033]/20">
                <Leaf className="size-5 text-[#6CCF82]" />
              </div>

              <span className="text-sm font-medium text-white/80">
                Innen gepflegt. Außen ebenso.
              </span>

            </div>

          </motion.div>

        </div>


        {/* Navigation */}

        <div className="mt-20 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["01", "Gartenpflege", "#gartenpflege"],
            ["02", "Rasenpflege", "#rasenpflege"],
            ["03", "Laubbeseitigung", "#laubbeseitigung"],
            ["04", "Winterdienst", "#winterdienst"],
          ].map(([number, title, href]) => (

            <a
              key={number}
              href={href}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#6CCF82]/30 hover:bg-white/[0.08]"
            >

              <div className="flex items-center gap-4">

                <span className="font-mono text-xs text-[#6CCF82]">
                  {number}
                </span>

                <span className="text-sm font-medium text-white/75 transition-colors group-hover:text-white">
                  {title}
                </span>

              </div>

              <ChevronRight className="size-4 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-[#6CCF82]" />

            </a>

          ))}

        </div>

      </div>

    </section>
  )
}


/* =========================================================
   01 — GARTENPFLEGE
========================================================= */

function Gartenpflege() {
  const items = [
    "Allgemeine Gartenpflege",
    "Pflege von Grünanlagen",
    "Entfernung von Wildwuchs",
    "Pflege von Beeten",
    "Saisonale Arbeiten",
    "Reinigung von Außenflächen",
    "Weitere Pflegearbeiten nach Vereinbarung",
  ]

  return (
    <GruenServiceSection
      id="gartenpflege"
      number="01"
      eyebrow="Gartenpflege"
      title="Gepflegte Außenanlagen das ganze Jahr."
      icon={Flower2}
      image={betreuung}
      imageAlt="Gepflegte Außenanlage"
    >

      <p>
        Außenanlagen sind die Visitenkarte eines Grundstücks.
      </p>

      <p>
        Wir übernehmen regelmäßige Pflegearbeiten für gewerbliche,
        private, institutionelle und öffentliche Grundstücke.
      </p>

      <p>
        Je nach Bedarf können einzelne Arbeiten oder eine fortlaufende
        Betreuung vereinbart werden.
      </p>

      <GruenServiceList
        title="Leistungsübersicht"
        items={items}
      />

      <GruenServiceButton label="Gartenpflege anfragen" />

    </GruenServiceSection>
  )
}


/* =========================================================
   02 — RASENPFLEGE
========================================================= */

function Rasenpflege() {
  const items = [
    "Rasenmähen",
    "Pflege von Rasenkanten",
    "Entfernung von Schnittgut",
    "Saisonale Rasenpflege",
    "Pflege größerer Grünflächen",
  ]

  return (
    <GruenServiceSection
      id="rasenpflege"
      number="02"
      eyebrow="Rasenpflege"
      title="Gepflegte Grünflächen brauchen regelmäßige Aufmerksamkeit."
      icon={Leaf}
      image={laubreinigung}
      imageAlt="Gepflegte Rasen- und Grünflächen"
      reversed
      dark
    >

      <p>
        Wir übernehmen die regelmäßige Pflege von Rasenflächen rund um
        Wohnanlagen, Gewerbeobjekte, Einrichtungen und weitere
        Grundstücke.
      </p>

      <p>
        Häufigkeit und Umfang richten sich nach Fläche, Jahreszeit und
        gewünschtem Pflegezustand.
      </p>

      <GruenServiceList
        title="Leistungsübersicht"
        items={items}
      />

      <GruenServiceButton
        label="Rasenpflege anfragen"
        light
      />

    </GruenServiceSection>
  )
}


/* =========================================================
   03 — LAUBBESEITIGUNG
========================================================= */

function Laubbeseitigung() {
  const items = [
    "Gehwege",
    "Eingangsbereiche",
    "Parkplätze",
    "Hofflächen",
    "Grünflächen",
    "Zufahrten",
    "Entsorgung nach Vereinbarung",
  ]

  return (
    <GruenServiceSection
      id="laubbeseitigung"
      number="03"
      eyebrow="Laubbeseitigung"
      title="Saubere Wege und Flächen auch im Herbst."
      icon={Leaf}
      image={laubreinigung}
      imageAlt="Laubbeseitigung auf Außenflächen"
    >

      <p>
        Herabfallendes Laub beeinträchtigt nicht nur das Erscheinungsbild
        einer Außenanlage. Auf Gehwegen und Eingangsbereichen kann nasses
        Laub außerdem zur Rutschgefahr werden.
      </p>

      <p>
        Wir übernehmen die regelmäßige Beseitigung von Laub auf
        vereinbarten Flächen.
      </p>

      <GruenServiceList
        title="Leistungsübersicht"
        items={items}
      />

      <GruenServiceButton label="Laubbeseitigung anfragen" />

    </GruenServiceSection>
  )
}


/* =========================================================
   04 — WINTERDIENST
========================================================= */

function Winterdienst() {
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
      />

    </GruenServiceSection>
  )
}


/* =========================================================
   GENERIC SERVICE SECTION
========================================================= */

function GruenServiceSection({
  id,
  number,
  eyebrow,
  title,
  icon: Icon,
  image,
  imageAlt,
  reversed = false,
  dark = false,
  children,
}: {
  id: string
  number: string
  eyebrow: string
  title: string
  icon: typeof Leaf
  image: string
  imageAlt: string
  reversed?: boolean
  dark?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-28 sm:py-36 ${
        dark
          ? "bg-[#0F446A] text-white"
          : "bg-white text-[#0F446A]"
      }`}
    >

      {dark && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(19,144,51,0.25),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(19,144,51,0.12),transparent_35%)]" />
      )}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <div
          className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-24 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: reversed ? 60 : -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            <div
              className={`absolute -inset-4 rounded-[2.5rem] ${
                dark
                  ? "bg-[#139033]/10"
                  : "bg-[#139033]/5"
              } blur-xl`}
            />

            <div className="group relative h-[460px] overflow-hidden rounded-[2.5rem]">

              <motion.img
                src={image}
                alt={imageAlt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.9 }}
                className="h-full w-full object-cover"
              />

              <div
                className={`absolute inset-0 ${
                  dark
                    ? "bg-gradient-to-t from-[#0F446A]/90 via-[#0F446A]/20 to-transparent"
                    : "bg-gradient-to-t from-[#0F446A]/75 via-transparent to-[#139033]/10"
                }`}
              />

              <div className="absolute left-7 top-7 flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-[#0F446A]/70 text-white backdrop-blur-md">

                <Icon className="size-6 text-[#6CCF82]" />

              </div>

              <div className="absolute bottom-7 left-7">

                <span className="font-mono text-xs text-white/50">
                  {number}
                </span>

                <p className="mt-1 text-lg font-medium text-white">
                  {eyebrow}
                </p>

              </div>

            </div>

          </motion.div>


          {/* CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
              delay: 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <Badge
              variant="outline"
              className={
                dark
                  ? "border-white/15 bg-white/5 text-[#6CCF82]"
                  : "border-[#139033]/30 bg-[#139033]/5 text-[#12641A]"
              }
            >
              {number} · {eyebrow}
            </Badge>

            <h2
              className={`mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl ${
                dark
                  ? "text-white"
                  : "text-[#0F446A]"
              }`}
            >
              {title}
            </h2>

            <div
              className={`mt-8 space-y-5 text-base leading-7 ${
                dark
                  ? "text-white/60"
                  : "text-[#6F7782]"
              }`}
            >
              {children}
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}


/* =========================================================
   LIST
========================================================= */

function GruenServiceList({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="mt-9">

      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#139033]">
        {title}
      </p>

      <div className="grid gap-2 sm:grid-cols-2">

        {items.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3"
          >

            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#139033]/10">
              <Check className="size-3 text-[#139033]" />
            </span>

            <span className="text-sm">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}


/* =========================================================
   BUTTON
========================================================= */

function GruenServiceButton({
  label,
  light = false,
}: {
  label: string
  light?: boolean
}) {
  return (
    <Button
      size="lg"
      className={
        light
          ? "group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-6 text-white shadow-lg shadow-black/20 hover:opacity-90"
          : "group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-6 text-white shadow-lg shadow-[#139033]/20 hover:opacity-90"
      }
    >

      {label}

      <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

    </Button>
  )
}


/* =========================================================
   CTA
========================================================= */

function GruenflaechenpflegeCTA() {
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

            <Button
              size="lg"
              className="group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-7 text-white shadow-xl shadow-black/20 hover:opacity-90"
            >

              Angebot anfragen

              <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

            </Button>

          </div>

        </div>

      </div>

    </section>
  )
}