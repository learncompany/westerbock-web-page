import {
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  FileText,
  Leaf,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Upload,
  Users,
  Wrench,
} from "lucide-react"
import { useState } from "react"

import { motion } from "motion/react"

import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"
import ContactForm from "../../../components/contact-form"


/* =========================================================
   DATA
========================================================= */

const values = [
  {
    number: "01",
    title: "Zuverlässigkeit",
    text: "Was vereinbart wird, muss auch umgesetzt werden.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Qualität",
    text: "Wir möchten Leistungen nicht irgendwie, sondern ordentlich und nachvollziehbar durchführen.",
    icon: Check,
  },
  {
    number: "03",
    title: "Verantwortung",
    text: "Wir behandeln die uns anvertrauten Gebäude und Grundstücke verantwortungsvoll.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Kommunikation",
    text: "Probleme lassen sich am besten lösen, wenn Ansprechpartner erreichbar sind und offen miteinander gesprochen wird.",
    icon: MessageSquare,
  },
  {
    number: "05",
    title: "Regionalität",
    text: "Wir möchten langfristige Partnerschaften in unserer Region aufbauen.",
    icon: MapPin,
  },
  {
    number: "06",
    title: "Entwicklung",
    text: "Wir wollen mit unseren Auftraggebern wachsen und unser Leistungsangebot kontinuierlich weiterentwickeln.",
    icon: Sparkles,
  },
]

/* =========================================================
   PAGE
========================================================= */

export function AboutSection() {
  return (
    <main className="bg-white text-[#0F446A]">

      <AboutHero />

      <AboutStory />

      <ValuesSection />

      <OfferSection />

      <ContactForm />

      <ContactCTA />

    </main>
  )
}


/* =========================================================
   HERO
========================================================= */

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F446A] text-white h-screen">

      {/* Background decoration */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(19,144,51,0.35),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(19,144,51,0.18),transparent_35%)]" />

      <div className="absolute -right-40 -top-40 size-[500px] rounded-full border-[70px] border-white/[0.025]" />

      <div className="absolute -bottom-52 left-1/3 size-[600px] rounded-full border-[90px] border-[#139033]/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:py-44">

        <div className="grid items-end gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-10 bg-[#6CCF82]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                Über uns
              </span>

            </div>

            <p className="text-sm font-medium text-[#6CCF82] sm:text-base">
              Bergisch Rheinische Gebäudedienste GmbH
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">

              Neu als GmbH.

              <span className="block text-[#6CCF82]">
                Erfahren in der Praxis.
              </span>

            </h1>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pb-2"
          >

            <p className="max-w-xl text-lg leading-8 text-white/65">
              Die Bergisch Rheinische Gebäudedienste GmbH verbindet
              eine neue Unternehmensstruktur mit acht Jahren praktischer
              Erfahrung.
            </p>

            <div className="mt-8 flex items-center gap-3">

              <div className="flex size-10 items-center justify-center rounded-xl bg-[#139033]/20">
                <Users className="size-5 text-[#6CCF82]" />
              </div>

              <span className="text-sm font-medium text-white/80">
                Persönlich. Regional. Zuverlässig.
              </span>

            </div>

          </motion.div>

        </div>


        {/* Hero statement */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 border-t border-white/10 pt-8 sm:mt-28"
        >

          <div className="grid gap-8 sm:grid-cols-3">

            <HeroStatement
              number="01"
              text="Nicht nur auf Sauberkeit."
            />

            <HeroStatement
              number="02"
              text="Nicht nur auf einen gepflegten Außenbereich."
            />

            <HeroStatement
              number="03"
              text="Sondern auf Zuverlässigkeit im Alltag."
              highlighted
            />

          </div>

        </motion.div>

      </div>

    </section>
  )
}

function HeroStatement({
  number,
  text,
  highlighted = false,
}: {
  number: string
  text: string
  highlighted?: boolean
}) {
  return (
    <div className="flex gap-4">

      <span className="font-mono text-xs text-[#6CCF82]">
        {number}
      </span>

      <p
        className={
          highlighted
            ? "max-w-xs text-lg font-medium leading-7 text-white"
            : "max-w-xs text-lg font-medium leading-7 text-white/45"
        }
      >
        {text}
      </p>

    </div>
  )
}


/* =========================================================
   STORY
========================================================= */

