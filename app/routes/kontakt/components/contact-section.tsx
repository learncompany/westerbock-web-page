import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react"

import { motion } from "motion/react"

import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Card } from "../../../components/ui/card"


/* =========================================================
   PAGE
========================================================= */

export default function KontaktSections() {
  return (
    <main className="bg-white text-[#0F446A]">

      <KontaktHero />

      <KontaktAnfrage />

      <KontaktInfo />

    </main>
  )
}


/* =========================================================
   HERO
========================================================= */

function KontaktHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F446A] text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(19,144,51,0.32),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(19,144,51,0.16),transparent_35%)]" />

      <div className="absolute -right-40 -top-40 size-[500px] rounded-full border-[70px] border-white/[0.025]" />

      <div className="absolute -bottom-60 left-1/3 size-[650px] rounded-full border-[90px] border-[#139033]/[0.05]" />

      {/* Content */}

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:py-44">

        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-10 bg-[#6CCF82]" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                Kontakt
              </span>

            </div>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">

              Sprechen Sie

              <span className="block text-[#6CCF82]">
                mit uns.
              </span>

            </h1>

          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pb-2"
          >

            <p className="max-w-xl text-lg leading-8 text-white/65">
              Sie möchten eine Leistung anfragen oder benötigen eine
              individuelle Lösung für Ihr Gebäude oder Grundstück?
            </p>

            <div className="mt-8 flex items-center gap-3">

              <div className="flex size-10 items-center justify-center rounded-xl bg-[#139033]/20">
                <Sparkles className="size-5 text-[#6CCF82]" />
              </div>

              <span className="text-sm font-medium text-white/80">
                Persönlich. Zuverlässig. Regional.
              </span>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}


/* =========================================================
   ANFRAGE
========================================================= */

function KontaktAnfrage() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">

      <div className="absolute left-1/2 top-0 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-[#139033]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* INTRO */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <Badge
              variant="outline"
              className="border-[#139033]/30 bg-[#139033]/5 text-[#12641A]"
            >
              Angebot anfragen
            </Badge>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl">

              Ihr Objekt.

              <span className="block text-[#139033]">
                Ihr Bedarf.
              </span>

              Unser Angebot.

            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#6F7782]">
              Sie interessieren sich für eine oder mehrere unserer
              Dienstleistungen?
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#6F7782]">
              Teilen Sie uns kurz mit, um welches Objekt es sich handelt
              und welche Leistungen benötigt werden. Wir melden uns
              anschließend bei Ihnen und besprechen die weiteren Schritte.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#6F7782]">
              Bei größeren oder individuell zu kalkulierenden Objekten
              vereinbaren wir gerne einen Besichtigungstermin.
            </p>


            {/* Benefits */}

            <div className="mt-10 space-y-4">

              {[
                "Persönliche Rückmeldung",
                "Individuelle Einschätzung",
                "Transparente Abstimmung",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <span className="flex size-6 items-center justify-center rounded-full bg-[#139033]/10">
                    <Check className="size-3.5 text-[#139033]" />
                  </span>

                  <span className="text-sm font-medium text-[#0F446A]">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </motion.div>


          {/* FORM */}

          <KontaktForm />

        </div>

      </div>

    </section>
  )
}


/* =========================================================
   FORM
========================================================= */

