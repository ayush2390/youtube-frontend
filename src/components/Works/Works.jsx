import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";

//The data/*.js files are objects for default data, use the component with prop values of your choice/requirement

const Works = ({
  videothumbnail = images.videothumbnail,
  play = images.play,
  sectiontitle = texts.sectiontitle,
  sectiontitle1 = texts.sectiontitle1,
  sectionsubtitle = texts.sectionsubtitle,
  point1 = texts.point1,
  point2 = texts.point2,
  point3 = texts.point3,
  point4 = texts.point4,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[1360px] w-full box-border min-h-[1354px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center gap-[16px] p-[0px_0px_0px__0px]">
        <div className="max-w-[260px] w-full box-border min-h-[58px] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px]">
          <span
            style={{ fontFamily: "American Captain" }}
            className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[57.73600101470947px] whitespace-nowrap text-[#000000ff]"
          >
            {sectiontitle}
          </span>
          <span
            style={{ fontFamily: "American Captain" }}
            className="text-[56px] font-[American Captain] font-[400] no-underline none leading-[57.73600101470947px] whitespace-nowrap text-[#ff4f51ff]"
          >
            {sectiontitle1}
          </span>
        </div>

        <div className="max-w-[1360px] w-full box-border min-h-[44px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
          <span className="text-[32px] font-hanken font-[400] no-underline none leading-[44px] whitespace-pre-wrap text-[#000000b2]">
            {sectionsubtitle}
          </span>
        </div>
        {/* Frame 14100830191 */}
        <section className="max-w-[1360px] w-full box-border min-h-[780px] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-center gap-[10px] p-[55px_0px_0px__0px] rounded-tl-[32px] rounded-tr-[32px] rounded-br-[32px] rounded-bl-[32px] bg-[#ff4f51ff] box-border border-l-[4px] border-l-[#000000ff] border-r-[4px] border-r-[#000000ff] border-t-[4px] border-t-[#000000ff] border-b-[4px] border-b-[#000000ff]">
          <div className="w-[991px] h-[725px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[1009px] h-[725px] top-[0.5px] left-[0.5px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
              <div className="w-[991px] h-[725px] top-[0px] left-[0px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-tl-[32px] rounded-tr-[32px] rounded-br-[0px] rounded-bl-[0px] shadow-[15px_12px_0px_0px_rgba(0,0,0,1)] absolute">
                <img
                  src={`${videothumbnail}`}
                  className="absolute opacity-[0.6000000238418579] bg-transparent bg-center bg-no-repeat object-cover bg-crop w-[992px] h-[978px] left-[0px] top-[0px]"
                  alt="VideoThumbnail"
                />{" "}
              </div>
            </div>

            <div className="w-[102px] h-[102px] top-[311px] left-[445px] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="w-[102px] h-[102px] top-[0px] flex justify-center items-center left-[0px] opacity-[1] z-[0]  rotate-[0deg]   rounded-full bg-[#ffffffff] box-border border-l-[1px] border-l-[#000000ff] border-r-[1px] border-r-[#000000ff] border-t-[1px] border-t-[#000000ff] border-b-[1px] border-b-[#000000ff] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] absolute">
                <img src={play} className="w-[30px] h-[30px]" />
              </div>

              <div className="w-[22.5px] h-[25.98px] top-[38.01px] left-[43.5px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
                <div className="nodeBg-20884258 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
            </div>
          </div>
        </section>
        {/* Frame 14100830141 */}
        <section className="max-w-[1360px] w-full box-border min-h-[94px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-wrap justify-center items-center gap-[10px] gap-y-[10px] p-[25px_0px_25px__0px] rounded-tl-[19px] rounded-tr-[19px] rounded-br-[19px] rounded-bl-[19px] bg-[#fec900ff]">
          <div className="max-w-[1300px] w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]  leading-[0px]  font-hanken text-[32px] font-bold flex items-center">
            {point1}
          </div>
        </section>
        {/* Frame 14100830151 */}
        <section className="max-w-[1360px] w-full box-border min-h-[94px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[25px_0px_25px__0px] rounded-tl-[19px] rounded-tr-[19px] rounded-br-[19px] rounded-bl-[19px] bg-[#fec900ff]">
          <div className="max-w-[1300px] w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] font-hanken text-[32px] font-bold flex items-center">
            {point2}
          </div>
        </section>
        {/* Frame 14100830161 */}
        <section className="max-w-[1360px] w-full box-border min-h-[94px] opacity-[1] z-[5]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[25px_0px_25px__0px] rounded-tl-[19px] rounded-tr-[19px] rounded-br-[19px] rounded-bl-[19px] bg-[#fec900ff]">
          <div className="max-w-[1300px] w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] font-hanken text-[32px] font-bold flex items-center">
            {point3}
          </div>
        </section>
        {/* Frame 14100830171 */}
        <section className="max-w-[1360px] w-full box-border min-h-[94px] opacity-[1] z-[6]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[25px_0px_25px__0px] rounded-tl-[19px] rounded-tr-[19px] rounded-br-[19px] rounded-bl-[19px] bg-[#fec900ff]">
          <div className="max-w-[1300px] w-full box-border min-h-[44px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] font-hanken text-[32px] font-bold flex items-center">
            {point4}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Works;
