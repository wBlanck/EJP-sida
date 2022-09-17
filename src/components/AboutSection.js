import aboutOne from "../assets/about1.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const AboutSection = () => {
  const [readMore, setReadMore] = useState(true);

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
        <div className="absolute left-0 bg-[#232323] h-[550px] w-4/5 -z-0 hidden xl:block"></div>
        <div className="relative flex flex-col w-full gap-5 mx-auto text-center text-white max-w-7xl lg:text-start">
          <h2 className="text-3xl font-medium ">
            {!readMore && "EJP Bygg AB"}
            {readMore && "Hur vi jobbar"}
          </h2>
          {!readMore && (
            <p className="max-w-xl mx-auto lg:text-l lg:ml-0 lg:max-w-md xl:max-w-lg">
              Vi är ett traditionellt byggföretag som värnar om detaljerna. Med
              lokala leverantörer som vi har samarbete med, så ger vi kunden en
              slutprodukt som ni kan vara stolt över. Vi utför olika projekt,
              <span className="text-orange-600"> total entreprenad </span>eller
              <span className="text-orange-600"> renovering </span> både små och
              större projekt!
            </p>
          )}
          {readMore && (
            <div className="">
              <p className="max-w-xl mx-auto lg:text-l lg:ml-0 lg:max-w-md xl:max-w-xl">
                Vi arbetar alla mot gemensamma tydliga mål som säkerställer
                optimalt resultat för våra kunder. När vi vet var vi ska och vad
                som förväntas gynnar det alla.
                <br />
                <br />
                Tydliga offerter och rak kommunikation är viktig för oss. Att i
                alla lägen ha en bra dialog med kund och samarbetspartners gör
                hela processen öppen och att vi förstår varandra. Då blir
                resultaten bra.
                <br />
                <br />
                Vi tar ansvar för vårt arbete, varandra och vår miljö. Vi tar
                ansvar för det vi säger, signalerar och gör. Vårt arbete är att
                alltid eftersträva hållbarhet och allt vi gör ska vi kunna stå
                upp för.
                <br />
                <br />
              </p>

              <h3 className="mb-8 text-3xl font-medium">Tjänster</h3>
              <ul className="flex flex-wrap justify-center gap-5 list-inside lg:justify-start">
                <li>Fasadarbete</li>
                <li>Köks-och Badrumsrenoveringar</li>
                <li>Golvläggning</li>
                <li>Vattenburen Golvvärme</li>
                <li>Golvrenoveringar</li>
                <li>Måleri</li>
              </ul>
            </div>
          )}

          <button
            className="flex items-center justify-center gap-3 italic lg:self-start lg:w-2/3 lg:gap-5 lg:justify-start"
            onClick={() => {
              setReadMore(!readMore);
            }}>
            {readMore ? (
              <>
                <BsArrowLeft className="text-2xl lg:text-xl" />
                Visa Mindre
              </>
            ) : (
              <>
                Visa Mer
                <BsArrowRight className="text-2xl lg:text-xl" />
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
