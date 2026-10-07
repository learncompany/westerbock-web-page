import type { Wrench } from "lucide-react"
import { motion } from "motion/react"
import { Badge } from "../../../components/ui/badge"

export default function ObjektServiceSection({
  id,
  number,
  eyebrow,
  title,
  icon: Icon,
  image,
  imageAlt,
  reversed = false,
  dark = false,
  children,
}: {
  id: string
  number: string
  eyebrow: string
  title: string
  icon: typeof Wrench
  image: string
  imageAlt: string
  reversed?: boolean
  dark?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-28 sm:py-36 ${
        dark
          ? "bg-[#0F446A] text-white"
          : "bg-white text-[#0F446A]"
      }`}
    >

      {dark && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(19,144,51,0.25),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(19,144,51,0.12),transparent_35%)]" />
      )}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        <div
          className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-24 ${
            reversed
              ? "lg:[&>*:first-child]:order-2"
              : ""
          }`}
        >

          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: reversed ? 60 : -60,
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >

            <div
              className={`absolute -inset-4 rounded-[2.5rem] ${
                dark
                  ? "bg-[#139033]/10"
                  : "bg-[#139033]/5"
              } blur-xl`}
            />

            <div className="group relative h-[460px] overflow-hidden rounded-[2.5rem]">

              <motion.img
                src={image}
                alt={imageAlt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.9 }}
                className="h-full w-full object-cover"
              />

              <div
                className={`absolute inset-0 ${
                  dark
                    ? "bg-gradient-to-t from-[#0F446A]/90 via-[#0F446A]/20 to-transparent"
                    : "bg-gradient-to-t from-[#0F446A]/75 via-transparent to-[#139033]/10"
                }`}
              />

              <div className="absolute left-7 top-7 flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-[#0F446A]/70 text-white backdrop-blur-md">

                <Icon className="size-6 text-[#6CCF82]" />

              </div>

              <div className="absolute bottom-7 left-7">

                <span className="font-mono text-xs text-white/50">
                  {number}
                </span>

                <p className="mt-1 text-lg font-medium text-white">
                  {eyebrow}
                </p>

              </div>

            </div>

          </motion.div>


          {/* CONTENT */}

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
              delay: 0.1,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <Badge
              variant="outline"
              className={
                dark
                  ? "border-white/15 bg-white/5 text-[#6CCF82]"
                  : "border-[#139033]/30 bg-[#139033]/5 text-[#12641A]"
              }
            >
              {number} · {eyebrow}
            </Badge>

            <h2
              className={`mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl ${
                dark
                  ? "text-white"
                  : "text-[#0F446A]"
              }`}
            >
              {title}
            </h2>

            <div
              className={`mt-8 space-y-5 text-base leading-7 ${
                dark
                  ? "text-white/60"
                  : "text-[#6F7782]"
              }`}
            >
              {children}
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}