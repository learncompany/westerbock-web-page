// import {
//   ArrowUpRight,
//   ChevronRight,
//   Globe2Icon,
//   GlobeCode,
//   HeartHandshake,
//   Mail,
//   MapPin,
//   Send,
// } from "lucide-react";

// import { FaInstagram, FaTiktok } from "react-icons/fa";

// import { linkList } from "../data/general-data";

// import logo from "../assets/only-b-r-leaf.svg"

// type SubLink = {
//   name: string;
//   url: string;
// };

// type Link = {
//   name: string;
//   url: string;
//   subLinks?: SubLink[];
// };

// type FooterProps = {
//   email?: string;
//   phone?: string;
//   address?: string;
//   instagramUrl?: string;
//   tikTokUrl?: string;
// };

// export default function Footer({
//   email = "info@gbiso.de",
//   phone,
//   address = "Köln, Deutschland",
//   instagramUrl = "#",
//   tikTokUrl = "#",
// }: FooterProps) {
//   const navigation = linkList as Link[];

//   const firstColumn = navigation.slice(0, 3);
//   const secondColumn = navigation.slice(3);

//   return (
//     <footer className="relative overflow-hidden bg-[#F5FAFC] text-slate-800">
//       {/* =====================================================
//           Background Decorations
//       ====================================================== */}

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {/* Turquoise */}
//         <div className="absolute -left-40 top-[-180px] h-[420px] w-[420px] rounded-full bg-[#00AEAE]/[0.07] blur-3xl" />

//         {/* Blue */}
//         <div className="absolute right-[-180px] top-[25%] h-[500px] w-[500px] rounded-full bg-[#3386FF]/[0.055] blur-3xl" />

//         {/* Light cyan */}
//         <div className="absolute bottom-[-200px] left-[35%] h-[400px] w-[400px] rounded-full bg-[#0099E5]/[0.045] blur-3xl" />
//       </div>

//       <div className="relative">

//         {/* =====================================================
//             CTA
//         ====================================================== */}

//         <section className="border-b border-slate-200/60">
//           <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
//             <div
//               className="
//                 relative overflow-hidden rounded-[2.5rem]
//                 bg-gradient-to-br
//                 from-[#00AEAE]/10
//                 via-[#3386FF]/[0.08]
//                 to-[#3677FF]/[0.06]
//                 px-6 py-9
//                 sm:px-10 sm:py-11
//                 lg:px-14
//               "
//             >
//               {/* Decorative circles */}

//               <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-64 w-64 rounded-full bg-[#00AEAE]/10 blur-3xl" />

//               <div className="pointer-events-none absolute bottom-[-120px] left-[35%] h-72 w-72 rounded-full bg-[#3386FF]/10 blur-3xl" />

//               <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

//                 {/* Text */}

//                 <div className="max-w-2xl">
//                   <div className="mb-5 flex items-center gap-3">
//                     <div
//                       className="
//                         flex h-10 w-10 items-center justify-center
//                         rounded-xl
//                         bg-gradient-to-br
//                         from-[#00AEAE]/15
//                         to-[#3386FF]/15
//                         text-[#008080]
//                       "
//                     >
//                       <HeartHandshake size={19} />
//                     </div>

//                     <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
//                       Gemeinsam handeln
//                     </span>
//                   </div>

//                   <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
//                     Chancen entstehen,
//                     <br className="hidden sm:block" />
//                     wenn Menschen{" "}
//                     <span className="bg-gradient-to-r from-[#00AEAE] to-[#3386FF] bg-clip-text text-transparent">
//                       gemeinsam handeln.
//                     </span>
//                   </h2>

//                   <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
//                     Sie möchten mit der gBiSo ein Projekt entwickeln,
//                     unterstützen oder gemeinsam etwas verändern?
//                   </p>
//                 </div>

//                 {/* CTA */}

//                 <a
//                   href="/kontakt#kooperation-anfragen"
//                   className="
//                     group inline-flex shrink-0
//                     items-center justify-center gap-2
//                     rounded-full
//                     bg-gradient-to-r
//                     from-[#00AEAE]
//                     to-[#3386FF]
//                     px-6 py-3.5
//                     text-sm font-semibold text-white
//                     shadow-lg shadow-[#3386FF]/10
//                     transition duration-300
//                     hover:-translate-y-0.5
//                     hover:shadow-xl
//                   "
//                 >
//                   Kooperation anfragen

//                   <ArrowUpRight
//                     size={16}
//                     className="
//                       transition-transform duration-300
//                       group-hover:-translate-y-0.5
//                       group-hover:translate-x-0.5
//                     "
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* =====================================================
//             Main Footer
//         ====================================================== */}

