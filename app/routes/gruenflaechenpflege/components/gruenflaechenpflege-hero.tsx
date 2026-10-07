import { ChevronRight, Leaf } from "lucide-react";
import { motion } from "motion/react";

export default function GruenflaechenpflegeHero() {
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