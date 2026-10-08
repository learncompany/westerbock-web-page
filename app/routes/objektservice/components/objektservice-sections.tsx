import ObjektserviceHero from "./objektservice-hero"
import Hausmeisterservice from "./hausmeisterservice"
import Objektbetreuung from "./objektbetreuung"
import Entruempelung from "./entruempelung"
import PhotovoltaikReinigung from "./photovoltaik-reinigung"
import Schaedlingsbekaempfung from "./schaedlingsbekaempfung"
import ObjektserviceCTA from "./objektservice-cta"


/* =========================================================
   PAGE
========================================================= */

export default function ObjektserviceSections() {
  return (
    <main className="bg-white text-[#0F446A]">

      <ObjektserviceHero />

      <Hausmeisterservice />

      <Objektbetreuung />

      <Entruempelung />

      <PhotovoltaikReinigung />

      <Schaedlingsbekaempfung />

      <ObjektserviceCTA />

    </main>
  )
}


/* =========================================================
   HERO
========================================================= */

// function ObjektserviceHero() {
//   return (
//     <section className="relative overflow-hidden bg-[#0F446A] text-white h-screen">

//       {/* Background gradients */}

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(19,144,51,0.32),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(19,144,51,0.16),transparent_35%)]" />

//       <div className="absolute -right-40 -top-40 size-[500px] rounded-full border-[70px] border-white/[0.025]" />

//       <div className="absolute -bottom-60 left-1/3 size-[650px] rounded-full border-[90px] border-[#139033]/[0.05]" />

//       <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:py-44">

//         <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">

//           {/* LEFT */}

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
//                 Objektservice
//               </span>

//             </div>

//             <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">

//               Ein Ansprechpartner

//               <span className="block text-[#6CCF82]">
//                 für Ihre Immobilie.
//               </span>

//             </h1>

//           </motion.div>


//           {/* RIGHT */}

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
//               Zuverlässige Unterstützung rund um Ihre Immobilie –
//               von der laufenden Betreuung über Hausmeisterleistungen
//               bis hin zu ergänzenden Dienstleistungen.
//             </p>

//             <div className="mt-8 flex items-center gap-3">

//               <div className="flex size-10 items-center justify-center rounded-xl bg-[#139033]/20">
//                 <Building2 className="size-5 text-[#6CCF82]" />
//               </div>

//               <span className="text-sm font-medium text-white/80">
//                 Betreuung. Koordination. Service.
//               </span>

//             </div>

//           </motion.div>

//         </div>


//         {/* NAVIGATION */}

//         <div className="mt-20 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">

//           {[
//             ["01", "Hausmeisterservice", "#hausmeisterservice"],
//             ["02", "Objektbetreuung", "#objektbetreuung"],
//             ["03", "Entrümpelung", "#entruempelung"],
//             ["04", "Photovoltaik", "#photovoltaik"],
//             ["05", "Schädlingsbekämpfung", "#schaedlingsbekaempfung"],
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
   01 — HAUSMEISTERSERVICE
========================================================= */

// function Hausmeisterservice() {

//   const items = [
//     "Regelmäßige Objektbegehungen",
//     "Kontrolle von Gemeinschaftsflächen",
//     "Kontrolle von Beleuchtung und Zugängen",
//     "Kleinere zulässige Arbeiten",
//     "Meldung festgestellter Schäden",
//     "Koordination notwendiger Fachunternehmen",
//     "Kontrolle der Außenbereiche",
//     "Unterstützung bei Ordnung und Sauberkeit",
//   ]

//   return (
//     <ObjektServiceSection
//       id="hausmeisterservice"
//       number="01"
//       eyebrow="Hausmeisterservice"
//       title="Einer, der das Objekt im Blick behält."
//       icon={Wrench}
//       image={betreuung}
//       imageAlt="Professionelle Objektbetreuung"
//     >

//       <p>
//         Ein zuverlässig betreutes Gebäude benötigt regelmäßige Kontrollen
//         und Ansprechpartner, die sich um anfallende Aufgaben kümmern.
//       </p>

