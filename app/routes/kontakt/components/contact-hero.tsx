import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function KontaktHero() {
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