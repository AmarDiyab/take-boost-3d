import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { IoIosClose } from "react-icons/io";
import PropTypes from "prop-types";

const FAQSection = ({ FAQ }) => {
  return (
    <div
      className={`about-parallax my-20 pb-20 ${
        FAQ ? "text-black" : "text-white"
      } mx-12`}
      id="faq"
    >
      <h5 className="text-6xl font-bold ml-8">FAQ</h5>
      <div className="flex justify-center items-center pt-4">
        <hr className="w-[99%]" />
      </div>
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          indicator={<IoIosClose size={60} />}
          title="GENERAL"
          className={`[&_span]:${
            FAQ ? "text-black" : "text-white"
          } [&_span]:font-medium [&_span]:text-2xl [&_span]:ml-8 [&>h2>button>span]:-rotate-45`}
        >
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-10 py-8 ml-8">
              <p className="text-xl">
                Q: Do I have to sign up for your texting service?
              </p>
              <p className="text-xl">
                A: No, but you should. BOOST works best when you take advantage
                of everyyyything we offer. Plus we&apos;re cool people. Text us
                about literally anything.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10 py-8 ml-8">
              <p className="text-xl">
                Q: Do I have to sign up for your texting service?
              </p>
              <p className="text-xl">
                A: No, but you should. BOOST works best when you take advantage
                of everyyyything we offer. Plus we&apos;re cool people. Text us
                about literally anything.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10 py-8 ml-8">
              <p className="text-xl">
                Q: Do I have to sign up for your texting service?
              </p>
              <p className="text-xl">
                A: No, but you should. BOOST works best when you take advantage
                of everyyyything we offer. Plus we&apos;re cool people. Text us
                about literally anything.
              </p>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          indicator={<IoIosClose size={60} />}
          title="SHIPPING"
          className={`[&_span]:${
            FAQ ? "text-black" : "text-white"
          } [&_span]:font-medium [&_span]:text-2xl [&_span]:ml-8 [&>h2>button>span]:-rotate-45`}
        >
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-10 py-8 ml-8">
              <p className="text-xl">
                Q: Do I have to sign up for your texting service?
              </p>
              <p className="text-xl">
                A: No, but you should. BOOST works best when you take advantage
                of everyyyything we offer. Plus we&apos;re cool people. Text us
                about literally anything.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10 py-8 ml-8">
              <p className="text-xl">
                Q: Do I have to sign up for your texting service?
              </p>
              <p className="text-xl">
                A: No, but you should. BOOST works best when you take advantage
                of everyyyything we offer. Plus we&apos;re cool people. Text us
                about literally anything.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10 py-8 ml-8">
              <p className="text-xl">
                Q: Do I have to sign up for your texting service?
              </p>
              <p className="text-xl">
                A: No, but you should. BOOST works best when you take advantage
                of everyyyything we offer. Plus we&apos;re cool people. Text us
                about literally anything.
              </p>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          indicator={<IoIosClose size={60} />}
          title="BRAND"
          className={`[&_span]:${
            FAQ ? "text-black" : "text-white"
          } [&_span]:font-medium [&_span]:text-2xl [&_span]:ml-8 [&>h2>button>span]:-rotate-45`}
        >
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-10 py-8 ml-8">
              <p className="text-xl">
                Q: Do I have to sign up for your texting service?
              </p>
              <p className="text-xl">
                A: No, but you should. BOOST works best when you take advantage
                of everyyyything we offer. Plus we&apos;re cool people. Text us
                about literally anything.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10 py-8 ml-8">
              <p className="text-xl">
                Q: Do I have to sign up for your texting service?
              </p>
              <p className="text-xl">
                A: No, but you should. BOOST works best when you take advantage
                of everyyyything we offer. Plus we&apos;re cool people. Text us
                about literally anything.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10 py-8 ml-8">
              <p className="text-xl">
                Q: Do I have to sign up for your texting service?
              </p>
              <p className="text-xl">
                A: No, but you should. BOOST works best when you take advantage
                of everyyyything we offer. Plus we&apos;re cool people. Text us
                about literally anything.
              </p>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

FAQSection.propTypes = {
  FAQ: PropTypes.bool,
};

export default FAQSection;