//         <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
//           <div className="grid gap-12 lg:grid-cols-[1.05fr_2fr] lg:gap-20">

//             {/* =================================================
//                 Brand
//             ================================================== */}

//             <div className="max-w-sm">

//               {/* Logo */}

//               <a
//                 href="/"
//                 className="inline-flex items-center gap-3"
//                 aria-label="gBiSo Startseite"
//               >
//                 <div className="relative flex h-12 w-12 items-center justify-center">

//                   <img src={logo} className="relative text-sm font-bold text-white"/>
//                 </div>

//                 {/* <div>
//                   <span className="block text-xl font-bold tracking-[-0.04em] text-slate-900">
//                     gBiSo
//                   </span>

//                   <span className="block text-[9px] font-medium uppercase tracking-[0.13em] text-slate-400">
//                     Gemeinnützige Gesellschaft
//                   </span>
//                 </div> */}
//               </a>

//               <p className="mt-7 text-sm leading-6 text-slate-500">
//                 Gemeinnützige Gesellschaft für Bildung und Soziales.
//                 Gemeinsam schaffen wir Chancen für Bildung, Teilhabe und
//                 gesellschaftlichen Zusammenhalt.
//               </p>

//               {/* Contact */}

//               <div className="mt-7 space-y-3">
//                 <div className="flex items-center gap-3 text-sm text-slate-500">
//                   <MapPin
//                     size={16}
//                     className="shrink-0 text-[#00AEAE]"
//                   />

//                   <span>{address}</span>
//                 </div>

//                 {phone && (
//                   <div className="flex items-center gap-3 text-sm text-slate-500">
//                     <span className="w-4 text-center text-[#3386FF]">
//                       ☎
//                     </span>

//                     <a
//                       href={`tel:${phone.replace(/\s/g, "")}`}
//                       className="transition hover:text-[#008080]"
//                     >
//                       {phone}
//                     </a>
//                   </div>
//                 )}

//                 <div className="flex items-center gap-3 text-sm text-slate-500">
//                   <Mail
//                     size={16}
//                     className="shrink-0 text-[#3386FF]"
//                   />

//                   <a
//                     href={`mailto:${email}`}
//                     className="transition hover:text-[#008080]"
//                   >
//                     {email}
//                   </a>
//                 </div>
//               </div>

//               {/* Social */}

//               <div className="mt-8 flex items-center gap-2">
//                 <a
//                   href={instagramUrl}
//                   aria-label="Instagram"
//                   className="
//                     flex h-10 w-10 items-center justify-center
//                     rounded-xl
//                     border border-[#00AEAE]/10
//                     bg-gradient-to-br
//                     from-[#00AEAE]/[0.05]
//                     to-[#3386FF]/[0.04]
//                     text-[#008080]
//                     transition duration-300
//                     hover:-translate-y-0.5
//                     hover:border-[#00AEAE]/25
//                     hover:bg-[#00AEAE]/10
//                   "
//                 >
//                   <FaInstagram size={18} />
//                 </a>

//                 <a
//                   href={tikTokUrl}
//                   aria-label="Facebook"
//                   className="
//                     flex h-10 w-10 items-center justify-center
//                     rounded-xl
//                     border border-[#3386FF]/10
//                     bg-gradient-to-br
//                     from-[#3386FF]/[0.05]
//                     to-[#3677FF]/[0.04]
//                     text-[#3386FF]
//                     transition duration-300
//                     hover:-translate-y-0.5
//                     hover:border-[#3386FF]/25
//                     hover:bg-[#3386FF]/10
//                   "
//                 >
//                   <FaTiktok size={18}/>
//                 </a>
//               </div>
//             </div>

//             {/* =================================================
//                 Navigation
//             ================================================== */}

//             <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
//               <FooterNavigationColumn links={firstColumn} />
//               <FooterNavigationColumn links={secondColumn} />
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             Newsletter
//         ====================================================== */}

//         <div className="border-y border-slate-200/60">
//           <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
//             <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

//               <div className="flex items-start gap-4">
//                 <div
//                   className="
//                     flex h-10 w-10 shrink-0
//                     items-center justify-center
//                     rounded-xl
//                     bg-gradient-to-br
//                     from-[#00AEAE]/10
//                     to-[#3386FF]/10
//                     text-[#008080]
//                   "
//                 >
//                   <Send size={17} />
//                 </div>

//                 <div>
//                   <p className="text-sm font-semibold text-slate-800">
//                     Auf dem Laufenden bleiben
//                   </p>

//                   <p className="mt-1 text-xs leading-5 text-slate-400">
//                     Informationen zu Projekten, Entwicklungen und
//                     gesellschaftlichen Themen.
//                   </p>
//                 </div>
//               </div>

