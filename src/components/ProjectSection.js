import roof from "../assets/plannjaroof.jpg";
import altan from "../assets/altan.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ProjectSection = () => {
  return (
    <div className="bg-[#1f1f1f] py-28 relative">
      <span className="absolute top-0 w-full italic tracking-widest text-center text-white lg:text-8xl opacity-10">
        TIDIGARE PROJEKT
      </span>
      <section className="flex flex-col items-center justify-center h-screen mx-auto max-w-7xl lg:flex-row max-h-[800px]">
        <div className="h-[400px] w-full lg:order-2 lg:h-[500px] flex flex-col gap-4 ">
          <h2 className="mb-6 text-2xl font-medium text-white text-end">
            Plannja Royal Tak
          </h2>
          <img src={roof} alt="" className="block object-cover w-full h-full" />
          <div className="items-center justify-end hidden gap-10 text-white lg:flex">
            <button>
              <AiOutlineArrowLeft size={"28px"} className="" />
            </button>
            <div className="flex gap-4 text-lg">
              <span>01</span> |<span>06</span>
            </div>
            <button>
              <AiOutlineArrowRight size={"28px"} className="" />
            </button>
          </div>
        </div>
        <div className="w-full px-4 pt-6 pb-12 text-white lg:w-2/3">
          <div className="flex flex-col gap-5 mx-auto text-center max-w-7xl lg:text-start">
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
      </section>
      {/* PROEJCT TWO */}
      <section className="flex flex-col items-center justify-center h-screen mx-auto max-w-7xl lg:flex-row max-h-[800px]">
        <div className="h-[400px] w-full lg:h-[500px] flex flex-col gap-4 ">
          <h2 className="mb-6 text-2xl font-medium text-white text-start">
            Plannja Royal Tak
          </h2>
          <img src={roof} alt="" className="block object-cover w-full h-full" />
          <div className="items-center justify-start hidden gap-10 text-white lg:flex">
            <button>
              <AiOutlineArrowLeft size={"28px"} className="" />
            </button>
            <div className="flex gap-4 text-lg">
              <span>01</span> |<span>06</span>
            </div>
            <button>
              <AiOutlineArrowRight size={"28px"} className="" />
            </button>
          </div>
        </div>
        <div className="w-full px-4 pt-6 pb-12 text-white lg:w-2/3">
          <div className="flex flex-col gap-5 mx-auto text-center max-w-7xl lg:text-end">
            <h3 className="hidden text-3xl lg:block">Projekt Titel</h3>
            <p className="max-w-md lg:ml-auto lg:text-l">
              Vi är ett traditionellt byggföretag som värnar om detaljerna. Med
              lokala leverantörer som vi har samarbete med, så ger vi kunden en
              slutprodukt som ni kan vara stolt över. Vi utför olika projekt,
              <span className="text-orange-600"> total entreprenad</span> eller
              <span className="text-orange-600"> renovering</span> både små och
              större projekt!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;
