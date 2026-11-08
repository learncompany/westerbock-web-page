import { ArrowUpRight, type Phone } from "lucide-react"
import { Card } from "../../../components/ui/card"

export default function KontaktInfoCard({
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