function AboutStory() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">

      <div className="absolute left-0 top-20 size-[400px] rounded-full bg-[#139033]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">

          <div>

            <Badge
              variant="outline"
              className="border-[#139033]/30 bg-[#139033]/5 text-[#12641A]"
            >
              Unsere Geschichte
            </Badge>

            <div className="mt-8 flex items-center gap-4">

              <span className="text-7xl font-bold tracking-[-0.06em] text-[#139033]">
                8
              </span>

              <div className="h-12 w-px bg-[#0F446A]/10" />

              <div className="text-sm leading-5 text-[#6F7782]">
                Jahre
                <br />
                praktische
                <br />
                Erfahrung
              </div>

            </div>

          </div>


          <div className="max-w-3xl">

            <p className="text-2xl font-medium leading-9 tracking-tight text-[#0F446A] sm:text-3xl">
              Unsere Arbeit hat uns gezeigt, worauf es bei
              Gebäudedienstleistungen tatsächlich ankommt.
            </p>

            <div className="mt-9 space-y-6 text-base leading-8 text-[#6F7782]">

              <p>
                Nicht nur auf Sauberkeit.
              </p>

              <p>
                Nicht nur auf einen gepflegten Außenbereich.
              </p>

              <p>
                Und nicht nur auf ein gutes Angebot.
              </p>

              <p className="font-medium text-[#0F446A]">
                Entscheidend ist die Zuverlässigkeit im Alltag.
              </p>

              <p>
                Unsere Auftraggeber müssen sich darauf verlassen können,
                dass vereinbarte Leistungen durchgeführt werden,
                Ansprechpartner erreichbar sind und bei Problemen
                Lösungen gefunden werden.
              </p>

              <p>
                Auf diesem Anspruch bauen wir die Bergisch Rheinische
                Gebäudedienste GmbH auf.
              </p>

            </div>


            {/* Service system */}

            <div className="mt-12 grid gap-3 sm:grid-cols-3">

              <StoryService
                icon={Building2}
                title="Reinigung"
              />

              <StoryService
                icon={Leaf}
                title="Grünflächenpflege"
              />

              <StoryService
                icon={Wrench}
                title="Objektservice"
              />

            </div>


            <div className="mt-10 border-l-2 border-[#139033] pl-6">

              <p className="text-base leading-7 text-[#6F7782]">
                Dabei möchten wir sowohl einzelne Dienstleistungen
                als auch umfassende Lösungen für komplette Objekte
                anbieten.
              </p>

            </div>


            {/* Region */}

            <div className="mt-12 rounded-[2rem] bg-[#F5F8F6] p-7 sm:p-9">

              <div className="flex items-start gap-4">

                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0F446A] text-white">
                  <MapPin className="size-5" />
                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#139033]">
                    Unsere Region
                  </p>

                  <p className="mt-3 text-base leading-7 text-[#6F7782]">
                    Unser regionaler Schwerpunkt liegt in
                    <span className="font-medium text-[#0F446A]">
                      {" "}Wuppertal, Köln, dem Bergischen Land und dem Rheinland.
                    </span>
                  </p>

                  <p className="mt-4 text-sm leading-6 text-[#6F7782]">
                    Der Name Bergisch Rheinische Gebäudedienste steht
                    deshalb nicht nur für unser Unternehmen. Er steht
                    auch für die Region, in der wir arbeiten.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

function StoryService({
  icon: Icon,
  title,
}: {
  icon: typeof Building2
  title: string
}) {
  return (
    <div className="group rounded-2xl border border-[#0F446A]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#139033]/30 hover:shadow-lg">

      <Icon className="size-5 text-[#139033]" />

      <p className="mt-4 text-sm font-semibold text-[#0F446A]">
        {title}
      </p>

    </div>
  )
}


/* =========================================================
   VALUES
========================================================= */

