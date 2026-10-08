import React from 'react'
import { Badge } from '../../../components/ui/badge'
import ImageTile from './image-tile'

import glasreinigung from "../../../assets/pictures/glasreinigung.jpg"
import laubreinigung from "../../../assets/pictures/laubenbeseitigung.jpg"
import winterdienst from "../../../assets/pictures/winterdienst.jpg"
import bueroreinigung from "../../../assets/pictures/bueroreinigung.jpg"

export default function ImageMosaic() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8F6] py-28 sm:py-36">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">

            <div className="flex flex-col justify-center">

              <Badge
                variant="outline"
                className="w-fit border-[#139033]/30 bg-white text-[#12641A]"
              >
                Ganzheitlicher Service
              </Badge>

              <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">

                Innen.

                <span className="block text-[#139033]">
                  Außen.
                </span>

                Rundum.

              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-[#6F7782]">
                Von der Reinigung im Gebäude bis zur Pflege der
                Außenflächen und der technischen beziehungsweise
                organisatorischen Betreuung.
              </p>

            </div>


            {/* Mosaic */}

            <div className="grid grid-cols-2 gap-3 sm:gap-5">

              <ImageTile
                src={glasreinigung}
                alt="Gebäudereinigung"
                className="h-65 sm:h-85"
                label="Reinigung"
              />

              <ImageTile
                src={laubreinigung}
                alt="Gartenpflege"
                className="mt-12 h-65 sm:h-85"
                label="Grünflächen"
              />

              <ImageTile
                src={winterdienst}
                alt="Objektservice"
                className="h-55 sm:h-70"
                label="Objektservice"
              />

              <ImageTile
                src={bueroreinigung}
                alt="Professionelle Gebäudedienstleistung"
                className="mt-12 h-55 sm:h-70"
                label="Details"
              />

            </div>

          </div>

        </div>

      </section>
  )
}
