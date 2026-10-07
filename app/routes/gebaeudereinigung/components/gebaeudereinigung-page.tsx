import GebaeudereinigungHero from "./gebaeudereinigung-hero"
import Unterhaltsreinigung from "./unterhaltsreinigung"
import Treppenhausreinigung from "./treppenhausreinigung"
import Bueroreinigung from "./bueroreinigung"
import Glasreinigung from "./glasreinigung"
import Baureinigung from "./baureinigung"
import Grundreinigung from "./grundreinigung"
import GebaeudereinigungCTA from "./gebaeudereinigung-cta"


/* =========================================================
   PAGE
========================================================= */

export default function GebaeudereinigungPage() {
  return (
    <main className="bg-white text-[#0F446A]">

      <GebaeudereinigungHero />

      <Unterhaltsreinigung />

      <Treppenhausreinigung />

      <Bueroreinigung />

      <Glasreinigung />

      <Baureinigung />

      <Grundreinigung />

      <GebaeudereinigungCTA />

    </main>
  )
}


/* =========================================================
   HERO
========================================================= */

// function GebaeudereinigungHero() {
//   return (
//     <section className="relative overflow-hidden bg-[#0F446A] text-white h-screen">

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(19,144,51,0.32),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(19,144,51,0.16),transparent_35%)]" />

//       <div className="absolute -right-40 -top-40 size-[500px] rounded-full border-[70px] border-white/[0.025]" />

//       <div className="absolute -bottom-60 left-1/3 size-[650px] rounded-full border-[90px] border-[#139033]/[0.05]" />

//       <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:py-44">

//         <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >

//             <div className="mb-7 flex items-center gap-3">

//               <span className="h-px w-10 bg-[#6CCF82]" />

//               <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
//                 Gebäudereinigung
//               </span>

//             </div>

//             <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">

//               Sauberkeit,

//               <span className="block text-[#6CCF82]">
//                 die bleibt.
//               </span>

//             </h1>

//           </motion.div>


//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               delay: 0.15,
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="lg:pb-2"
//           >

//             <p className="max-w-xl text-lg leading-8 text-white/65">
//               Professionelle Reinigungslösungen für Gebäude,
//               Arbeitsplätze, Gemeinschaftsflächen und besondere
//               Anforderungen.
//             </p>

//             <div className="mt-8 flex items-center gap-3">

//               <div className="flex size-10 items-center justify-center rounded-xl bg-[#139033]/20">
//                 <Sparkles className="size-5 text-[#6CCF82]" />
//               </div>

//               <span className="text-sm font-medium text-white/80">
//                 Individuell geplant. Zuverlässig umgesetzt.
//               </span>

//             </div>

//           </motion.div>

//         </div>


//         {/* Service navigation */}

//         <div className="mt-20 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">

//           {[
//             ["01", "Unterhaltsreinigung", "#unterhaltsreinigung"],
//             ["02", "Treppenhausreinigung", "#treppenhausreinigung"],
//             ["03", "Büroreinigung", "#bueroreinigung"],
//             ["04", "Glasreinigung", "#glasreinigung"],
//             ["05", "Baureinigung", "#baureinigung"],
//             ["06", "Grundreinigung", "#grundreinigung"],
//           ].map(([number, title, href]) => (

//             <a
//               key={number}
//               href={href}
//               className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-[#6CCF82]/30 hover:bg-white/[0.08]"
//             >

//               <div className="flex items-center gap-4">

//                 <span className="font-mono text-xs text-[#6CCF82]">
//                   {number}
//                 </span>

//                 <span className="text-sm font-medium text-white/75 transition-colors group-hover:text-white">
//                   {title}
//                 </span>

//               </div>

//               <ChevronRight className="size-4 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-[#6CCF82]" />

//             </a>

//           ))}

//         </div>

//       </div>

//     </section>
//   )
// }


/* =========================================================
   01 — UNTERHALTSREINIGUNG
========================================================= */

// function Unterhaltsreinigung() {
//   const items = [
//     "Bürogebäude",
//     "Schulen",
//     "Bildungseinrichtungen",
//     "Praxen",
//     "Soziale Einrichtungen",
//     "Gewerbeobjekte",
//     "Wohnanlagen",
//     "Gemeinschaftsflächen",
//     "Sanitärbereiche",
//   ]

