import { ArrowUpRight } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Link } from "react-router"

export default function ObjektServiceButton({
  label,
  light = false,
  linkUrl
}: {
  label: string
  light?: boolean,
  linkUrl: string
}) {
  return (
    <Link to={linkUrl}>
      <Button
        size="lg"
        className={
          light
            ? "group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-6 text-white shadow-lg shadow-black/20 hover:opacity-90"
            : "group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-6 text-white shadow-lg shadow-[#139033]/20 hover:opacity-90"
        }
      >

        {label}

        <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

      </Button>
    </Link>
  )
}