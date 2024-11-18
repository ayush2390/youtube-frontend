import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Testimonial = ({
  testimonialprofilepicture = images.testimonialprofilepicture,
  arrow = images.arrow,
  stars = images.stars,
  sparkles = images.sparkles,
  sectionheading = texts.sectionheading,
  sectionheading1 = texts.sectionheading1,
  sectionheading2 = texts.sectionheading2,
  sectionsubheading = texts.sectionsubheading,
  testimonialauthorname = texts.testimonialauthorname,
  testimonialauthortitle = texts.testimonialauthortitle,
  testimonialcontent = texts.testimonialcontent,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[1360px] w-full box-border min-h-[567.83px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center gap-[16px] p-[0px_0px_0px__0px]">
        <div className="max-w-[1360px]  w-full box-border min-h-[58px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
          <span
            style={{ fontFamily: "American Captain" }}
            className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[103%] tracking-[0%] whitespace-pre-wrap text-[#000000ff]"
          >
            {sectionheading}
          </span>
          <span
            style={{ fontFamily: "American Captain" }}
            className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[103%] tracking-[0%] whitespace-pre-wrap text-[#ff4f51ff]"
          >
            {sectionheading1}
          </span>
          <span
            style={{ fontFamily: "American Captain" }}
            className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[103%] tracking-[0%] whitespace-pre-wrap text-[#000000ff]"
          >
            {sectionheading2}
          </span>
        </div>

        <div className="max-w-[1000px]  w-full box-border min-h-[88px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
          <span className="text-[32px] font-hanken font-[400] no-underline none leading-[44px] whitespace-pre-wrap text-[#000000b2]">
            {sectionsubheading}
          </span>
        </div>
        <div className="absolute left-[5%] top-[13%]">
          <img src={arrow} className="h-[98px] w-[79px]" />
        </div>

        {/* testimonials1 */}
        <section className="max-w-[1200px] w-full box-border min-h-[337.83px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[20px] p-[30px_50px_30px__50px] rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] bg-[#ff4f51ff] box-border border-l-[5px] border-l-[#000000ff] border-r-[5px] border-r-[#000000ff] border-t-[5px] border-t-[#000000ff] border-b-[5px] border-b-[#000000ff] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute left-[87%] top-[-10%] z-[3]">
            <img src={sparkles} className="h-[107px] w-[107px]" />
          </div>
          <div className="max-w-[1100px] w-full box-border min-h-[115.83px] opacity-[1] z-[0]  rotate-[0deg]   flex justify-start items-center gap-[28px] p-[0px_0px_0px__0px]">
            <div className=" w-[115.83px] h-[115.83px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-tl-[920.62px] rounded-tr-[920.62px] rounded-br-[920.62px] rounded-bl-[920.62px] box-border border-l-[2.709376811981201px] border-l-[#000000ff] border-r-[2.709376811981201px] border-r-[#000000ff] border-t-[2.709376811981201px] border-t-[#000000ff] border-b-[2.709376811981201px] border-b-[#000000ff]">
              <img
                src={`${testimonialprofilepicture}`}
                className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                alt="TestimonialProfilePicture"
              />{" "}
            </div>

            <div className=" max-w-[945.17px] w-full box-border min-h-[79px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start p-[0px_0px_0px__0px]">
              <div className="max-w-[956.17px] w-full box-border min-h-[40px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-wrap justify-start items-start gap-[15px] gap-y-[15px] p-[0px_0px_0px__0px]">
                <div className="max-w-[159px] flex  w-full box-border min-h-[40px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span
                    style={{ fontFamily: "American Captain" }}
                    className="text-[40px] font-[American Captain] font-[400] no-underline none leading-[40px] whitespace-nowrap text-[#ffffffff]"
                  >
                    {testimonialauthorname}
                  </span>
                  <img src={stars} className="ml-4 mt-1 w-[149px] h-[28px]" />
                </div>

                <div className="max-w-[149.69px] w-full box-border min-h-[28.74px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-start gap-[1.49px] p-[0px_0px_0px__0px]">
                  <div className="w-[28.74px] h-[28.74px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
                    <div className="w-[26.95px] h-[25.73px] top-[1.06px] left-[0.9px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884307 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[2.81px] h-[7.37px] top-[3.08px] left-[14.54px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884308 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[6.88px] h-[4.7px] top-[11.73px] left-[19.33px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884309 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="w-[28.74px] h-[28.74px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden">
                    <div className="w-[26.95px] h-[25.73px] top-[1.06px] left-[0.9px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884311 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[2.81px] h-[7.37px] top-[3.08px] left-[14.54px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884312 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[6.88px] h-[4.7px] top-[11.73px] left-[19.33px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884313 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="w-[28.74px] h-[28.74px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden">
                    <div className="w-[26.95px] h-[25.73px] top-[1.06px] left-[0.9px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884315 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[2.81px] h-[7.37px] top-[3.08px] left-[14.54px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884316 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[6.88px] h-[4.7px] top-[11.73px] left-[19.33px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884317 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="w-[28.74px] h-[28.74px] opacity-[1] z-[3]  rotate-[0deg]   overflow-hidden">
                    <div className="w-[26.95px] h-[25.73px] top-[1.06px] left-[0.9px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884319 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[2.81px] h-[7.37px] top-[3.08px] left-[14.54px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884320 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[6.88px] h-[4.7px] top-[11.73px] left-[19.33px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884321 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                  </div>

                  <div className="w-[28.74px] h-[28.74px] opacity-[1] z-[4]  rotate-[0deg]   overflow-hidden">
                    <div className="w-[26.95px] h-[25.73px] top-[1.06px] left-[0.9px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884323 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[2.81px] h-[7.37px] top-[3.08px] left-[14.54px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884324 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>

                    <div className="w-[6.88px] h-[4.7px] top-[11.73px] left-[19.33px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden absolute">
                      <div className="nodeBg-20884325 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[333px] w-full box-border min-h-[39px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[23.71px] font-hanken font-[400] no-underline none leading-[39.472231532781734px] whitespace-nowrap text-[#ffffffff]">
                  {testimonialauthortitle}
                </span>
              </div>
            </div>
          </div>

          <div className="max-w-[1100px] w-full box-border min-h-[142px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[40px_0px_40px__0px] rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] bg-[#fec900ff] box-border border-l-[3px] border-l-[#000000ff] border-r-[3px] border-r-[#000000ff] border-t-[3px] border-t-[#000000ff] border-b-[3px] border-b-[#000000ff]">
            <div className="max-w-[930px] w-full box-border min-h-[62px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
              <span className="text-[24px] font-hanken font-[400] no-underline none leading-[31.439998626708984px] whitespace-pre-wrap text-[#000000ff]">
                {testimonialcontent}
              </span>
            </div>
          </div>
        </section>
        {/* Frame 14100830211 */}
        <section className="max-w-[112px] w-full box-border min-h-[36px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[16px] p-[10px_0px_10px__0px]">
          <div className="w-[16px] h-[16px] opacity-[1] z-[0]  rotate-[0deg]   bg-[#000000ff]"></div>

          <div className="w-[16px] h-[16px] opacity-[1] z-[1]  rotate-[0deg]   bg-[#00000033]"></div>

          <div className="w-[16px] h-[16px] opacity-[1] z-[2]  rotate-[0deg]   bg-[#00000033]"></div>

          <div className="w-[16px] h-[16px] opacity-[1] z-[3]  rotate-[0deg]   bg-[#00000033]"></div>
        </section>

        <div className="w-[65.54px] h-[115.98px] top-[8.59%] left-[4.39%] opacity-[1] z-[4]  rotate-[0deg] overflow-hidden box-border absolute">
          <div className="nodeBg-20884367 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
        </div>
        {/* Sparkles1 */}
        <section className="w-[107.96px] min-h-[107.96px] top-[27.83%] left-[82.83%] opacity-[1] z-[5]  rotate-[90.02deg]   flex flex-nowrap justify-between items-center content-space-between p-[0px_0px_0px__0px] absolute">
          <div className="w-[109.67px] h-[109.65px] opacity-[1] z-[0]  rotate-[-90.02deg]  rotate-[-90.02deg]  origin-[50%_49.99%] overflow-hidden box-border">
            <div className="nodeBg-20884327 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Testimonial;