//       <p>
//         Unser Hausmeisterservice unterstützt Eigentümer,
//         Hausverwaltungen, Unternehmen und Einrichtungen bei der laufenden
//         Betreuung ihrer Immobilien.
//       </p>

//       <ObjektServiceList
//         title="Mögliche Leistungen"
//         items={items}
//       />

//       <p className="!mt-6 text-sm">
//         Die Durchführung handwerklicher Arbeiten erfolgt selbstverständlich
//         nur im Rahmen der jeweils zulässigen Tätigkeiten.
//       </p>

//       <ObjektServiceButton label="Hausmeisterservice anfragen" />

//     </ObjektServiceSection>
//   )
// }


/* =========================================================
   02 — OBJEKTBETREUUNG
========================================================= */

// function Objektbetreuung() {

//   const items = [
//     "Unterhaltsreinigung",
//     "Treppenhausreinigung",
//     "Grünflächenpflege",
//     "Außenanlagenpflege",
//     "Hausmeisterservice",
//     "Winterdienst",
//     "Kontrollgänge",
//     "Weitere vereinbarte Leistungen",
//   ]

//   return (
//     <ObjektServiceSection
//       id="objektbetreuung"
//       number="02"
//       eyebrow="Objektbetreuung"
//       title="Ein Ansprechpartner für Ihr gesamtes Objekt."
//       icon={ClipboardCheck}
//       image={bueroreinigung}
//       imageAlt="Ganzheitliche Objektbetreuung"
//       reversed
//       dark
//     >

//       <p>
//         Mit unserer Objektbetreuung bündeln wir verschiedene
//         Dienstleistungen rund um Ihre Immobilie.
//       </p>

//       <p>
//         Statt unterschiedliche Ansprechpartner für Reinigung,
//         Außenanlagen und laufende Betreuung zu koordinieren, können
//         vereinbarte Leistungen zentral über uns organisiert werden.
//       </p>

//       <ObjektServiceList
//         title="Mögliche Kombination"
//         items={items}
//         dark
//       />

//       <ObjektServiceButton
//         label="Objektbetreuung anfragen"
//         light
//       />

//     </ObjektServiceSection>
//   )
// }


/* =========================================================
   03 — ENTRÜMPELUNG
========================================================= */

// function Entruempelung() {

//   const items = [
//     "Wohnungen",
//     "Keller",
//     "Dachböden",
//     "Büroräume",
//     "Gewerbeflächen",
//     "Lagerräume",
//     "Nebenräume",
//   ]

//   return (
//     <ObjektServiceSection
//       id="entruempelung"
//       number="03"
//       eyebrow="Entrümpelung"
//       title="Platz schaffen. Sauber übergeben."
//       icon={PackageOpen}
//       image={betreuung}
//       imageAlt="Räumung und Entrümpelung"
//     >

//       <p>
//         Bei Umzügen, Leerständen, Haushaltsauflösungen oder der Räumung
//         gewerblicher Flächen können größere Mengen nicht mehr benötigter
//         Gegenstände entstehen.
//       </p>

//       <p>
//         Wir unterstützen bei der Räumung und Entrümpelung von vereinbarten
//         Flächen und sorgen anschließend auf Wunsch für eine entsprechende
//         Reinigung.
//       </p>

//       <ObjektServiceList
//         title="Mögliche Einsatzbereiche"
//         items={items}
//       />

//       <ObjektServiceButton label="Entrümpelung anfragen" />

//     </ObjektServiceSection>
//   )
// }


/* =========================================================
   04 — PHOTOVOLTAIK
========================================================= */

// function PhotovoltaikReinigung() {
//   return (
//     <ObjektServiceSection
//       id="photovoltaik"
//       number="04"
//       eyebrow="Photovoltaik Reinigung"
//       title="Saubere Module für eine gepflegte Anlage."
//       icon={SunMedium}
//       image={glasreinigung}
//       imageAlt="Reinigung von Photovoltaikmodulen"
//       reversed
//       dark
//     >

//       <p>
//         Photovoltaikanlagen sind dauerhaft Witterung, Staub, Pollen und
//         weiteren Umwelteinflüssen ausgesetzt.
//       </p>

