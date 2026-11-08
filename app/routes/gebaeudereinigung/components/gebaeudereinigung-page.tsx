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