//   return (
//     <ServiceSection
//       id="unterhaltsreinigung"
//       number="01"
//       eyebrow="Unterhaltsreinigung"
//       title="Regelmäßige Sauberkeit für dauerhaft gepflegte Räume."
//       icon={ClipboardCheck}
//       image={bueroreinigung}
//       imageAlt="Professionelle Unterhaltsreinigung"
//     >

//       <p>
//         Die Unterhaltsreinigung bildet die Grundlage für dauerhaft saubere
//         und hygienische Räumlichkeiten.
//       </p>

//       <p>
//         Wir übernehmen wiederkehrende Reinigungsarbeiten in individuell
//         vereinbarten Intervallen.
//       </p>

//       <p>
//         Dabei kann die Reinigung täglich, mehrmals wöchentlich,
//         wöchentlich oder in anderen abgestimmten Abständen durchgeführt
//         werden.
//       </p>

//       <p>
//         Vor Beginn der Zusammenarbeit definieren wir gemeinsam, welche
//         Räume und Flächen gereinigt werden und welche Leistungen
//         regelmäßig durchgeführt werden sollen.
//       </p>

//       <ServiceList
//         title="Geeignet für"
//         items={items}
//       />

//       <ServiceButton label="Angebot für Unterhaltsreinigung anfragen" />

//     </ServiceSection>
//   )
// }


/* =========================================================
   02 — TREPPENHAUSREINIGUNG
========================================================= */

// function Treppenhausreinigung() {
//   const items = [
//     "Treppen und Podeste",
//     "Eingangsbereiche",
//     "Handläufe und Geländer",
//     "Briefkastenanlagen",
//     "Fensterbänke",
//     "Aufzugbereiche",
//     "Türen",
//     "Entfernung von Staub und Spinnweben",
//     "Reinigung weiterer Gemeinschaftsflächen",
//   ]

//   return (
//     <ServiceSection
//       id="treppenhausreinigung"
//       number="02"
//       eyebrow="Treppenhausreinigung"
//       title="Der erste Eindruck beginnt im Treppenhaus."
//       icon={DoorOpen}
//       image={laubreinigung}
//       imageAlt="Gepflegter Eingangs- und Treppenhausbereich"
//       reversed
//       dark
//     >

//       <p>
//         Treppenhäuser und Eingangsbereiche werden täglich stark beansprucht
//         und gehören gleichzeitig zu den ersten Bereichen, die Bewohner,
//         Besucher oder Kunden wahrnehmen.
//       </p>

//       <p>
//         Wir übernehmen die regelmäßige Reinigung von Treppenhäusern in
//         Wohngebäuden, Gewerbeimmobilien und weiteren Objekten.
//       </p>

//       <p>
//         Reinigungsumfang und Rhythmus werden individuell vereinbart.
//       </p>

//       <ServiceList
//         title="Leistungsübersicht"
//         items={items}
//       />

//       <ServiceButton
//         label="Angebot für Treppenhausreinigung anfragen"
//         light
//       />

//     </ServiceSection>
//   )
// }


/* =========================================================
   03 — BÜROREINIGUNG
========================================================= */

// function Bueroreinigung() {
//   const items = [
//     "Arbeitsflächen",
//     "Bodenflächen",
//     "Besprechungsräume",
//     "Empfangsbereiche",
//     "Teeküchen",
//     "Sanitäranlagen",
//     "Gemeinschaftsbereiche",
//     "Abfallentsorgung",
//     "Weitere Leistungen nach Vereinbarung",
//   ]

//   return (
//     <ServiceSection
//       id="bueroreinigung"
//       number="03"
//       eyebrow="Büroreinigung"
//       title="Saubere Arbeitsplätze für einen professionellen Alltag."
//       icon={Building2}
//       image={bueroreinigung}
//       imageAlt="Saubere und gepflegte Büroräume"
//     >

//       <p>
//         Saubere Büroräume tragen zu einem angenehmen Arbeitsumfeld bei
//         und hinterlassen bei Mitarbeitern, Kunden und Geschäftspartnern
//         einen professionellen Eindruck.
//       </p>

