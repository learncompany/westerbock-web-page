import {
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  FileText,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react"

import { motion } from "motion/react"

import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Textarea } from "../../../components/ui/textarea"


/* =========================================================
   PAGE
========================================================= */

export default function AngebotAnfragenSections() {
  return (
    <main className="bg-white text-[#0F446A]">

      <AngebotHero />

      <AngebotFormSection />

    </main>
  )
}


/* =========================================================
   HERO
========================================================= */

function AngebotHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F446A] text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(19,144,51,0.32),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(19,144,51,0.16),transparent_35%)]" />

      <div className="absolute -right-40 -top-40 size-[500px] rounded-full border-[70px] border-white/[0.025]" />

      <div className="absolute -bottom-60 left-1/3 size-[650px] rounded-full border-[90px] border-[#139033]/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:py-36">

        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}

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
                Angebot anfragen
              </span>

            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">

              Ihr Objekt.

              <span className="block text-[#6CCF82]">
                Ihr Bedarf.
              </span>

              <span className="block">
                Unser Angebot.
              </span>

            </h1>

          </motion.div>


          {/* RIGHT */}

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
              Teilen Sie uns kurz mit, um welches Objekt es sich handelt
              und welche Leistungen Sie benötigen. Wir prüfen Ihre
              Anfrage und besprechen die nächsten Schritte persönlich
              mit Ihnen.
            </p>


            <div className="mt-8 flex items-center gap-3">

              <div className="flex size-10 items-center justify-center rounded-xl bg-[#139033]/20">

                <Sparkles className="size-5 text-[#6CCF82]" />

              </div>

              <span className="text-sm font-medium text-white/80">
                Individuell. Persönlich. Unverbindlich.
              </span>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}


/* =========================================================
   FORM SECTION
========================================================= */

function AngebotFormSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFC] py-24 sm:py-32">

      {/* Background */}

      <div className="pointer-events-none absolute -left-40 top-20 size-[450px] rounded-full bg-[#139033]/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 size-[500px] rounded-full bg-[#0F446A]/[0.04] blur-3xl" />


      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">


          {/* =================================================
              INTRO
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-28 lg:self-start"
          >

            <Badge
              variant="outline"
              className="border-[#139033]/25 bg-[#139033]/5 text-[#12641A]"
            >
              Anfrage
            </Badge>


            <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight text-[#0F446A] sm:text-5xl">

              Erzählen Sie uns
              <span className="block text-[#139033]">
                von Ihrem Objekt.
              </span>

            </h2>


            <p className="mt-7 text-base leading-7 text-[#6F7782]">
              Je genauer Ihre Angaben sind, desto besser können wir Ihren
              Bedarf einschätzen. Sie müssen jedoch nicht alle Felder
              vollständig ausfüllen.
            </p>


            <div className="mt-10 space-y-5">

              <InfoItem
                icon={MessageSquare}
                title="Persönliche Rückmeldung"
                text="Wir melden uns nach Eingang Ihrer Anfrage bei Ihnen."
              />

              <InfoItem
                icon={Building2}
                title="Individuelle Kalkulation"
                text="Leistungsumfang und Intervalle werden passend zu Ihrem Objekt abgestimmt."
              />

              <InfoItem
                icon={MapPin}
                title="Regional erreichbar"
                text="Unser Schwerpunkt liegt in Wuppertal, Köln, dem Bergischen Land und dem Rheinland."
              />

            </div>

          </motion.div>


          {/* =================================================
              FORM CARD
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <Card className="overflow-hidden rounded-[2rem] border-slate-200/70 bg-white shadow-xl shadow-[#0F446A]/[0.06]">

              <div className="border-b border-slate-100 px-6 py-7 sm:px-9">

                <div className="flex items-center gap-4">

                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#139033]/10 text-[#139033]">

                    <FileText className="size-5" />

                  </div>

                  <div>

                    <h3 className="font-semibold text-[#0F446A]">
                      Angebotsanfrage
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Ihre Angaben werden vertraulich behandelt.
                    </p>

                  </div>

                </div>

              </div>


              <form className="space-y-9 p-6 sm:p-9">


                {/* =================================================
                    PERSONAL DATA
                ================================================== */}

                <FormGroup
                  number="01"
                  title="Ihre Kontaktdaten"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    <FormField
                      label="Vorname"
                      required
                      placeholder="Max"
                    />

                    <FormField
                      label="Nachname"
                      required
                      placeholder="Mustermann"
                    />

                  </div>


                  <div className="mt-5">

                    <FormField
                      label="Unternehmen"
                      placeholder="Unternehmen / Einrichtung"
                    />

                  </div>


                  <div className="mt-5 grid gap-5 sm:grid-cols-2">

                    <FormField
                      label="E-Mail-Adresse"
                      required
                      type="email"
                      placeholder="max@beispiel.de"
                    />

                    <FormField
                      label="Telefonnummer"
                      placeholder="0211 12345678"
                    />

                  </div>

                </FormGroup>


                {/* =================================================
                    OBJECT
                ================================================== */}

                <FormGroup
                  number="02"
                  title="Ihr Objekt"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    <FormField
                      label="Straße und Hausnummer"
                      required
                      placeholder="Musterstraße 12"
                    />

                    <FormField
                      label="PLZ"
                      required
                      placeholder="42103"
                    />

                  </div>


                  <div className="mt-5 grid gap-5 sm:grid-cols-2">

                    <FormField
                      label="Ort"
                      required
                      placeholder="Wuppertal"
                    />


                    <div>

                      <label className="mb-2 block text-sm font-medium text-[#0F446A]">
                        Art des Objektes
                      </label>

                      <div className="relative">

                        <select
                          defaultValue=""
                          className="
                            h-11 w-full appearance-none
                            rounded-md border border-slate-200
                            bg-white px-3 pr-10
                            text-sm text-slate-700
                            outline-none
                            transition
                            focus:border-[#139033]
                            focus:ring-2
                            focus:ring-[#139033]/10
                          "
                        >

                          <option value="" disabled>
                            Bitte auswählen
                          </option>

                          <option>Büro</option>
                          <option>Wohngebäude</option>
                          <option>Gewerbe</option>
                          <option>Schule oder Bildungseinrichtung</option>
                          <option>Soziale Einrichtung</option>
                          <option>Praxis</option>
                          <option>Industrie</option>
                          <option>Öffentliche Einrichtung</option>
                          <option>Sonstiges</option>

                        </select>

                        <ChevronDown
                          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                        />

                      </div>

                    </div>

                  </div>

                </FormGroup>


                {/* =================================================
                    SERVICES
                ================================================== */}

                <FormGroup
                  number="03"
                  title="Gewünschte Leistungen"
                  description="Mehrere Leistungen können ausgewählt werden."
                >

                  <div className="grid gap-3 sm:grid-cols-2">

                    {[
                      "Unterhaltsreinigung",
                      "Büroreinigung",
                      "Treppenhausreinigung",
                      "Glasreinigung",
                      "Grundreinigung",
                      "Baureinigung",
                      "Fassaden- und Bodenreinigung",
                      "Gartenpflege",
                      "Rasenpflege",
                      "Hecken- und Strauchschnitt",
                      "Laubbeseitigung",
                      "Außenanlagenpflege",
                      "Winterdienst",
                      "Hausmeisterservice",
                      "Objektbetreuung",
                      "Entrümpelung",
                      "Photovoltaik-Reinigung",
                      "Schädlingsbekämpfung",
                      "Sonstiges",
                    ].map((service) => (

                      <label
                        key={service}
                        className="
                          group flex cursor-pointer items-center gap-3
                          rounded-xl border border-slate-200
                          bg-white px-4 py-3
                          transition
                          hover:border-[#139033]/30
                          hover:bg-[#139033]/[0.025]
                        "
                      >

                        <input
                          type="checkbox"
                          name="leistungen"
                          value={service}
                          className="
                            size-4
                            accent-[#139033]
                          "
                        />

                        <span className="text-sm text-slate-600 transition group-hover:text-[#0F446A]">
                          {service}
                        </span>

                      </label>

                    ))}

                  </div>

                </FormGroup>


                {/* =================================================
                    DETAILS
                ================================================== */}

                <FormGroup
                  number="04"
                  title="Weitere Angaben"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    <FormField
                      label="Gewünschtes Reinigungsintervall"
                      placeholder="z. B. 2× wöchentlich"
                    />

                    <FormField
                      label="Ungefähre Fläche in m²"
                      placeholder="z. B. 850"
                      type="number"
                    />

                  </div>


                  <div className="mt-5">

                    <FormField
                      label="Gewünschter Starttermin"
                      type="date"
                    />

                  </div>


                  <div className="mt-5">

                    <label className="mb-2 block text-sm font-medium text-[#0F446A]">
                      Ihre Nachricht
                    </label>

                    <Textarea
                      placeholder="Beschreiben Sie kurz Ihren Bedarf oder besondere Anforderungen ..."
                      className="min-h-[140px] resize-y border-slate-200 focus:border-[#139033] focus:ring-[#139033]/10"
                    />

                  </div>


                  <div className="mt-5">

                    <label
                      className="
                        flex cursor-pointer items-center gap-4
                        rounded-xl border border-dashed
                        border-slate-200
                        bg-slate-50/50
                        px-4 py-4
                        transition
                        hover:border-[#139033]/30
                        hover:bg-[#139033]/[0.025]
                      "
                    >

                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#139033]/10 text-[#139033]">

                        <FileText className="size-4" />

                      </div>

                      <div className="min-w-0">

                        <p className="text-sm font-medium text-[#0F446A]">
                          Datei oder Leistungsverzeichnis hochladen
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          Optional · PDF, DOC, DOCX oder Bilder
                        </p>

                      </div>

                      <input
                        type="file"
                        className="sr-only"
                        accept=".pdf,.doc,.docx,image/*"
                      />

                    </label>

                  </div>

                </FormGroup>


                {/* =================================================
                    PRIVACY
                ================================================== */}

                <div className="border-t border-slate-100 pt-7">

                  <label className="flex cursor-pointer items-start gap-3">

                    <input
                      type="checkbox"
                      required
                      className="mt-1 size-4 accent-[#139033]"
                    />

                    <span className="text-xs leading-5 text-slate-500">
                      Ich habe die Datenschutzerklärung gelesen und
                      stimme der Verarbeitung meiner Angaben zur
                      Bearbeitung meiner Anfrage zu.
                    </span>

                  </label>


                  <Button
                    type="submit"
                    size="lg"
                    className="
                      group mt-7 w-full
                      bg-gradient-to-r
                      from-[#139033]
                      to-[#12641A]
                      py-6
                      text-white
                      shadow-lg
                      shadow-[#139033]/20
                      transition
                      hover:-translate-y-0.5
                      hover:opacity-95
                    "
                  >

                    Kostenlose Anfrage senden

                    <Send
                      className="
                        ml-2 size-4
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />

                  </Button>


                  <p className="mt-4 text-center text-[11px] leading-5 text-slate-400">
                    Ihre Anfrage ist unverbindlich. Wir melden uns
                    persönlich bei Ihnen, um die weiteren Schritte zu
                    besprechen.
                  </p>

                </div>

              </form>

            </Card>

          </motion.div>

        </div>

      </div>

    </section>
  )
}


/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Check
  title: string
  text: string
}) {
  return (
    <div className="flex gap-4">

      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#139033]/10">

        <Icon className="size-4 text-[#139033]" />

      </div>

      <div>

        <p className="text-sm font-semibold text-[#0F446A]">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-slate-500">
          {text}
        </p>

      </div>

    </div>
  )
}


/* =========================================================
   FORM GROUP
========================================================= */

function FormGroup({
  number,
  title,
  description,
  children,
}: {
  number: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <div>

      <div className="mb-6 flex items-start gap-4">

        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#0F446A] font-mono text-[11px] font-medium text-white">
          {number}
        </span>

        <div>

          <h3 className="text-lg font-semibold text-[#0F446A]">
            {title}
          </h3>

          {description && (
            <p className="mt-1 text-xs text-slate-400">
              {description}
            </p>
          )}

        </div>

      </div>

      {children}

    </div>
  )
}


/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  required = false,
  placeholder,
  type = "text",
}: {
  label: string
  required?: boolean
  placeholder?: string
  type?: string
}) {
  return (
    <div>

      <label className="mb-2 block text-sm font-medium text-[#0F446A]">

        {label}

        {required && (
          <span className="ml-1 text-[#139033]">
            *
          </span>
        )}

      </label>

      <Input
        type={type}
        placeholder={placeholder}
        required={required}
        className="
          h-11
          border-slate-200
          bg-white
          text-sm
          text-[#0F446A]
          placeholder:text-slate-300
          focus:border-[#139033]
          focus:ring-[#139033]/10
        "
      />

    </div>
  )
}
