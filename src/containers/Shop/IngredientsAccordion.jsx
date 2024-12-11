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
                // markers: true
            }
        })

        tl.to("#shop", {
            color: "white",
            background: "linear-gradient(to left, #fe710b, #ffb804)",
        })
    }, [{scope: "#ingredient-accordion"}])
  return (
    <div className='flex flex-col mx-40 max-lg:mx-8 mt-20' id='ingredient-accordion'>
        <h3 className='text-[10rem] max-lg:text-6xl max-lg:leading-[4rem] font-extrabold leading-[11rem]'>WHAT&apos;S</h3>
        <div className='flex gap-10 items-end'>
            <p className='text-xl'>Peep the <br /> ingredients</p>
            <h2 className='text-[10rem] max-lg:text-6xl max-lg:leading-[4rem] font-extrabold leading-[6rem]'>INSIDE?</h2>
        </div>

        <Accordion className='mt-20 max-lg:mt-10'>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          indicator={<IoIosClose size={60} />}
          title="ELDERBERRY"
          className="[&_span]:text-white [&_span]:font-medium [&_span]:text-2xl [&_span]:ml-8 max-lg:[&_span]:ml-2 [&>h2>button>span]:-rotate-45"
        >                
            </AccordionItem>
            <AccordionItem
          key="2"
          aria-label="Accordion 2"
          indicator={<IoIosClose size={60} />}
          title="VITAMIN C"
          className="[&_span]:text-white [&_span]:font-medium [&_span]:text-2xl [&_span]:ml-8 max-lg:[&_span]:ml-2 [&>h2>button>span]:-rotate-45"
        >                
            </AccordionItem>
            <AccordionItem
          key="3"
          aria-label="Accordion 3"
          indicator={<IoIosClose size={60} />}
          title="ZINC"
          className="[&_span]:text-white [&_span]:font-medium [&_span]:text-2xl [&_span]:ml-8 max-lg:[&_span]:ml-2 [&>h2>button>span]:-rotate-45"
        >                
            </AccordionItem>
            <AccordionItem
          key="4"
          aria-label="Accordion 3"
          indicator={<IoIosClose size={60} />}
          title="INACTIVE INGREDIENTS"
          className="[&_span]:text-white [&_span]:font-medium [&_span]:text-2xl [&_span]:ml-8 max-lg:[&_span]:ml-2 [&>h2>button>span]:-rotate-45"
        >                
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default IngredientsAccordion