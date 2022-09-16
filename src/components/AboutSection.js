import aboutOne from "../assets/about1.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const AboutSection = () => {
  return (
    <div className="bg-[#1f1f1f] py-24 relative lg:h-screen flex flex-col gap-10">
      <div className="h-[400px] w-full lg:h-[450px] lg:w-[50%] relative lg:absolute lg:right-10 lg:top-10 z-[2]">
        <img
          src={aboutOne}
          alt=""
          className="block object-cover w-full h-full"
        />
      </div>
      <section className="flex items-center w-full h-full p-4 mx-auto">
        <div className="absolute left-0 bg-[#232323] h-[500px] w-4/5 -z-0 hidden lg:block"></div>
        <div className="relative flex flex-col w-full gap-5 mx-auto text-center text-white max-w-7xl lg:text-start">
          <h2 className="text-2xl font-medium ">EJP Bygg AB</h2>
          <p className="max-w-xl mx-auto lg:text-l lg:ml-0 lg:max-w-md">
            Vi är ett traditionellt byggföretag som värnar om detaljerna. Med
            lokala leverantörer som vi har samarbete med, så ger vi kunden en
            slutprodukt som ni kan vara stolt över. Vi utför olika projekt,
            <span className="text-orange-600"> total entreprenad</span> eller
            <span className="text-orange-600"> renovering</span> både små och
            större projekt!
          </p>

          <button className="flex items-center justify-center gap-3 lg:self-start lg:w-2/3 lg:gap-10 lg:justify-start">
            <span className="text-lg">Läs Mer</span>
            <AiOutlineArrowRight className="text-2xl lg:text-xl" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