//               <a
//                 href="#newsletter"
//                 className="
//                   group inline-flex items-center gap-2
//                   self-start rounded-full
//                   border border-[#3386FF]/15
//                   bg-white
//                   px-5 py-2.5
//                   text-xs font-semibold text-[#008080]
//                   shadow-sm
//                   transition
//                   hover:-translate-y-0.5
//                   hover:border-[#00AEAE]/25
//                   hover:shadow-md
//                   lg:self-auto
//                 "
//               >
//                 Newsletter abonnieren

//                 <ArrowUpRight
//                   size={14}
//                   className="
//                     transition-transform
//                     group-hover:-translate-y-0.5
//                     group-hover:translate-x-0.5
//                   "
//                 />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             Bottom
//         ====================================================== */}

//         <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
//           <div className="flex flex-col gap-5 text-xs sm:flex-row sm:items-center sm:justify-between">

//             <div className="flex flex-wrap gap-x-5 gap-y-2 text-slate-400">
//               <a
//                 href="/impressum"
//                 className="transition hover:text-[#008080]"
//               >
//                 Impressum
//               </a>

//               <a
//                 href="/datenschutz"
//                 className="transition hover:text-[#008080]"
//               >
//                 Datenschutz
//               </a>

//               <a
//                 href="/cookies"
//                 className="transition hover:text-[#008080]"
//               >
//                 Cookie-Richtlinie
//               </a>

//               <a
//                 href="/barrierefreiheit"
//                 className="transition hover:text-[#008080]"
//               >
//                 Barrierefreiheit
//               </a>
//             </div>

//             <p className="text-slate-400">
//               © {new Date().getFullYear()} gBiSo · Gemeinnützige Gesellschaft
//               für Bildung und Soziales
//             </p>
//           </div>
//         </div>
        
//       </div>
//     </footer>
//   );
// }

// /* =========================================================
//    Navigation Column
// ========================================================= */

// function FooterNavigationColumn({
//   links,
// }: {
//   links: Link[];
// }) {
//   return (
//     <div className="grid gap-9 sm:grid-cols-2">
//       {links.map((link) => (
//         <div key={link.url}>

//           {/* Main link */}

//           <a
//             href={link.url}
//             className="
//               group inline-flex items-center gap-1.5
//               text-sm font-semibold
//               text-slate-800
//               transition
//               hover:text-[#008080]
//             "
//           >
//             <span>{link.name}</span>

//             <ArrowUpRight
//               size={13}
//               className="
//                 text-slate-300
//                 transition duration-300
//                 group-hover:-translate-y-0.5
//                 group-hover:translate-x-0.5
//                 group-hover:text-[#00AEAE]
//               "
//             />
//           </a>

//           {/* Sublinks */}

//           {link.subLinks && link.subLinks.length > 0 && (
//             <ul className="mt-4 space-y-2.5">
//               {link.subLinks.map((subLink) => (
//                 <li key={subLink.url}>
//                   <a
//                     href={subLink.url}
//                     className="
//                       group flex items-center gap-1.5
//                       text-xs leading-5
//                       text-slate-400
//                       transition
//                       hover:text-slate-700
//                     "
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="
//                         shrink-0
//                         text-[#00AEAE]/40
//                         transition-transform
//                         group-hover:translate-x-0.5
//                         group-hover:text-[#00AEAE]
//                       "
//                     />

//                     <span>{subLink.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react"

import { linkList } from "../data/general-data"

import logo from "../assets/only-b-r-leaf.svg"

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

                <a
                  href="/kontakt"
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

                </a>

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
                aria-label="Bergisch Rheinische Gebäudedienste Startseite"
              >

                <div className="relative flex size-14 items-center justify-center">

                  <img
                    src={logo}
                    alt="Bergisch Rheinische Gebäudedienste"
                    className="relative h-12 w-12"
                  />

                </div>

              </a>


              <h3 className="mt-7 text-lg font-semibold text-white">
                Bergisch Rheinische Gebäudedienste GmbH
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

              <a
                href="/impressum"
                className="transition hover:text-[#6CCF82]"
              >
                Impressum
              </a>

              <a
                href="/datenschutz"
                className="transition hover:text-[#6CCF82]"
              >
                Datenschutz
              </a>

              <a
                href="/cookies"
                className="transition hover:text-[#6CCF82]"
              >
                Cookie-Richtlinie
              </a>

              <a
                href="/barrierefreiheit"
                className="transition hover:text-[#6CCF82]"
              >
                Barrierefreiheit
              </a>

            </div>


            <p className="text-white/35">
              © {new Date().getFullYear()} Bergisch Rheinische
              Gebäudedienste GmbH
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