//       <p>
//         Wir übernehmen die regelmäßige Reinigung von Büroflächen und
//         stimmen unsere Einsatzzeiten auf die betrieblichen Abläufe
//         unserer Auftraggeber ab.
//       </p>

//       <ServiceList
//         title="Leistungsübersicht"
//         items={items}
//       />

//       <ServiceButton label="Büroreinigung anfragen" />

//     </ServiceSection>
//   )
// }


/* =========================================================
   04 — GLASREINIGUNG
========================================================= */

// function Glasreinigung() {
//   const items = [
//     "Fensterreinigung",
//     "Rahmenreinigung",
//     "Glastüren",
//     "Glastrennwände",
//     "Schaufenster",
//     "Weitere Glasflächen",
//   ]

//   return (
//     <ServiceSection
//       id="glasreinigung"
//       number="04"
//       eyebrow="Glasreinigung"
//       title="Klare Sicht. Gepflegter Eindruck."
//       icon={GlassWater}
//       image={glasreinigung}
//       imageAlt="Professionelle Glasreinigung"
//       reversed
//       dark
//     >

//       <p>
//         Fenster und Glasflächen prägen das Erscheinungsbild eines Gebäudes.
//       </p>

//       <p>
//         Wir reinigen Glasflächen professionell und stimmen Reinigungsumfang
//         und Intervalle individuell auf das jeweilige Objekt ab.
//       </p>

//       <p>
//         Neben klassischen Fenstern können auch Glastüren, Trennwände und
//         weitere zugängliche Glasflächen in die Reinigung einbezogen werden.
//       </p>

//       <ServiceList
//         title="Leistungsübersicht"
//         items={items}
//       />

//       <ServiceButton
//         label="Angebot für Glasreinigung anfragen"
//         light
//       />

//     </ServiceSection>
//   )
// }


/* =========================================================
   05 — BAUREINIGUNG
========================================================= */

// function Baureinigung() {
//   return (
//     <section
//       id="baureinigung"
//       className="relative overflow-hidden bg-[#F5F8F6] py-28 sm:py-36"
//     >

//       <div className="absolute right-0 top-0 size-[500px] rounded-full bg-[#139033]/5 blur-[130px]" />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

//         <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

//           <div>

//             <Badge
//               variant="outline"
//               className="border-[#139033]/30 bg-white text-[#12641A]"
//             >
//               05 · Baureinigung
//             </Badge>

//             <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
//               Sauber übergeben.
//               <span className="block text-[#139033]">
//                 Bereit für den nächsten Schritt.
//               </span>
//             </h2>

//             <p className="mt-7 max-w-xl text-base leading-8 text-[#6F7782]">
//               Baureinigung umfasst die Reinigung von Flächen und Bereichen
//               im Zusammenhang mit Bau-, Umbau- oder Renovierungsarbeiten.
//               Der konkrete Leistungsumfang wird individuell auf das
//               jeweilige Objekt und den Baufortschritt abgestimmt.
//             </p>

//             <div className="mt-9">

//               <ServiceButton label="Angebot für Baureinigung anfragen" />

//             </div>

//           </div>


//           <div className="relative">

//             <div className="absolute -inset-4 rounded-[2.5rem] bg-[#139033]/5 blur-xl" />

//             <Card className="relative overflow-hidden rounded-[2.5rem] border-0 bg-[#0F446A] p-8 text-white shadow-2xl sm:p-10">

//               <div className="flex size-14 items-center justify-center rounded-2xl bg-[#139033]/20">
//                 <Hammer className="size-7 text-[#6CCF82]" />
//               </div>

//               <h3 className="mt-8 text-2xl font-semibold">
//                 Individuell abgestimmt
//               </h3>

//               <p className="mt-4 text-sm leading-7 text-white/55">
//                 Bei Bau- und Renovierungsprojekten können Anforderungen
//                 und Zeitpläne sehr unterschiedlich sein. Deshalb stimmen
//                 wir Umfang und Ablauf individuell auf Ihr Projekt ab.
//               </p>

