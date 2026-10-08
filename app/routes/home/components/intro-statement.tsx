
import { motion } from "motion/react"
import logo from "../../../assets/only-b-r-leaf.svg"

export default function IntroStatement() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36 lg:py-44">

        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#139033]/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-0 top-1/3 -z-10 size-[400px] rounded-full bg-[#0F446A]/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_0.9fr]">

            <div>

              <motion.div className="mb-7 flex items-center gap-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >

                <span className="h-px w-10 bg-gradient-to-r from-[#139033] to-[#12641A]" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6F7782]">
                  Bergisch Rheinische Gebäudedienste
                </span>

              </motion.div>

              <motion.h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >

                Wir halten

                <span className="block bg-gradient-to-r from-[#139033] via-[#12641A] to-[#0F446A] bg-clip-text text-transparent">
                  Immobilien
                </span>

                in Bewegung.

              </motion.h2>

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
  )
}
