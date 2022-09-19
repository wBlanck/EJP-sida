import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

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
        <div className="z-10 text-center text-white">
          <h1 className="mb-6 text-4xl font-medium xl:text-5xl">EJP Bygg AB</h1>
          <h2 className="text-xl xl:text-3xl">
            Snickare med känsla för detaljer
          </h2>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
