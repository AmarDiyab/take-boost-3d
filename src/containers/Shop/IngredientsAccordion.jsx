import gsap from 'gsap'
import AccordionComponent from '../../components/AccordionComponent'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)
const IngredientsAccordion = () => {

    useGSAP(() => {

        const tl = gsap.timeline({
            duration: 0,
            scrollTrigger: {
                trigger: "#ingredient-accordion",
                start: "top center",
                end: "top+=25 center",
                scrub: true,
                markers: true
            }
        })

        tl.to("#shop", {
            color: "white",
            background: "linear-gradient(to left, #fe710b, #ffb804)",
        })
    }, [{scope: "#ingredient-accordion"}])
  return (
    <div className='flex flex-col mx-40 mt-20' id='ingredient-accordion'>
        <h3 className='text-[10rem] font-extrabold leading-[11rem]'>WHAT&apos;S</h3>
        <div className='flex gap-10 items-end'>
            <p className='text-xl'>Peep the <br /> ingredients</p>
            <h2 className='text-[10rem] font-extrabold leading-[6rem]'>INSIDE?</h2>
        </div>

        <AccordionComponent />
    </div>
  )
}

export default IngredientsAccordion