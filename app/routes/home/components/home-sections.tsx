import IntroStatement from "./intro-statement"
import ServiceSystem from "./service-system"
import ImageExperience from "./image-experience"
import ImageMosaic from "./image-mosaic"
import ServiceMatrix from "./service-matrix"
import ProcessSection from "./process-section"
import CtaImage from "./cta-image"


export function HomeSectionsWithImages() {
  return (

    <main className="bg-white text-[#0F446A]">

      {/* =====================================================
          INTRO / STATEMENT
      ===================================================== */}

      <IntroStatement />


      {/* =====================================================
          SERVICE SYSTEM
      ===================================================== */}


      <ServiceSystem />


      {/* =====================================================
          IMAGE + EXPERIENCE
      ===================================================== */}

      <ImageExperience />


      {/* =====================================================
          IMAGE MOSAIC
      ===================================================== */}

      <ImageMosaic />


      {/* =====================================================
          SERVICE MATRIX
      ===================================================== */}


      <ServiceMatrix/>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <ProcessSection/>


      {/* =====================================================
          CTA IMAGE
      ===================================================== */}

      <CtaImage/>

    </main>
  )
}
