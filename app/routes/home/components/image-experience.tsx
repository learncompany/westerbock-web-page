import { motion } from "motion/react"
// import logoFull from "../../../assets/pictures/logo/berg-rhein-all-copy.png"
import logoFull from "../../../assets/pictures/logo/westerbock.png"
import imgSecondary from "../../../assets/pictures/bueroreinigung.jpg"
import { ShieldCheck } from "lucide-react"
import { Badge } from "../../../components/ui/badge"


const benefits = [
  {
    number: "01",
    title: "Persönlich",
    text: "Direkte Ansprechpartner statt komplizierter Kommunikationswege.",
  },
  {
    number: "02",
    title: "Zuverlässig",
    text: "Verbindliche Absprachen und eine strukturierte Umsetzung.",
  },
  {
    number: "03",
    title: "Erfahren",
    text: "Acht Jahre praktische Erfahrung in Reinigung und Objektbetreuung.",
  },
  {
    number: "04",
    title: "Flexibel",
    text: "Leistungen, die sich an Objekt, Umfang und Anforderungen orientieren.",
  },
]


export default function ImageExperience() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

            {/* IMAGE COMPOSITION */}

            <div className="relative min-h-[600px]">

              {/* Main image */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-0 top-0 h-[450px] w-[82%] overflow-hidden rounded-[2.5rem]"
              >

                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1 }}
                  src={logoFull}
                  alt="Team der Westerbock Gebäudeservice GmbH"
                  className="h-full w-full object-contain p-1"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F446A]/80 via-transparent to-[#139033]/20" />

                <div className="absolute bottom-7 left-7">

                  <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Erfahrung
                  </span>

                  <p className="mt-1 text-7xl font-bold tracking-tight text-white">
                    8+
                  </p>

                  <p className="text-sm text-white/70">
                    Jahre praktische Erfahrung
                  </p>

                </div>

              </motion.div>


              {/* Secondary image */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 right-0 h-[270px] w-[55%] overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl"
              >

                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8 }}
                  src={imgSecondary}
                  alt="Betreutes Objekt"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0F446A]/70 to-transparent" />

                <div className="absolute bottom-5 left-5 flex items-center gap-3">

                  <div className="flex size-10 items-center justify-center rounded-xl bg-[#139033] text-white">
                    <ShieldCheck className="size-5" />
                  </div>

                  <span className="text-sm font-medium text-white">
                    Persönlicher Service
                  </span>

                </div>

              </motion.div>


              {/* Decorative green shape */}

              <motion.div
                animate={{
                  rotate: [0, 8, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 top-20 -z-10 size-48 rounded-full border-[35px] border-[#139033]/10"
              />

            </div>


            {/* CONTENT */}

            <div className="flex flex-col justify-center">

              <Badge
                variant="outline"
                className="w-fit border-[#139033]/30 bg-[#139033]/5 text-[#12641A]"
              >
                Unser Anspruch
              </Badge>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">

                Nicht nur eine

                <span className="block bg-gradient-to-r from-[#139033] to-[#12641A] bg-clip-text text-transparent">
                  Dienstleistung.
                </span>

              </h2>

              <p className="mt-7 text-lg leading-8 text-[#6F7782]">
                Wir verstehen Gebäudedienstleistungen als langfristige
                Partnerschaft. Deshalb setzen wir auf zuverlässige Abläufe,
                direkte Kommunikation und ein Ergebnis, das dauerhaft
                überzeugt.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">

                {benefits.map((benefit) => (

                  <div key={benefit.number} className="group">

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-xs text-[#139033]">
                        {benefit.number}
                      </span>

                      <div className="h-px flex-1 bg-slate-200 transition-colors group-hover:bg-[#139033]/30" />

                    </div>

                    <h3 className="mt-4 font-semibold text-[#0F446A]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6F7782]">
                      {benefit.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
  )
}
