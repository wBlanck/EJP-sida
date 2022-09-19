import React from "react";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const CarouselItem = ({ children, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center h-[350px] md:h-[450px]"
      style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children, indicatorPosition }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex <= 0) {
      newIndex = 0;
    } else if (newIndex <= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="overflow-hidden">
      {/* inner */}
      <div
        className="transition-all duration-500 whitespace-nowrap"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>

      {/* INDICATORS */}
      <div
        className={`flex items-center justify-center gap-10 text-white ${
          indicatorPosition === "right" ? "lg:justify-end" : "lg:justify-start"
        }`}>
        <button onClick={() => updateIndex(activeIndex - 1)}>
          <BsArrowLeft size={"28px"} className="" />
        </button>
        <div className="flex gap-4 text-lg italic font-thin">
          <span>0{activeIndex + 1}</span> |
          <span>0{React.Children.count(children)}</span>
        </div>
        <button onClick={() => updateIndex(activeIndex + 1)}>
          <BsArrowRight size={"28px"} className="" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