//               <div className="mt-8 h-px bg-white/10" />

//               <div className="mt-7 space-y-4">

//                 {[
//                   "Individuelle Abstimmung",
//                   "Berücksichtigung des Baufortschritts",
//                   "Flexible Leistungsplanung",
//                 ].map((item) => (

//                   <div
//                     key={item}
//                     className="flex items-center gap-3 text-sm text-white/75"
//                   >

//                     <span className="flex size-5 items-center justify-center rounded-full bg-[#139033]/20">
//                       <Check className="size-3 text-[#6CCF82]" />
//                     </span>

//                     {item}

//                   </div>

//                 ))}

//               </div>

//             </Card>

//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }


/* =========================================================
   06 — GRUNDREINIGUNG
========================================================= */

// function Grundreinigung() {
//   const items = [
//     "Bodenflächen",
//     "Sanitärbereiche",
//     "Küchenbereiche",
//     "Leerstände",
//     "Objekte nach Mieterwechsel",
//     "Stark beanspruchte Räume",
//     "Saisonale Intensivreinigungen",
//   ]

//   return (
//     <ServiceSection
//       id="grundreinigung"
//       number="06"
//       eyebrow="Grundreinigung"
//       title="Wenn normale Reinigung nicht mehr ausreicht."
//       icon={SprayCan}
//       image={winterdienst}
//       imageAlt="Intensive professionelle Reinigung"
//     >

//       <p>
//         Bei stärkeren oder über längere Zeit entstandenen Verschmutzungen
//         kann eine intensive Grundreinigung erforderlich sein.
//       </p>

//       <p>
//         Dabei werden Flächen und Bereiche deutlich umfassender bearbeitet
//         als bei einer regelmäßigen Unterhaltsreinigung.
//       </p>

//       <p>
//         Vor Beginn prüfen wir den Zustand und legen gemeinsam mit dem
//         Auftraggeber den notwendigen Umfang fest.
//       </p>

//       <ServiceList
//         title="Geeignet beispielsweise für"
//         items={items}
//       />

//       <ServiceButton label="Grundreinigung anfragen" />

//     </ServiceSection>
//   )
// }


/* =========================================================
   GENERIC SERVICE SECTION
========================================================= */

// function ServiceSection({
//   id,
//   number,
//   eyebrow,
//   title,
//   icon: Icon,
//   image,
//   imageAlt,
//   reversed = false,
//   dark = false,
//   children,
// }: {
//   id: string
//   number: string
//   eyebrow: string
//   title: string
//   icon: typeof Building2
//   image: string
//   imageAlt: string
//   reversed?: boolean
//   dark?: boolean
//   children: React.ReactNode
// }) {
//   return (
//     <section
//       id={id}
//       className={`relative overflow-hidden py-28 sm:py-36 ${
//         dark
//           ? "bg-[#0F446A] text-white"
//           : "bg-white text-[#0F446A]"
//       }`}
//     >

//       {dark && (
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(19,144,51,0.25),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(19,144,51,0.12),transparent_35%)]" />
//       )}

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

//         <div
//           className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-24 ${
//             reversed ? "lg:[&>*:first-child]:order-2" : ""
//           }`}
//         >

//           {/* Image */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: reversed ? 60 : -60,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{
//               duration: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative"
//           >

//             <div
//               className={`absolute -inset-4 rounded-[2.5rem] ${
//                 dark
//                   ? "bg-[#139033]/10"
//                   : "bg-[#139033]/5"
//               } blur-xl`}
//             />

//             <div className="group relative h-[460px] overflow-hidden rounded-[2.5rem]">

//               <motion.img
//                 src={image}
//                 alt={imageAlt}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.9 }}
//                 className="h-full w-full object-cover"
//               />

//               <div
//                 className={`absolute inset-0 ${
//                   dark
//                     ? "bg-gradient-to-t from-[#0F446A]/90 via-[#0F446A]/20 to-transparent"
//                     : "bg-gradient-to-t from-[#0F446A]/75 via-transparent to-[#139033]/10"
//                 }`}
//               />

//               <div className="absolute left-7 top-7 flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-[#0F446A]/70 text-white backdrop-blur-md">