function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0F446A] py-28 text-white sm:py-36">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(19,144,51,0.25),transparent_32%),radial-gradient(circle_at_90%_90%,rgba(19,144,51,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <Badge className="border border-white/10 bg-white/10 text-white hover:bg-white/10">
              Unsere Werte
            </Badge>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">

              Was uns

              <span className="block text-[#6CCF82]">
                wichtig ist.
              </span>

            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/55">
              Unsere Werte sind nicht nur Worte. Sie bilden die Grundlage
              für unsere tägliche Arbeit und den Umgang mit unseren
              Auftraggebern.
            </p>

          </div>


          <div className="grid gap-3 sm:grid-cols-2">

            {values.map((value) => (
              <ValueCard
                key={value.number}
                {...value}
              />
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

function ValueCard({
  number,
  title,
  text,
  icon: Icon,
}: {
  number: string
  title: string
  text: string
  icon: typeof ShieldCheck
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#6CCF82]/25 hover:bg-white/[0.08]"
    >

      <div className="flex items-center justify-between">

        <span className="font-mono text-xs text-[#6CCF82]">
          {number}
        </span>

        <Icon className="size-5 text-white/25 transition-colors group-hover:text-[#6CCF82]" />

      </div>

      <h3 className="mt-9 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/50">
        {text}
      </p>

    </motion.div>
  )
}


/* =========================================================
   OFFER
========================================================= */

function OfferSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8F6] py-28 sm:py-36">

      <div className="absolute right-0 top-0 size-[450px] rounded-full bg-[#139033]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

          <div>

            <Badge
              variant="outline"
              className="border-[#139033]/30 bg-white text-[#12641A]"
            >
              Angebot anfragen
            </Badge>

            <h2 className="mt-6 text-4xl font-semibold leading-[1] tracking-tight sm:text-6xl">

              Ihr Objekt.

              <span className="block text-[#139033]">
                Ihr Bedarf.
              </span>

              Unser Angebot.

            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-[#6F7782]">
              Sie interessieren sich für eine oder mehrere unserer
              Dienstleistungen?
            </p>

            <p className="mt-5 max-w-lg text-base leading-7 text-[#6F7782]">
              Teilen Sie uns kurz mit, um welches Objekt es sich handelt
              und welche Leistungen benötigt werden.
            </p>


            <div className="mt-10 space-y-4">

              <InfoPoint text="Persönliche Rückmeldung" />

              <InfoPoint text="Individuelle Einschätzung Ihres Bedarfs" />

              <InfoPoint text="Besichtigungstermin bei größeren Objekten" />

            </div>

          </div>


          <div className="relative">

            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#139033]/5 blur-xl" />

            <Card className="relative overflow-hidden rounded-[2.25rem] border-[#0F446A]/10 bg-white p-7 shadow-xl shadow-[#0F446A]/5 sm:p-10">

              <div className="flex items-start gap-4">

                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F446A] text-white">
                  <MessageSquare className="size-5" />
                </div>

                <div>

                  <h3 className="text-xl font-semibold text-[#0F446A]">
                    Gemeinsam den Bedarf klären
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#6F7782]">
                    Füllen Sie unser Anfrageformular aus. Wir melden uns
                    anschließend persönlich bei Ihnen.
                  </p>

                </div>

              </div>

              <div className="my-8 h-px bg-[#0F446A]/10" />

              <div className="space-y-4">

                <InfoRow
                  icon={ShieldCheck}
                  title="Transparent"
                  text="Klare Kommunikation"
                />

                <InfoRow
                  icon={Users}
                  title="Persönlich"
                  text="Direkter Ansprechpartner"
                />

                <InfoRow
                  icon={MapPin}
                  title="Regional"
                  text="Bergisch & Rheinisch"
                />

              </div>

            </Card>

          </div>

        </div>

      </div>

    </section>
  )
}

function InfoPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">

      <span className="flex size-6 items-center justify-center rounded-full bg-[#139033]/10">
        <Check className="size-3.5 text-[#139033]" />
      </span>

      <span className="text-sm font-medium text-[#0F446A]">
        {text}
      </span>

    </div>
  )
}

function InfoRow({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck
  title: string
  text: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-[#F5F8F6] p-4">

      <div className="flex size-10 items-center justify-center rounded-xl bg-[#139033]/10">
        <Icon className="size-4 text-[#139033]" />
      </div>

      <div>
        <p className="text-sm font-semibold text-[#0F446A]">
          {title}
        </p>

        <p className="text-xs text-[#6F7782]">
          {text}
        </p>
      </div>

    </div>
  )
}



/* =========================================================
   REUSABLE CONTACT CTA
   Kann auf jeder Leistungsseite verwendet werden.
========================================================= */

export function ContactCTA() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0F446A]">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(19,144,51,0.5),transparent_32%),radial-gradient(circle_at_20%_100%,rgba(19,144,51,0.18),transparent_35%)]" />

        <div className="absolute -right-20 -top-32 size-96 rounded-full border-[55px] border-white/[0.025]" />

        <div className="relative px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3 text-[#6CCF82]">

                <Sparkles className="size-5" />

                <span className="text-sm font-medium">
                  Persönlich für Ihr Objekt
                </span>

              </div>

              <h2 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">

                Sprechen Sie mit uns

                <span className="block text-[#6CCF82]">
                  über Ihr Objekt.
                </span>

              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Sie möchten eine Leistung anfragen oder benötigen eine
                individuelle Lösung für Ihr Gebäude oder Grundstück?
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/45">
                Senden Sie uns Ihre Anfrage. Wir melden uns persönlich
                bei Ihnen und besprechen den Bedarf.
              </p>

            </div>


            <Button
              size="lg"
              className="group w-full bg-gradient-to-r from-[#139033] to-[#12641A] px-7 text-white shadow-xl shadow-black/20 hover:opacity-90 sm:w-auto"
              onClick={() => {
                document
                  .getElementById("kontaktformular")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }}
            >
              Jetzt Angebot anfragen

              <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>

          </div>

        </div>

      </div>

    </section>
  )
}
