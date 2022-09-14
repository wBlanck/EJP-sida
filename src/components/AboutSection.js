import aboutOne from "../assets/about1.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const AboutSection = () => {
  return (
    <div className="bg-[#1f1f1f] pt-28 relative lg:h-screen">
      <div className="h-[400px] w-full lg:h-[450px] lg:w-[57%] relative lg:absolute lg:right-0 lg:top-0">
        <img
          src={aboutOne}
          alt=""
          className="block object-cover w-full h-full"
        />
      </div>
      <section className="flex flex-col items-center justify-center w-full h-full mx-auto lg:justify-start lg:flex-row xl:justify-center">
        <div className=" text-white bg-[#232323] xl:pt-52 xl:pb-10 w-full pt-6 pb-12 px-4 lg:max-w-[80%] lg:px-10">
          <div className="flex flex-col gap-5 mx-auto text-center max-w-7xl lg:text-start lg:ml-0">
            <h2 className="text-2xl font-medium ">EJP Bygg AB</h2>
            <p className="max-w-xl mx-auto lg:text-l lg:ml-0 lg:max-w-sm">
              Vi är ett traditionellt byggföretag som värnar om detaljerna. Med
              lokala leverantörer som vi har samarbete med, så ger vi kunden en
              slutprodukt som ni kan vara stolt över. Vi utför olika projekt,
              <span className="text-orange-600"> total entreprenad</span> eller
              <span className="text-orange-600"> renovering</span> både små och
              större projekt!
            </p>
            <button type="button" className="italic mb-7 lg:self-start">
              Kontakta Oss
            </button>
            <div className="flex items-center justify-center gap-3 lg:self-start lg:w-full lg:gap-10">
              <button>
                <AiOutlineArrowLeft className="text-3xl border rounded-full lg:text-4xl" />
              </button>
              <span className="text-lg lg:order-1 lg:ml-auto">1 / 2</span>
              <button>
                <AiOutlineArrowRight className="text-3xl border rounded-full lg:text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
