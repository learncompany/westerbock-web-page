import GruenflaechenpflegeHero from "./gruenflaechenpflege-hero"
import Gartenpflege from "./gartenpflege"
import Rasenpflege from "./rasenpflege"
import Laubbeseitigung from "./laubbeseitigung"
import Winterdienst from "./winterdienst"
import GruenflaechenpflegeCTA from "./gruenflaechenpflege-cta"


/* =========================================================
   PAGE
========================================================= */

export default function GruenflaechenpflegeSections() {
  return (
    <main className="bg-white text-[#0F446A]">

      <GruenflaechenpflegeHero />

      <Gartenpflege />

      <Rasenpflege />

      <Laubbeseitigung />

      <Winterdienst />

      <GruenflaechenpflegeCTA />

    </main>
  )
}