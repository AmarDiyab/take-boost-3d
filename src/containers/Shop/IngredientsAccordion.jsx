import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { IoIosClose } from 'react-icons/io'

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

        <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          indicator={<IoIosClose size={60} />}
          title="BRAND"
          className="[&_span]:text-white [&_span]:font-medium [&_span]:text-2xl [&_span]:ml-8 [&>h2>button>span]:-rotate-45"
        >                
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default IngredientsAccordion