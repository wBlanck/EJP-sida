import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <div
      className="relative h-screen bg-center bg-no-repeat bg-cover bg-home-bg"
      id="home">
      <div className="absolute w-full h-full gradient-bg" />
      <section className="container flex items-center justify-center h-full mx-auto max-w-7">
        {/* <div className="absolute bottom-0 left-0 flex justify-between w-full text-2xl text-white">
          <button className="p-4">
            <FiPhone className="inline text-3xl" />
          </button>
          <button className="p-4">
            <AiOutlineMail className="inline text-3xl" />
          </button>
        </div> */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          animate={{ opacity: 1 }}
          className="z-10 text-center text-white">
          <h1 className="mb-6 text-4xl font-medium tracking-widest xl:text-5xl">
            EJP Bygg AB
          </h1>
          <h2 className="text-xl tracking-wider xl:text-3xl">
            Snickare med känsla för detaljer
          </h2>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeSection;
