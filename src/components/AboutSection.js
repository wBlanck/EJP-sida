import aboutOne from "../assets/about1.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const AboutSection = () => {
  return (
    <div className="bg-[#1f1f1f] pt-28">
      <section className="container flex flex-col items-center justify-center h-full mx-auto max-w-7">
        <div className="h-[400px] w-full">
          <img
            src={aboutOne}
            alt=""
            className="block object-cover w-full h-full lg:right-0 lg:absolute"
          />
        </div>
        <div className=" text-white bg-[#232323] xl:pt-52 xl:pb-10 w-full pt-6 pb-12 px-4">
          <div className="flex flex-col gap-5 mx-auto text-center max-w-7xl">
            <h2 className="text-2xl font-medium ">EJP Bygg AB</h2>
            <p className="max-w-xl mx-auto lg:text-l">
              Vi är ett traditionellt byggföretag som värnar om detaljerna. Med
              lokala leverantörer som vi har samarbete med, så ger vi kunden en
              slutprodukt som ni kan vara stolt över. Vi utför olika projekt,
              <span className="text-orange-600"> total entreprenad</span> eller
              <span className="text-orange-600"> renovering</span> både små och
              större projekt!
            </p>
            <button type="button" className="italic mb-7">
              Kontakta Oss
            </button>
            <div className="flex items-center justify-center gap-3">
              <button>
                <AiOutlineArrowLeft
                  size={"28px"}
                  className="border rounded-full"
                />
              </button>
              <span className="text-lg">1 / 2</span>
              <button>
                <AiOutlineArrowRight
                  size={"28px"}
                  className="border rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