//                 <Icon className="size-6 text-[#6CCF82]" />

//               </div>

//               <div className="absolute bottom-7 left-7">

//                 <span className="font-mono text-xs text-white/50">
//                   {number}
//                 </span>

//                 <p className="mt-1 text-lg font-medium text-white">
//                   {eyebrow}
//                 </p>

//               </div>

//             </div>

//           </motion.div>


//           {/* Content */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{
//               delay: 0.1,
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//           >

//             <Badge
//               variant="outline"
//               className={
//                 dark
//                   ? "border-white/15 bg-white/5 text-[#6CCF82]"
//                   : "border-[#139033]/30 bg-[#139033]/5 text-[#12641A]"
//               }
//             >
//               {number} · {eyebrow}
//             </Badge>

//             <h2
//               className={`mt-6 text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl ${
//                 dark ? "text-white" : "text-[#0F446A]"
//               }`}
//             >
//               {title}
//             </h2>

//             <div
//               className={`mt-8 space-y-5 text-base leading-7 ${
//                 dark
//                   ? "text-white/60"
//                   : "text-[#6F7782]"
//               }`}
//             >
//               {children}
//             </div>

//           </motion.div>

//         </div>

//       </div>

//     </section>
//   )
// }


/* =========================================================
   SERVICE LIST
========================================================= */

// function ServiceList({
//   title,
//   items,
// }: {
//   title: string
//   items: string[]
// }) {
//   return (
//     <div className="mt-9">

//       <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#139033]">
//         {title}
//       </p>

//       <div className="grid gap-2 sm:grid-cols-2">

//         {items.map((item) => (

//           <div
//             key={item}
//             className="flex items-center gap-3"
//           >

//             <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#139033]/10">
//               <Check className="size-3 text-[#139033]" />
//             </span>

//             <span className="text-sm">
//               {item}
//             </span>

//           </div>

//         ))}

//       </div>

//     </div>
//   )
// }


/* =========================================================
   SERVICE BUTTON
========================================================= */

// function ServiceButton({
//   label,
//   light = false,
// }: {
//   label: string
//   light?: boolean
// }) {
//   return (
//     <Button
//       size="lg"
//       className={
//         light
//           ? "group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-6 text-white shadow-lg shadow-black/20 hover:opacity-90"
//           : "group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-6 text-white shadow-lg shadow-[#139033]/20 hover:opacity-90"
//       }
//     >
//       {label}

//       <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//     </Button>
//   )
// }


/* =========================================================
   CTA
========================================================= */

// function GebaeudereinigungCTA() {
//   return (
//     <section className="px-5 pb-24 sm:px-8 sm:pb-32">

//       <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0F446A]">

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(19,144,51,0.5),transparent_32%),radial-gradient(circle_at_10%_100%,rgba(19,144,51,0.15),transparent_35%)]" />

//         <div className="absolute -right-32 -top-32 size-[450px] rounded-full border-[60px] border-white/[0.025]" />

//         <div className="relative px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">

//           <div className="max-w-3xl">

//             <div className="flex items-center gap-3 text-[#6CCF82]">

//               <Sparkles className="size-5" />

//               <span className="text-sm font-medium">
//                 Gebäudereinigung aus einer Hand
//               </span>

//             </div>

//             <h2 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">

//               Welche Reinigung

//               <span className="block text-[#6CCF82]">
//                 braucht Ihr Objekt?
//               </span>

//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
//               Ob regelmäßige Unterhaltsreinigung, gepflegte Treppenhäuser,
//               saubere Büros, klare Glasflächen oder eine intensive
//               Grundreinigung – wir besprechen Ihren individuellen Bedarf
//               persönlich mit Ihnen.
//             </p>

//             <Button
//               size="lg"
//               className="group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-7 text-white shadow-xl shadow-black/20 hover:opacity-90"
//               onClick={() => {
//                 document
//                   .getElementById("kontaktformular")
//                   ?.scrollIntoView({
//                     behavior: "smooth",
//                   })
//               }}
//             >
//               Angebot anfragen

//               <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//             </Button>

//           </div>

//         </div>

//       </div>

//     </section>
//   )
// }
