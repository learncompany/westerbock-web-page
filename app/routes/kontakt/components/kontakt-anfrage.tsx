import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../../../components/ui/badge";
import KontaktForm from "./kontakt-form";

export default function KontaktAnfrage() {
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