/* =========================================================
   CONTACT FORM
========================================================= */

import { useState } from "react"
import { Input } from "./ui/input"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import { ArrowUpRight, Check, ChevronDown, FileText, Upload } from "lucide-react"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

const services = [
  "Unterhaltsreinigung",
  "Büroreinigung",
  "Treppenhausreinigung",
  "Glasreinigung",
  "Grundreinigung",
  "Baureinigung",
  "Fassaden und Bodenreinigung",
  "Gartenpflege",
  "Rasenpflege",
  "Hecken und Strauchschnitt",
  "Laubbeseitigung",
  "Außenanlagenpflege",
  "Winterdienst",
  "Hausmeisterservice",
  "Objektbetreuung",
  "Entrümpelung",
  "Photovoltaik Reinigung",
  "Schädlingsbekämpfung",
  "Sonstiges",
]
const propertyTypes = [
  "Büro",
  "Wohngebäude",
  "Gewerbe",
  "Schule oder Bildungseinrichtung",
  "Soziale Einrichtung",
  "Praxis",
  "Industrie",
  "Öffentliche Einrichtung",
  "Sonstiges",
]

const intervals = [
  "Einmalig",
  "Täglich",
  "Mehrmals pro Woche",
  "Wöchentlich",
  "Alle zwei Wochen",
  "Monatlich",
  "Nach Bedarf",
]

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [fileName, setFileName] = useState("")

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    )
  }

  return (
    <section
      id="kontaktformular"
      className="relative overflow-hidden py-28 sm:py-36"
    >

      <div className="absolute left-1/2 top-1/3 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-[#139033]/5 blur-[130px]" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <Badge
            variant="outline"
            className="border-[#139033]/30 bg-[#139033]/5 text-[#12641A]"
          >
            Kontaktformular
          </Badge>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-[#0F446A] sm:text-5xl">
            Erzählen Sie uns von Ihrem Objekt.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#6F7782]">
            Je mehr wir über Ihren Bedarf wissen, desto besser können wir
            Ihre Anfrage einschätzen.
          </p>

        </div>


        <Card className="mt-14 rounded-[2rem] border-[#0F446A]/10 bg-white p-6 shadow-xl shadow-[#0F446A]/5 sm:p-10 lg:p-12">

          <form
            onSubmit={(event) => {
              event.preventDefault()
            }}
            className="space-y-12"
          >

            {/* Personal data */}

            <FormSection
              number="01"
              title="Ihre Kontaktdaten"
              description="Damit wir Sie persönlich erreichen können."
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <FormField label="Vorname" required>
                  <Input placeholder="Max" />
                </FormField>

                <FormField label="Nachname" required>
                  <Input placeholder="Mustermann" />
                </FormField>

                <FormField label="Unternehmen">
                  <Input placeholder="Unternehmen GmbH" />
                </FormField>

                <FormField label="E-Mail Adresse" required>
                  <Input
                    type="email"
                    placeholder="max@unternehmen.de"
                  />
                </FormField>

                <FormField label="Telefonnummer">
                  <Input
                    type="tel"
                    placeholder="+49 202 123456"
                  />
                </FormField>

              </div>

            </FormSection>


            {/* Property */}

            <FormSection
              number="02"
              title="Ihr Objekt"
              description="Wo befindet sich das Objekt und um welche Art handelt es sich?"
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <div className="sm:col-span-2">

                  <FormField
                    label="Straße und Hausnummer des Objektes"
                    required
                  >
                    <Input placeholder="Musterstraße 12" />
                  </FormField>

                </div>

                <FormField label="PLZ" required>
                  <Input placeholder="42103" />
                </FormField>

                <FormField label="Ort" required>
                  <Input placeholder="Wuppertal" />
                </FormField>

                <FormField label="Art des Objektes" required>

                  <div className="relative">

                    <select
                      defaultValue=""
                      className="h-10 w-full appearance-none rounded-md border border-[#0F446A]/15 bg-white px-3 pr-10 text-sm text-[#0F446A] outline-none transition-colors focus:border-[#139033] focus:ring-2 focus:ring-[#139033]/10"
                    >
                      <option value="" disabled>
                        Bitte auswählen
                      </option>

                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}

                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#6F7782]" />

                  </div>

                </FormField>

              </div>

            </FormSection>


            {/* Services */}

            <FormSection
              number="03"
              title="Gewünschte Leistung"
              description="Sie können mehrere Leistungen auswählen."
            >

              <div className="grid gap-2 sm:grid-cols-2">

                {services.map((service) => {

                  const selected = selectedServices.includes(service)

                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`group flex items-center gap-3 rounded-xl border p-3.5 text-left text-sm transition-all duration-200 ${
                        selected
                          ? "border-[#139033]/40 bg-[#139033]/5 text-[#0F446A]"
                          : "border-[#0F446A]/10 bg-white text-[#6F7782] hover:border-[#139033]/25 hover:bg-[#F5F8F6]"
                      }`}
                    >

                      <span
                        className={`flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          selected
                            ? "border-[#139033] bg-[#139033] text-white"
                            : "border-[#0F446A]/20 bg-white"
                        }`}
                      >
                        {selected && (
                          <Check className="size-3" />
                        )}
                      </span>

                      <span
                        className={
                          selected
                            ? "font-medium"
                            : ""
                        }
                      >
                        {service}
                      </span>

                    </button>
                  )
                })}

              </div>

            </FormSection>


            {/* Details */}

            <FormSection
              number="04"
              title="Weitere Angaben"
              description="Diese Angaben helfen uns bei der ersten Einschätzung."
            >

              <div className="grid gap-5 sm:grid-cols-2">

                <FormField label="Gewünschtes Reinigungsintervall">

                  <div className="relative">

                    <select
                      defaultValue=""
                      className="h-10 w-full appearance-none rounded-md border border-[#0F446A]/15 bg-white px-3 pr-10 text-sm text-[#0F446A] outline-none transition-colors focus:border-[#139033] focus:ring-2 focus:ring-[#139033]/10"
                    >
                      <option value="" disabled>
                        Bitte auswählen
                      </option>

                      {intervals.map((interval) => (
                        <option key={interval} value={interval}>
                          {interval}
                        </option>
                      ))}

                    </select>

                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#6F7782]" />

                  </div>

                </FormField>

                <FormField label="Ungefähre Fläche in Quadratmetern">

                  <Input
                    type="number"
                    placeholder="z. B. 850"
                  />

                </FormField>

                <FormField label="Gewünschter Starttermin">

                  <Input type="date" />

                </FormField>

              </div>

            </FormSection>


            {/* Message */}

            <FormSection
              number="05"
              title="Ihre Nachricht"
              description="Gibt es Besonderheiten oder weitere Informationen?"
            >

              <Textarea
                placeholder="Beschreiben Sie gerne kurz Ihr Objekt, Ihre Anforderungen oder besondere Wünsche."
                className="min-h-[160px] resize-none"
              />

            </FormSection>


            {/* Upload */}

            <FormSection
              number="06"
              title="Datei oder Leistungsverzeichnis"
              description="Optional können Sie weitere Unterlagen hochladen."
            >

              <label
                htmlFor="file-upload"
                className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#0F446A]/15 bg-[#F5F8F6] px-6 py-10 text-center transition-all hover:border-[#139033]/40 hover:bg-[#139033]/5"
              >

                <div className="flex size-12 items-center justify-center rounded-2xl bg-white shadow-sm">

                  {fileName ? (
                    <FileText className="size-5 text-[#139033]" />
                  ) : (
                    <Upload className="size-5 text-[#139033]" />
                  )}

                </div>

                <p className="mt-4 text-sm font-semibold text-[#0F446A]">
                  {fileName || "Datei auswählen"}
                </p>

                <p className="mt-1 text-xs text-[#6F7782]">
                  Leistungsverzeichnis, PDF oder weitere Unterlagen
                </p>

                <input
                  id="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={(event) => {
                    setFileName(
                      event.target.files?.[0]?.name ?? "",
                    )
                  }}
                />

              </label>

            </FormSection>


            {/* Privacy */}

            <div className="rounded-2xl bg-[#F5F8F6] p-5">

              <label className="flex cursor-pointer items-start gap-3">

                <input
                  type="checkbox"
                  required
                  className="mt-0.5 size-4 accent-[#139033]"
                />

                <span className="text-xs leading-5 text-[#6F7782]">
                  Ich habe die Datenschutzerklärung gelesen und stimme
                  der Verarbeitung meiner Angaben zur Bearbeitung meiner
                  Anfrage zu.
                </span>

              </label>

            </div>


            <div className="flex flex-col items-start justify-between gap-5 border-t border-[#0F446A]/10 pt-8 sm:flex-row sm:items-center">

              <p className="max-w-md text-xs leading-5 text-[#6F7782]">
                Ihre Anfrage ist unverbindlich. Wir melden uns persönlich
                bei Ihnen und besprechen die nächsten Schritte.
              </p>

              <Button
                type="submit"
                size="lg"
                className="group w-full bg-gradient-to-r from-[#139033] to-[#12641A] px-7 text-white shadow-lg shadow-[#139033]/20 hover:opacity-90 sm:w-auto"
              >
                Kostenlose Anfrage senden

                <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>

            </div>

          </form>

        </Card>

      </div>

    </section>
  )
}


/* =========================================================
   FORM COMPONENTS
========================================================= */

function FormSection({
  number,
  title,
  description,
  children,
}: {
  number: string
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div>

      <div className="mb-6 flex items-start gap-4">

        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#0F446A] font-mono text-xs text-white">
          {number}
        </span>

        <div>

          <h3 className="text-lg font-semibold text-[#0F446A]">
            {title}
          </h3>

          <p className="mt-1 text-sm text-[#6F7782]">
            {description}
          </p>

        </div>

      </div>

      {children}

    </div>
  )
}

function FormField({
  label,
  required = false,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">

      <label className="text-sm font-medium text-[#0F446A]">

        {label}

        {required && (
          <span className="ml-1 text-[#139033]">
            *
          </span>
        )}

      </label>

      {children}

    </div>
  )
}