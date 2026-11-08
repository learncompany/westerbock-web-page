import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Check,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";

import type { Route } from "./+types/danke";

/* =========================================================
   Lokaler ThemesContainer
========================================================= */

function ThemesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 mx-auto w-full max-w-7xl">
      {children}
    </div>
  );
}



/* =========================================================
   Danke Seite
========================================================= */

export default function DankePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F4F7FC] px-4 py-20">

      {/* Background shapes */}
      <div className="pointer-events-none absolute -left-40 top-[-100px] h-[500px] w-[500px] rounded-full bg-[#153E75]/[0.09] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-[-120px] h-[500px] w-[500px] rounded-full bg-[#245CA6]/[0.09] blur-3xl" />

      <ThemesContainer>
        <motion.div
          initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-2xl"
        >

          {/* Main card */}
          <div className="relative overflow-hidden rounded-[2.75rem] bg-gradient-to-br from-[#E8EFF9] via-[#EDF3FC] to-[#E3EAF7] p-8 text-center shadow-[0_25px_80px_rgba(21,62,117,0.13)] sm:p-14">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-[#153E75]/10 blur-3xl" />

            <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-72 w-72 rounded-full bg-[#245CA6]/10 blur-3xl" />

            <div className="relative">

              {/* Success icon */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: "backOut",
                }}
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#153E75] to-[#245CA6] text-white shadow-[0_15px_40px_rgba(21,62,117,0.25)]"
              >
                <Check size={42} strokeWidth={2.5} />
              </motion.div>

              {/* Label */}
              <p className="mt-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#153E75]/70">
                Nachricht erfolgreich übermittelt
              </p>

              {/* Heading */}
              <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#102B50] sm:text-5xl">
                Vielen Dank für
                <br />
                Ihre Nachricht.
              </h1>

              {/* Gradient line */}
              <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#153E75] to-[#3974BD]" />

              {/* Description */}
              <p className="mx-auto mt-7 max-w-md text-base leading-7 text-slate-600">
                Ihre Anfrage wurde erfolgreich übermittelt.
                Wir freuen uns über Ihr Interesse an unserer Arbeit
                und werden uns schnellstmöglich bei Ihnen melden.
              </p>

              {/* Additional note */}
              <div className="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-2xl border border-white/80 bg-white/75 p-4 text-left shadow-sm backdrop-blur">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#153E75]/15 to-[#3974BD]/15 text-[#153E75]">
                  <HeartHandshake size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#102B50]">
                    Schön, dass Sie Kontakt aufnehmen.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Gemeinsam können wir etwas bewegen.
                  </p>
                </div>
              </div>

              {/* Back button */}
              <Link
                to="/"
                viewTransition
                className="group mx-auto mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#153E75] to-[#245CA6] px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(21,62,117,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(21,62,117,0.3)]"
              >
                Zurück zur Startseite

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>
          </div>
        </motion.div>
      </ThemesContainer>
    </main>
  );
}