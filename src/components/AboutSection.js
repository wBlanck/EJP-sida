import aboutOne from "../assets/about1.jpg";
import aboutTwo from "../assets/about2.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const AboutSection = () => {
  const [readMore, setReadMore] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter>
      <div
        className="bg-[#1f1f1f] py-24 relative lg:h-screen flex flex-col gap-10"
        id="about">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="h-[400px] w-full lg:h-[450px] lg:w-[50%] relative lg:absolute lg:right-10 lg:top-10 z-[2]">
          {!readMore && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={aboutOne}
              alt=""
              className="block object-cover w-full h-full "
            />
          )}
          {readMore && (
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={aboutTwo}
              alt=""
              className="block object-cover w-full h-full"
            />
          )}
        </motion.div>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="flex items-center w-full h-full p-4 mx-auto">
          <div className="absolute left-0 bg-[#232323] h-[550px] w-4/5 -z-0 hidden xl:block"></div>
          <div className="relative flex flex-col w-full gap-5 mx-auto text-center text-white max-w-7xl lg:text-start">
            {readMore && (
              <motion.h2
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-medium">
                Hur vi jobbar
              </motion.h2>
            )}
            {!readMore && (
              <motion.h2
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-medium ">
                EJP Bygg AB
              </motion.h2>
            )}
            {!readMore && (
              <motion.p
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 1 }}
                className="max-w-xl mx-auto lg:text-l lg:ml-0 lg:max-w-md xl:max-w-lg">
                Vi ??r ett traditionellt byggf??retag som v??rnar om detaljerna.
                Med lokala leverant??rer som vi har samarbete med, s?? ger vi
                kunden en slutprodukt som ni kan vara stolt ??ver. Vi utf??r olika
                projekt,
                <span className="text-orange-600"> total entreprenad </span>
                eller
                <span className="text-orange-600"> renovering </span> b??de sm??
                och st??rre projekt!
              </motion.p>
            )}
            {readMore && (
              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 1 }}
                className="">
                <p className="max-w-xl mx-auto lg:text-l lg:ml-0 lg:max-w-md xl:max-w-xl">
                  Vi arbetar alla mot gemensamma tydliga m??l som s??kerst??ller
                  optimalt resultat f??r v??ra kunder. N??r vi vet var vi ska och
                  vad som f??rv??ntas gynnar det alla.
                  <br />
                  <br />
                  Tydliga offerter och rak kommunikation ??r viktig f??r oss. Att
                  i alla l??gen ha en bra dialog med kund och samarbetspartners
                  g??r hela processen ??ppen och att vi f??rst??r varandra. D?? blir
                  resultaten bra.
                  <br />
                  <br />
                  Vi tar ansvar f??r v??rt arbete, varandra och v??r milj??. Vi tar
                  ansvar f??r det vi s??ger, signalerar och g??r. V??rt arbete ??r
                  att alltid efterstr??va h??llbarhet och allt vi g??r ska vi kunna
                  st?? upp f??r.
                  <br />
                  <br />
                </p>

                <h3 className="mb-8 text-3xl font-medium">Tj??nster</h3>
                <ul className="flex flex-wrap justify-center gap-5 list-inside lg:justify-start">
                  <li>Fasadarbete</li>
                  <li>K??ks-och Badrumsrenoveringar</li>
                  <li>Golvl??ggning</li>
                  <li>Vattenburen Golvv??rme</li>
                  <li>Golvrenoveringar</li>
                  <li>M??leri</li>
                </ul>
              </motion.div>
            )}

            {readMore && (
              <motion.button
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 1 }}
                className="flex items-center self-center justify-center gap-3 italic font-bold transition-colors lg:self-start lg:gap-5 lg:justify-start hover:text-orange-600 w-max"
                onClick={() => {
                  setReadMore(!readMore);
                }}>
                <BsArrowLeft className="text-2xl lg:text-xl" />
                Visa Mindre
              </motion.button>
            )}
            {!readMore && (
              <motion.button
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                animate={{ opacity: 1 }}
                className="flex items-center self-center justify-center gap-3 italic font-bold transition-colors w-max lg:gap-5 lg:justify-start hover:text-orange-600 lg:self-start"
                onClick={() => {
                  setReadMore(!readMore);
                }}>
                Visa Mer
                <BsArrowRight className="text-2xl lg:text-xl" />
              </motion.button>
            )}
          </div>
        </motion.section>
      </div>
    </AnimatePresence>
  );
};

export default AboutSection;
