import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white text-center flex flex-col gap-10 p-4 lg:gap-20">
      <h3 className="max-w-4xl mx-auto text-2xl lg:text-4xl">
        Inget jobb är för stort eller för litet, kontakta oss nedan för en
        kostnadsfri offert
      </h3>
      <div className="flex flex-col gap-10 text-xl">
        <div className="flex items-center justify-evenly">
          {/* CONTACT PERSONS CONTAINER */}
          <div className="flex flex-col">
            <span>Bertil</span>
            <span>070-4585956</span>
          </div>
          <div className="flex flex-col">
            <span>Sune</span>
            <span>076-8464987</span>
          </div>
        </div>
        {/* HR LINE */}
        <div className="mx-auto w-5/6 h-[2px] bg-white"></div>
        <div className="flex flex-col gap-3">
          <span>byggareb0b@gmail.com</span>
          <span>
            Skeppsbrogatan 48 <br />
            Box 50013 <br /> 97234 Luleå
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
