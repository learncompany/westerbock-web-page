import KontaktHero from "./contact-hero"
import KontaktAnfrage from "./kontakt-anfrage"
import KontaktInfo from "./kontakt-info"


/* =========================================================
   PAGE
========================================================= */

export default function KontaktSections() {
  return (
    <main className="bg-white text-[#0F446A]">

      <KontaktHero />

      <KontaktAnfrage />

      {/* <KontaktInfo /> */}

    </main>
  )
}
