import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react"

import { linkList } from "../data/general-data"

import logo from "../assets/only-wb.svg"
import { Link } from "react-router"

type SubLink = {
  name: string
  url: string
}

type Link = {
  name: string
  url: string
  subLinks?: SubLink[]
}

type FooterProps = {
  email?: string
  phone?: string
  address?: string
}

export default function Footer({
  email = "info@mail.de",
  phone,
  address = "Wuppertal, Köln, Bergisches Land & Rheinland",
}: FooterProps) {
  const navigation = linkList as Link[]

  const firstColumn = navigation.slice(0, 3)
  const secondColumn = navigation.slice(3)

  return (
    <footer className="relative overflow-hidden bg-[#0F446A] text-white">

      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 -top-40 size-[500px] rounded-full border-[70px] border-white/[0.025]" />

        <div className="absolute right-[-180px] top-[15%] size-[520px] rounded-full bg-[#139033]/[0.08] blur-3xl" />

        <div className="absolute bottom-[-220px] left-[35%] size-[450px] rounded-full bg-[#6CCF82]/[0.05] blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(19,144,51,0.20),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(19,144,51,0.12),transparent_35%)]" />

      </div>

      <div className="relative">

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="border-b border-white/10">

          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">

            <div
              className="
                relative overflow-hidden rounded-[2.5rem]
                border border-white/10
                bg-white/[0.04]
                px-6 py-10
                sm:px-10 sm:py-12
                lg:px-14
              "
            >

              {/* Decorative elements */}

              <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-[#139033]/10 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-28 left-[35%] size-72 rounded-full bg-[#6CCF82]/[0.06] blur-3xl" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                {/* Text */}

                <div className="max-w-2xl">

                  <div className="mb-5 flex items-center gap-3">

                    <div
                      className="
                        flex size-10 items-center justify-center
                        rounded-xl
                        bg-[#139033]/15
                        text-[#6CCF82]
                      "
                    >
                      <Sparkles size={18} />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                      Gebäudedienstleistungen
                    </span>

                  </div>

                  <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">

                    Sprechen Sie mit uns

                    <br className="hidden sm:block" />

                    über{" "}
                    <span className="text-[#6CCF82]">
                      Ihr Objekt.
                    </span>

                  </h2>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
                    Sie möchten eine Leistung anfragen oder benötigen
                    eine individuelle Lösung für Ihr Gebäude oder
                    Grundstück? Wir besprechen Ihren Bedarf persönlich.
                  </p>

                </div>

                {/* CTA */}

                <Link
                  to="/kontakt"
                  className="
                    group inline-flex shrink-0
                    items-center justify-center gap-2
                    rounded-full
                    bg-gradient-to-r
                    from-[#139033]
                    to-[#12641A]
                    px-6 py-3.5
                    text-sm font-semibold text-white
                    shadow-lg shadow-black/20
                    transition duration-300
                    hover:-translate-y-0.5
                    hover:shadow-xl
                  "
                  viewTransition
                >

                  Jetzt Angebot anfragen

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />

                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          <div className="grid gap-14 lg:grid-cols-[1.05fr_2fr] lg:gap-20">


            {/* =================================================
                BRAND
            ================================================== */}

            <div className="max-w-sm">

              {/* Logo */}

              <a
                href="/"
                className="inline-flex items-center gap-3"
                aria-label="Westerbock Gebäudeservice Startseite"
              >

                <div className="relative flex size-14 items-center justify-center">

                  <img
                    src={logo}
                    alt="Westerbock Gebäudeservice GmbH"
                    className="relative h-12 w-12"
                  />

                </div>

              </a>


              <h3 className="mt-7 text-lg font-semibold text-white">
                Westerbock Gebäudeservice GmbH
              </h3>


              <p className="mt-4 text-sm leading-6 text-white/50">
                Gebäudedienstleistungen mit praktischer Erfahrung.
                Zuverlässig, regional und passend zu den Anforderungen
                Ihres Objekts.
              </p>


              {/* Contact */}

              <div className="mt-7 space-y-3">

                <div className="flex items-start gap-3 text-sm text-white/55">

                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#6CCF82]"
                  />

                  <span>
                    {address}
                  </span>

                </div>


                {phone && (
                  <div className="flex items-center gap-3 text-sm text-white/55">

                    <Phone
                      size={16}
                      className="shrink-0 text-[#6CCF82]"
                    />

                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="transition hover:text-[#6CCF82]"
                    >
                      {phone}
                    </a>

                  </div>
                )}


                <div className="flex items-center gap-3 text-sm text-white/55">

                  <Mail
                    size={16}
                    className="shrink-0 text-[#6CCF82]"
                  />

                  <a
                    href={`mailto:${email}`}
                    className="transition hover:text-[#6CCF82]"
                  >
                    {email}
                  </a>

                </div>

              </div>

            </div>


            {/* =================================================
                NAVIGATION
            ================================================== */}

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">

              <FooterNavigationColumn links={firstColumn} />

              <FooterNavigationColumn links={secondColumn} />

            </div>

          </div>

        </div>


        {/* =====================================================
            SERVICE OVERVIEW
        ====================================================== */}

        <div className="border-y border-white/10">

          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <p className="text-sm font-semibold text-white/80">
                  Unsere Leistungen
                </p>

                <p className="mt-1 text-xs leading-5 text-white/40">
                  Reinigung, Grünflächenpflege und Objektservice aus einer Hand.
                </p>

              </div>


              <div className="flex flex-wrap gap-2">

                <a
                  href="/gebaeudereinigung"
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.04]
                    px-4 py-2
                    text-xs font-medium
                    text-white/55
                    transition
                    hover:border-[#6CCF82]/30
                    hover:bg-[#139033]/10
                    hover:text-[#6CCF82]
                  "
                >
                  Gebäudereinigung
                </a>

                <a
                  href="/gruenflaechenpflege"
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.04]
                    px-4 py-2
                    text-xs font-medium
                    text-white/55
                    transition
                    hover:border-[#6CCF82]/30
                    hover:bg-[#139033]/10
                    hover:text-[#6CCF82]
                  "
                >
                  Grünflächenpflege
                </a>

                <a
                  href="/objektservice"
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.04]
                    px-4 py-2
                    text-xs font-medium
                    text-white/55
                    transition
                    hover:border-[#6CCF82]/30
                    hover:bg-[#139033]/10
                    hover:text-[#6CCF82]
                  "
                >
                  Objektservice
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-5 text-xs sm:flex-row sm:items-center sm:justify-between">

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/35">

              <Link
                viewTransition
                to="/impressum"
                className="transition hover:text-[#6CCF82]"
              >
                Impressum
              </Link>

              <Link
                viewTransition
                to="/datenschutz"
                className="transition hover:text-[#6CCF82]"
              >
                Datenschutz
              </Link>

              {/* <a
                href="/barrierefreiheit"
                className="transition hover:text-[#6CCF82]"
              >
                Barrierefreiheit
              </a> */}

            </div>


            <p className="text-white/35">
              © {new Date().getFullYear()} Westerbock Gebäudeservice GmbH
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}


/* =========================================================
   NAVIGATION COLUMN
========================================================= */

function FooterNavigationColumn({
  links,
}: {
  links: Link[]
}) {
  return (
    <div className="grid gap-9 sm:grid-cols-2">

      {links.map((link) => (

        <div key={link.url}>

          {/* Main link */}

          <a
            href={link.url}
            className="
              group inline-flex items-center gap-1.5
              text-sm font-semibold
              text-white/80
              transition
              hover:text-[#6CCF82]
            "
          >

            <span>{link.name}</span>

            <ArrowUpRight
              size={13}
              className="
                text-white/20
                transition duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-[#6CCF82]
              "
            />

          </a>


          {/* Sublinks */}

          {link.subLinks && link.subLinks.length > 0 && (

            <ul className="mt-4 space-y-2.5">

              {link.subLinks.map((subLink) => (

                <li key={subLink.url}>

                  <a
                    href={subLink.url}
                    className="
                      group flex items-center gap-1.5
                      text-xs leading-5
                      text-white/40
                      transition
                      hover:text-white/75
                    "
                  >

                    <ChevronRight
                      size={12}
                      className="
                        shrink-0
                        text-[#6CCF82]/40
                        transition-transform
                        group-hover:translate-x-0.5
                        group-hover:text-[#6CCF82]
                      "
                    />

                    <span>{subLink.name}</span>

                  </a>

                </li>

              ))}

            </ul>

          )}

        </div>

      ))}

    </div>
  )
}
