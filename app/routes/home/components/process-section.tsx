import React from 'react'
import { Badge } from '../../../components/ui/badge'

export default function ProcessSection() {
  return (
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
  )
}
