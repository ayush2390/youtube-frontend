import React from "react";
import Hero from "./HomePage/Hero/Hero";
import ChooseUs from "./HomePage/ChooseUs/ChooseUs";
import Works from "./Works/Works";
import Testimonial from "./HomePage/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col gap-[70px] pt-[70px]">
      <Hero />
      <ChooseUs />
      <Works />
      <Testimonial />
    </div>
  );
};

export default Home;
