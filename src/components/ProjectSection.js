import roof from "../assets/plannjaroof.jpg";
import altan from "../assets/altan.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ProjectSection = () => {
  return (
    <div className="bg-[#1f1f1f] py-28">
      <section className="container flex flex-col items-center justify-center h-full mx-auto max-w-7">
        <h2 className="mb-6 text-2xl font-medium text-white">
          Plannja Royal Tak
        </h2>

        <div className="h-[400px] w-full">
          <img
            src={roof}
            alt=""
            className="block w-full lg:right-0 lg:absolute"
          />
        </div>
        <div className=" text-white bg-[#232323] xl:pt-52 xl:pb-10 w-full pt-6 pb-12 px-4">
          <div className="flex flex-col gap-5 mx-auto text-center max-w-7xl">
            {/* SLIDER CONTROLS */}
            <div className="flex items-center justify-center gap-10">
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
            <p className="max-w-xl lg:text-l">
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
      <section className="container flex flex-col items-center justify-center h-full mx-auto mt-20 max-w-7">
        <h2 className="mb-6 text-2xl font-medium text-white">Altan Bygge</h2>

        <div className="h-[400px] w-full">
          <img
            src={altan}
            alt=""
            className="block object-cover h-full lg:right-0 lg:absolute"
          />
        </div>
        <div className=" text-white bg-[#232323] xl:pt-52 xl:pb-10 w-full pt-6 pb-12 px-4">
          <div className="flex flex-col gap-5 mx-auto text-center max-w-7xl">
            {/* SLIDER CONTROLS */}
            <div className="flex items-center justify-center gap-10">
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
            <p className="max-w-xl lg:text-l">
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
