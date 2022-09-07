import React from "react";

const HomeSection = () => {
  return (
    <div className="h-screen bg-center bg-no-repeat bg-cover bg-home-bg">
      <section className="container flex items-center justify-center h-full mx-auto max-w-7">
        <div className="text-center text-white">
          <h1 className="mb-6 text-4xl font-medium lg:text-5xl">EJP Bygg AB</h1>
          <h2 className="text-xl lg:text-3xl">
            Snickare med känsla för detaljer
          </h2>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
