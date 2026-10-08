import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

export default function ImageTile({
  src,
  alt,
  label,
  className = "",
}: {
  src: string
  alt: string
  label: string
  className?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
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
      whileHover={{
        y: -8,
      }}
      className={`group relative overflow-hidden rounded-[2rem] ${className}`}
    >

      <motion.img
        src={src}
        alt={alt}
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0F446A]/80 via-transparent to-[#139033]/10" />

      <div className="absolute bottom-5 left-5">

        <span className="rounded-full border border-white/20 bg-[#0F446A]/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
          {label}
        </span>

      </div>

      <div className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">

        <ArrowUpRight className="size-4 text-white" />

      </div>

    </motion.div>
  )
}