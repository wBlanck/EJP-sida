import roof from "../assets/plannjaroof.jpg";
import altan from "../assets/altan.jpg";
import { motion } from "framer-motion";
import Carousel, { CarouselItem } from "./Carousel";

const ProjectSection = () => {
  return (
    <div className="bg-[#1f1f1f] py-28 relative" id="projects">
      <motion.span
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: true }}
        className="absolute top-0 w-full text-3xl italic tracking-widest text-center text-white sm:text-4xl md:text-5xl lg:text-7xl opacity-10 xl:text-8xl -z-0">
        TIDIGARE PROJEKT
      </motion.span>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="flex flex-col items-center justify-center min-h-screen mx-auto lg:px-6 max-w-7xl lg:flex-row">
        <div className="flex flex-col w-full gap-4 lg:order-2">
          <h2 className="mb-6 text-2xl font-medium text-center text-white lg:text-4xl lg:text-end md:text-3xl">
            Plannja Royal Tak
          </h2>
          <Carousel indicatorPosition="right">
            <CarouselItem>
              <img
                src={roof}
                alt=""
                className="block object-cover w-full h-full"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={altan}
                alt=""
                className="block object-cover w-full h-full"
              />
            </CarouselItem>
          </Carousel>
        </div>
        <div className="w-full px-4 pt-6 pb-12 text-white lg:w-2/3">
          <div className="flex flex-col items-center gap-5 mx-auto text-center max-w-7xl lg:text-start lg:items-start">
            <h3 className="hidden text-3xl lg:block">Projekt Titel</h3>
            <p className="max-w-md lg:text-l">
              Vi är ett traditionellt byggföretag som värnar om detaljerna. Med
              lokala leverantörer som vi har samarbete med, så ger vi kunden en
              slutprodukt som ni kan vara stolt över. Vi utför olika projekt,
              <span className="text-orange-600"> total entreprenad</span> eller
              <span className="text-orange-600"> renovering</span> både små och
              större projekt!
            </p>
          </div>
        </div>
      </motion.section>
      {/* PROEJCT TWO */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center min-h-screen py-10 mx-auto lg:px-6 max-w-7xl lg:flex-row">
        <div className="flex flex-col w-full gap-4 ">
          <h2 className="mb-6 text-2xl font-medium text-center text-white lg:text-4xl md:text-3xl lg:text-start">
            Plannja Royal Tak
          </h2>
          <Carousel indicatorPosition="left">
            <CarouselItem>
              <img
                src={roof}
                alt=""
                className="block object-cover w-full h-full"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                src={altan}
                alt=""
                className="block object-cover w-full h-full"
              />
            </CarouselItem>
          </Carousel>
        </div>
        <div className="w-full px-4 pt-6 pb-12 text-white lg:w-2/3">
          <div className="flex flex-col items-center gap-5 mx-auto text-center max-w-7xl lg:text-end lg:items-end">
            <h3 className="hidden text-3xl lg:block">Projekt Titel</h3>
            <p className="max-w-md lg:text-l">
              Vi är ett traditionellt byggföretag som värnar om detaljerna. Med
              lokala leverantörer som vi har samarbete med, så ger vi kunden en
              slutprodukt som ni kan vara stolt över. Vi utför olika projekt,
              <span className="text-orange-600"> total entreprenad</span> eller
              <span className="text-orange-600"> renovering</span> både små och
              större projekt!
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ProjectSection;
