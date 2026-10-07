import { Check } from "lucide-react"

export default function ServiceList({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="mt-9">

      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#139033]">
        {title}
      </p>

      <div className="grid gap-2 sm:grid-cols-2">

        {items.map((item) => (

          <div
            key={item}
            className="flex items-center gap-3"
          >

            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#139033]/10">
              <Check className="size-3 text-[#139033]" />
            </span>

            <span className="text-sm">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}