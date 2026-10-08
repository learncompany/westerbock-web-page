import fullPic from '../../../assets/pictures/logo/berg-rhein-all-copy.png'

import pic1 from "../../../assets/pictures/generall.jpg"
import pic2 from "../../../assets/pictures/bueroreinigung.jpg"
import pic3 from "../../../assets/pictures/entruemplung.jpg"
import pic4 from "../../../assets/pictures/glasreinigung.jpg"
import pic5 from "../../../assets/pictures/gruenflaechenpflege.jpg"
import pic6 from "../../../assets/pictures/grundreinigung.jpg"
import pic7 from "../../../assets/pictures/laubenbeseitigung.jpg"
import pic8 from "../../../assets/pictures/only-building.jpg"
import pic9 from "../../../assets/pictures/photovoltaik.jpg"
import pic10 from "../../../assets/pictures/winterdienst.jpg"
import { motion } from 'motion/react'
import { useNavigation } from 'react-router'
import { CgSpinner } from 'react-icons/cg'



const pics = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic8,
  pic6,
  pic9,
  pic10,
  pic7,
];

const generalDelay = 1;

export default function HomeHeroSection() {

  return (
    <motion.div className='flex flex-col md:flex-row w-full h-screen min-h-screen relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: generalDelay }}
    >
      <section className='absolute size-full'>
        <div className='absolute size-full bg-linear-to-br from-20% top-0 left-0 right-0 bottom-0 mx-auto my-auto'>
          <div className='size-full relative'>
            {pics.map((item, index) => {
              return (
                <motion.img className='absolute size-full object-cover bg-linear-to-l from-30% bg-none' src={item}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: generalDelay + (index * 0.5) }}
                />
              )
            })}
          </div>
        </div>
      </section>
      <motion.section className='w-full h-full bg-linear-to-b to-95% to-white z-10 animate-in blur-in flex justify-center items-center md:items-end overflow-clip md:p-10 pt-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
      >
        <motion.img src={fullPic}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: generalDelay + 5, type: "keyframes" }}
          className='p-2 md:w-8/12'
        />
      </motion.section>
    </motion.div>

  )
}
/**
 * 
 * <div className='flex flex-col md:flex-row w-full h-200 min-h-200'>
      <section className='order-2 md:order-1 basis-7/12 size-full bg-sky-200 flex justify-center items-center overflow-clip'>
        <img className='p-4' src={fullPic} />
      </section>
      <section className='order-1 md:order-2 basis-5/12 size-full relative'>
        <div className='size-full relative'>
          {pics.map((item, index) => {
          return (
            <motion.img className='absolute size-full object-cover' src={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.8 }}
            />
          )
        })}
        </div>
        <div className='absolute size-full bg-linear-to-br from-20% from-sky-400 top-0 left-0 right-0 bottom-0 mx-auto my-auto'/>
      </section>
    </div>
 * 
 */