function KontaktForm() {
  return (
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      <Card className="overflow-hidden rounded-[2rem] border-slate-200 bg-white p-6 shadow-xl shadow-[#0F446A]/5 sm:p-9">

        <div className="mb-8">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#139033]">
            Kontaktformular
          </p>

          <h3 className="mt-2 text-2xl font-semibold text-[#0F446A]">
            Anfrage senden
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#6F7782]">
            Füllen Sie das Formular aus. Wir melden uns persönlich bei Ihnen.
          </p>

        </div>


        <form className="space-y-6">

          {/* NAME */}

          <div className="grid gap-5 sm:grid-cols-2">

            <FormField
              label="Vorname"
              name="firstName"
              placeholder="Max"
            />

            <FormField
              label="Nachname"
              name="lastName"
              placeholder="Mustermann"
            />

          </div>


          {/* COMPANY */}

          <FormField
            label="Unternehmen"
            name="company"
            placeholder="Unternehmen / Organisation"
          />


          {/* CONTACT */}

          <div className="grid gap-5 sm:grid-cols-2">

            <FormField
              label="E-Mail-Adresse"
              name="email"
              type="email"
              placeholder="max@beispiel.de"
            />

            <FormField
              label="Telefonnummer"
              name="phone"
              type="tel"
              placeholder="0202 123456"
            />

          </div>


          {/* ADDRESS */}

          <FormField
            label="Straße und Hausnummer des Objektes"
            name="address"
            placeholder="Musterstraße 12"
          />

          <div className="grid gap-5 sm:grid-cols-2">

            <FormField
              label="PLZ"
              name="zip"
              placeholder="42103"
            />

            <FormField
              label="Ort"
              name="city"
              placeholder="Wuppertal"
            />

          </div>


          {/* OBJECT */}

          <div>

            <label
              htmlFor="objectType"
              className="mb-2 block text-sm font-medium text-[#0F446A]"
            >
              Art des Objektes
            </label>

            <select
              id="objectType"
              name="objectType"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#0F446A] outline-none transition focus:border-[#139033] focus:ring-2 focus:ring-[#139033]/10"
              defaultValue=""
            >

              <option value="" disabled>
                Bitte auswählen
              </option>

              <option value="buero">
                Büro
              </option>

              <option value="wohngebaeude">
                Wohngebäude
              </option>

              <option value="gewerbe">
                Gewerbe
              </option>

              <option value="schule">
                Schule oder Bildungseinrichtung
              </option>

              <option value="soziale-einrichtung">
                Soziale Einrichtung
              </option>

              <option value="praxis">
                Praxis
              </option>

              <option value="industrie">
                Industrie
              </option>

              <option value="oeffentliche-einrichtung">
                Öffentliche Einrichtung
              </option>

              <option value="sonstiges">
                Sonstiges
              </option>

            </select>

          </div>


          {/* SERVICES */}

          <div>

            <label className="mb-3 block text-sm font-medium text-[#0F446A]">
              Gewünschte Leistung
            </label>

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
                "Photovoltaik Reinigung",
                "Schädlingsbekämpfung",
                "Sonstiges",
              ].map((service) => (

                <label
                  key={service}
                  className="group flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-3 transition-colors hover:border-[#139033]/30 hover:bg-[#139033]/5"
                >

                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    className="size-4 accent-[#139033]"
                  />

                  <span className="text-sm text-[#6F7782] transition-colors group-hover:text-[#0F446A]">
                    {service}
                  </span>

                </label>

              ))}

            </div>

          </div>


          {/* DETAILS */}

          <div className="grid gap-5 sm:grid-cols-2">

            <FormField
              label="Gewünschtes Reinigungsintervall"
              name="interval"
              placeholder="z. B. 2× wöchentlich"
            />

            <FormField
              label="Ungefähre Fläche in m²"
              name="area"
              type="number"
              placeholder="z. B. 500"
            />

          </div>


          <FormField
            label="Gewünschter Starttermin"
            name="startDate"
            type="date"
          />


          {/* MESSAGE */}

          <div>

            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-[#0F446A]"
            >
              Nachricht
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Erzählen Sie uns kurz von Ihrem Objekt und Ihrem Bedarf ..."
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#0F446A] outline-none transition placeholder:text-slate-400 focus:border-[#139033] focus:ring-2 focus:ring-[#139033]/10"
            />

          </div>


          {/* FILE */}

          <div>

            <label
              htmlFor="file"
              className="mb-2 block text-sm font-medium text-[#0F446A]"
            >
              Datei oder Leistungsverzeichnis hochladen
            </label>

            <input
              id="file"
              name="file"
              type="file"
              className="block w-full rounded-xl border border-slate-200 bg-white text-sm text-[#6F7782] file:mr-4 file:border-0 file:bg-[#139033]/10 file:px-4 file:py-3 file:text-sm file:font-medium file:text-[#12641A] hover:file:bg-[#139033]/15"
            />

          </div>


          {/* PRIVACY */}

          <label className="flex items-start gap-3">

            <input
              type="checkbox"
              name="privacy"
              required
              className="mt-1 size-4 shrink-0 accent-[#139033]"
            />

            <span className="text-xs leading-5 text-[#6F7782]">
              Ich habe die Datenschutzerklärung gelesen und stimme der
              Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
            </span>

          </label>


          {/* SUBMIT */}

          <Button
            type="submit"
            size="lg"
            className="group h-13 w-full bg-gradient-to-r from-[#139033] to-[#12641A] text-white shadow-xl shadow-[#139033]/20 hover:opacity-90"
          >

            Kostenlose Anfrage senden

            <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

          </Button>

        </form>

      </Card>

    </motion.div>
  )
}


/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string
  name: string
  placeholder?: string
  type?: string
}) {
  return (
    <div>

      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-[#0F446A]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-[#0F446A] outline-none transition placeholder:text-slate-400 focus:border-[#139033] focus:ring-2 focus:ring-[#139033]/10"
      />

    </div>
  )
}


/* =========================================================
   CONTACT INFO
========================================================= */

function KontaktInfo() {
  return (
    <section className="bg-[#F5F8F6] py-24 sm:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid gap-6 md:grid-cols-3">

          <KontaktInfoCard
            icon={Phone}
            title="Persönlich sprechen"
            text="Sie möchten lieber direkt mit uns sprechen? Wir beantworten Ihre Fragen gerne persönlich."
            action="Rückruf anfordern"
          />

          <KontaktInfoCard
            icon={Mail}
            title="Anfrage senden"
            text="Beschreiben Sie uns kurz Ihr Objekt und Ihren Bedarf. Wir melden uns anschließend bei Ihnen."
            action="Jetzt Angebot anfragen"
          />

          <KontaktInfoCard
            icon={MapPin}
            title="Regional für Sie da"
            text="Unser Schwerpunkt liegt in Wuppertal, Köln, dem Bergischen Land und dem Rheinland."
            action="Region entdecken"
          />

        </div>

      </div>

    </section>
  )
}


/* =========================================================
   CONTACT INFO CARD
========================================================= */

function KontaktInfoCard({
  icon: Icon,
  title,
  text,
  action,
}: {
  icon: typeof Phone
  title: string
  text: string
  action: string
}) {
  return (
    <Card className="group rounded-[2rem] border-slate-200 bg-white p-7 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-[#139033]/20 hover:shadow-xl hover:shadow-[#0F446A]/5 sm:p-8">

      <div className="flex size-12 items-center justify-center rounded-2xl bg-[#139033]/10">

        <Icon className="size-5 text-[#139033]" />

      </div>

      <h3 className="mt-6 text-xl font-semibold text-[#0F446A]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#6F7782]">
        {text}
      </p>

      <button
        type="button"
        className="mt-6 flex items-center gap-2 text-sm font-medium text-[#139033]"
      >

        {action}

        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

      </button>

    </Card>
  )
}
