import roof from "../assets/plannjaroof.jpg";
import altan from "../assets/altan.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <div className="bg-[#1f1f1f] py-28 relative">
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
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center min-h-screen mx-auto lg:px-6 max-w-7xl lg:flex-row">
        <div className=" w-full lg:order-2 lg:h-[500px] flex flex-col gap-4 ">
          <h2 className="mb-6 text-2xl font-medium text-center text-white lg:text-end">
            Plannja Royal Tak
          </h2>
          <img
            src={roof}
            alt=""
            className="block object-cover h-[350px] md:h-[450px]"
          />
          <div className="flex items-center justify-center gap-10 text-white lg:justify-end">
            <button>
              <BsArrowLeft size={"28px"} className="" />
            </button>
            <div className="flex gap-4 text-lg">
              <span>01</span> |<span>06</span>
            </div>
            <button>
              <BsArrowRight size={"28px"} className="" />
            </button>
          </div>
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
        <div className=" w-full lg:h-[500px] flex flex-col gap-4 ">
          <h2 className="mb-6 text-2xl font-medium text-center text-white lg:text-start">
            Plannja Royal Tak
          </h2>
          <img
            src={roof}
            alt=""
            className="block object-cover h-[350px] md:h-[450px]"
          />
          <div className="flex items-center justify-center gap-10 text-white lg:justify-start">
            <button>
              <BsArrowLeft size={"28px"} className="" />
            </button>
            <div className="flex gap-4 text-lg">
              <span>01</span> |<span>06</span>
            </div>
            <button>
              <BsArrowRight size={"28px"} className="" />
            </button>
          </div>
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