//       <p>
//         Eine fachgerechte Reinigung kann dazu beitragen, hartnäckige
//         Ablagerungen zu entfernen und die Anlage dauerhaft gepflegt zu
//         halten.
//       </p>

//       <p>
//         Vor der Durchführung prüfen wir die Gegebenheiten und stimmen
//         Reinigungsverfahren und Zugänglichkeit auf die jeweilige Anlage ab.
//       </p>

//       <ObjektServiceButton
//         label="Photovoltaik Reinigung anfragen"
//         light
//       />

//     </ObjektServiceSection>
//   )
// }


/* =========================================================
   05 — SCHÄDLINGSBEKÄMPFUNG
========================================================= */

// function Schaedlingsbekaempfung() {

//   return (
//     <ObjektServiceSection
//       id="schaedlingsbekaempfung"
//       number="05"
//       eyebrow="Schädlingsbekämpfung"
//       title="Professionelle Unterstützung bei Schädlingsbefall."
//       icon={ShieldCheck}
//       image={winterdienst}
//       imageAlt="Professionelle Unterstützung bei Schädlingsbefall"
//     >

//       <p>
//         Schädlingsbefall erfordert schnelles und fachgerechtes Handeln.
//       </p>

//       <p>
//         Entsprechende Leistungen werden ausschließlich durch hierfür
//         qualifizierte Personen beziehungsweise geeignete Fachpartner
//         durchgeführt.
//       </p>

//       <p>
//         Nach Feststellung der Situation wird entschieden, welche
//         Maßnahmen fachlich erforderlich und zulässig sind.
//       </p>

//       <p>
//         Unser Ziel ist eine diskrete, zuverlässige und nachvollziehbare
//         Abwicklung.
//       </p>

//       <ObjektServiceButton label="Anfrage Schädlingsbekämpfung" />

//     </ObjektServiceSection>
//   )
// }


/* =========================================================
   GENERIC SERVICE SECTION
========================================================= */

// function ObjektServiceSection({
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
//   icon: typeof Wrench
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
//             reversed
//               ? "lg:[&>*:first-child]:order-2"
//               : ""
//           }`}
//         >

//           {/* IMAGE */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: reversed ? 60 : -60,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               margin: "-100px",
//             }}
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


//           {/* CONTENT */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 40,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               margin: "-100px",
//             }}
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
//                 dark
//                   ? "text-white"
//                   : "text-[#0F446A]"
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
   LIST
========================================================= */

// function ObjektServiceList({
//   title,
//   items,
//   dark = false,
// }: {
//   title: string
//   items: string[]
//   dark?: boolean
// }) {
//   return (
//     <div className="mt-9">

//       <p
//         className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${
//           dark
//             ? "text-[#6CCF82]"
//             : "text-[#139033]"
//         }`}
//       >
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
   BUTTON
========================================================= */

// function ObjektServiceButton({
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

// function ObjektserviceCTA() {
//   return (
//     <section className="px-5 pb-24 pt-24 sm:px-8 sm:pb-32">

//       <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#0F446A]">

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(19,144,51,0.5),transparent_32%),radial-gradient(circle_at_10%_100%,rgba(19,144,51,0.15),transparent_35%)]" />

//         <div className="absolute -right-32 -top-32 size-[450px] rounded-full border-[60px] border-white/[0.025]" />

//         <div className="relative px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">

//           <div className="max-w-3xl">

//             <div className="flex items-center gap-3 text-[#6CCF82]">

//               <Sparkles className="size-5" />

//               <span className="text-sm font-medium">
//                 Objektservice aus einer Hand
//               </span>

//             </div>

//             <h2 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">

//               Ihr Objekt.

//               <span className="block text-[#6CCF82]">
//                 Unser Service.
//               </span>

//             </h2>

//             <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
//               Ob Hausmeisterservice, Objektbetreuung, Entrümpelung oder
//               ergänzende Dienstleistungen – wir besprechen Ihren Bedarf
//               persönlich und entwickeln eine passende Lösung.
//             </p>

//             <Button
//               size="lg"
//               className="group mt-9 bg-gradient-to-r from-[#139033] to-[#12641A] px-7 text-white shadow-xl shadow-black/20 hover:opacity-90"
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
